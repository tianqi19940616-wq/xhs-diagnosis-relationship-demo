const config = window.DIAG_CONTENT;
const app = document.querySelector("#app");
const isMobilePreview = document.documentElement.classList.contains("mobile-preview");

if (isMobilePreview) {
  document.querySelector(".desktop-gate")?.remove();
}

let currentIndex = 0;
let answers = [];
let selectedScore = null;

setMeta();
setupDesktopPreview();
renderCover();

function setupDesktopPreview() {
  if (isMobilePreview || !window.matchMedia("(min-width: 768px)").matches) return;
  const iframe = document.querySelector("[data-desktop-preview]");
  if (!iframe) return;
  const target = new URL(window.location.href);
  target.searchParams.set("mobile", "1");
  iframe.setAttribute("src", target.toString());
  drawQrCode(target.toString());
}

function drawQrCode(targetUrl) {
  const box = document.querySelector(".desktop-qr-box");
  const canvas = document.querySelector(".desktop-qr-canvas");
  if (!box || !targetUrl) return;
  const image = document.createElement("img");
  image.className = "desktop-qr-image";
  image.width = 110;
  image.height = 110;
  image.alt = "手机扫码预览二维码";
  image.decoding = "async";
  image.loading = "eager";
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&format=svg&data=${encodeURIComponent(targetUrl)}`;
  if (canvas) {
    canvas.replaceWith(image);
    return;
  }
  box.querySelector(".desktop-qr-image")?.replaceWith(image);
}

function setMeta() {
  const title = config.cover?.title || "诊断工具";
  const description = config.cover?.promise || "完成测试，生成你的专属诊断报告。";
  document.title = title;
  setMetaValue("description", description);
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
}

function renderCover() {
  currentIndex = 0;
  answers = [];
  selectedScore = null;
  const cover = config.cover || {};
  const [titleA, titleB] = splitTitle(cover.title || "诊断工具");
  const lines = cover.introLines || [];
  app.innerHTML = `
    <section class="screen cover-screen">
      <div class="cover-inner">
        <div class="cover-icon" aria-hidden="true">
          <span class="cover-icon-mark"></span>
        </div>
        <h1 class="cover-title">${escapeHtml(titleA)}<br>${escapeHtml(titleB)}</h1>
        <div class="intro-lines">
          ${lines.map((line, index) => index === lines.length - 1
            ? `<p><strong>${escapeHtml(line)}</strong></p>`
            : `<p>${escapeHtml(line)}</p>`).join("")}
        </div>
        <button class="primary-button" type="button" data-action="start">${escapeHtml(cover.startLabel || "开始诊断")}</button>
        <p class="promise">${escapeHtml(cover.promise || `${config.questions.length}道题目 · 生成专属诊断报告`)}</p>
      </div>
    </section>
  `;
  bind("[data-action='start']", "click", renderQuestion);
}

function renderQuestion() {
  const question = config.questions[currentIndex];
  const system = getSystem(question.system);
  const progress = currentIndex / config.questions.length * 100;
  selectedScore = null;
  app.innerHTML = `
    <section class="screen quiz-screen">
      <header class="quiz-top">
        <div class="quiz-meta">
          <span>${escapeHtml(system.name || question.system)}</span>
          <span>${currentIndex + 1} / ${config.questions.length}</span>
        </div>
        <div class="progress-track"><div class="progress-bar" style="--progress:${progress}%"></div></div>
      </header>
      <div class="question-wrap">
        <article class="question-card">
          <div class="question-eyebrow">
            <span class="question-index">${currentIndex + 1}</span>
            <span class="question-system">${escapeHtml(system.name || question.system)}</span>
          </div>
          <h2 class="question-title">${escapeHtml(question.text)}</h2>
          <div class="options">
            ${(question.options || []).map((option) => `
              <button class="option-button" type="button" data-score="${Number(option.score)}">
                <span class="option-label">${escapeHtml(option.label)}</span>
                <span class="option-text">${escapeHtml(option.text)}</span>
              </button>
            `).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedScore = Number(button.dataset.score);
      document.querySelectorAll(".option-button").forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");
      setTimeout(() => {
        answers[currentIndex] = selectedScore;
        if (currentIndex < config.questions.length - 1) {
          currentIndex += 1;
          renderQuestion();
        } else {
          renderLoading();
        }
      }, 260);
    });
  });
}

function renderLoading() {
  const lines = config.loadingLines || ["正在生成你的诊断报告..."];
  app.innerHTML = `
    <section class="loading-screen">
      <div class="loading-inner">
        <div class="loading-orbit" aria-hidden="true">
          <svg class="loading-icon-mark" viewBox="0 0 32 32" focusable="false">
            <path d="M5 18h5l4-8 4 16 4-8h5" />
          </svg>
        </div>
        <div class="loading-list">
          ${lines.map((line, index) => `
            <div class="loading-row" data-loading-row="${index}">
              <span class="loading-dot"></span>
              <span class="loading-text">${escapeHtml(line)}</span>
            </div>
          `).join("")}
        </div>
        <p class="loading-note" data-loading-note>预计需要5秒...</p>
      </div>
    </section>
  `;
  lines.forEach((_, index) => {
    setTimeout(() => {
      const row = document.querySelector(`[data-loading-row="${index}"]`);
      if (row) row.classList.add("is-active");
    }, 260 + index * 900);
  });
  setTimeout(() => {
    const note = document.querySelector("[data-loading-note]");
    if (note) note.classList.add("is-visible");
  }, 3500);
  setTimeout(renderResult, 4940);
}

function renderResult() {
  const calculated = calculateResult(answers);
  const primary = config.results[calculated.primaryType];
  const secondary = config.results[calculated.secondaryType] || primary;
  const dimensions = buildDimensions(calculated.scores);
  const reportCopy = getReportCopy();
  app.innerHTML = `
    <article class="result-page">
      <div class="result-inner">
        ${renderReportSummaryCard(reportCopy.title, calculated, primary, secondary)}

        ${card(reportCopy.radarTitle, renderRadar(dimensions), "radar-card")}

        ${renderSourceCard(reportCopy.sourceTitle, reportCopy.sourceSubtitle, calculated)}

        ${renderPrimaryReportCard(primary, reportCopy)}

        ${renderRiskForecastCard(primary, reportCopy)}

        ${renderFutureProjectionCard(primary, reportCopy)}

        ${renderActionPlanCard(primary, reportCopy)}

        ${renderCompletionCard(reportCopy)}
      </div>
    </article>
  `;
  bind("[data-action='restart']", "click", renderCover);
}

function renderReportSummaryCard(title, calculated, primary, secondary) {
  const copy = getReportCopy();
  return `
    <section class="card report-summary-card">
      <div class="report-heading">
        <span class="report-icon" aria-hidden="true"></span>
        <h2>${escapeHtml(title)}</h2>
      </div>
      <div class="report-rows">
        ${reportRow(copy.stageLabel, calculated.currentStage)}
        ${reportRow(copy.riskLabel, calculated.riskLevel, "is-accent")}
        ${reportRow(copy.primaryLabel, primary.title)}
        ${reportRow(copy.secondaryLabel, secondary.title, "is-muted")}
      </div>
    </section>
  `;
}

function reportRow(label, value, className = "") {
  return `
    <div class="report-row">
      <span>${escapeHtml(label)}</span>
      <strong class="${className}">${escapeHtml(value)}</strong>
    </div>
  `;
}

function renderSourceCard(title, subtitle, calculated) {
  return card(title, `
    <p class="source-subtitle">${escapeHtml(subtitle)}</p>
    ${renderSystemShare(calculated.scores)}
  `, "source-card");
}

function renderPrimaryReportCard(primary, copy) {
  return `
    <section class="card primary-report-card">
      <h3>${escapeHtml(primary.title)}</h3>
      <p class="report-lead">${escapeHtml(primary.subtitle)}</p>
      <p class="report-hit">${escapeHtml(primary.hitStatement)}</p>
      <div class="report-highlight">
        <p>${escapeHtml(primary.coreConclusion)}</p>
      </div>
      <p>${escapeHtml(primary.summary)}</p>

      ${reportSection(copy.answerTraceTitle, renderTraceList(primary.answerTrace || []))}

      ${renderDiagnosisBox(copy.misreadTitle, primary.misread, "misread-box")}

      ${renderDiagnosisBox(copy.stuckActionTitle, primary.stuckAction, "stuck-action-box")}

      ${renderDiagnosisBox(copy.todayStepTitle, primary.todayStep, "today-step-box")}

      ${renderDeliveryBox(primary.delivery, copy)}

      ${reportSection("深度分析", (primary.deepAnalysis || []).map((item) => `<p>${escapeHtml(item)}</p>`).join(""))}

      ${reportSection(copy.consumptionTitle, renderSourceList(primary.consumptionSources || []))}

      ${reportSection(copy.advantagesTitle, renderAdvantageList(primary.advantages || []))}

      <div class="insight-box">
        <h4>${escapeHtml(copy.hiddenAdvantageTitle)}</h4>
        <p>${escapeHtml(primary.hiddenAdvantage || "你已经拥有一个可被重新使用的优势。")}</p>
      </div>

      <div class="danger-box">
        <h4>${escapeHtml(copy.shouldNotDoTitle)}</h4>
        <p>${escapeHtml(primary.shouldNotDo || "不要在没有验证前做不可逆决定。")}</p>
      </div>

      ${reportSection(copy.blindSpotTitle, renderBlindSpotList(primary.blindSpots || []))}
    </section>
  `;
}

function renderTraceList(items) {
  if (!items.length) return "";
  return `<div class="trace-list">${items.map((item, index) => `
    <div class="trace-item">
      <span>${index + 1}</span>
      <p>${escapeHtml(item)}</p>
    </div>
  `).join("")}</div>`;
}

function renderDiagnosisBox(title, body, className) {
  if (!body) return "";
  return `
    <div class="diagnosis-box ${escapeHtml(className)}">
      <h4>${escapeHtml(title)}</h4>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

function renderDeliveryBox(delivery, copy) {
  if (!delivery) return "";
  const items = Array.isArray(delivery.items) ? delivery.items : [];
  return `
    <div class="delivery-box">
      <h4>${escapeHtml(delivery.title || copy.deliveryTitle)}</h4>
      ${items.length ? `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
    </div>
  `;
}

function reportSection(title, body) {
  if (!body) return "";
  return `
    <h4 class="report-section-title">${escapeHtml(title)}</h4>
    ${body}
  `;
}

function renderSourceList(items) {
  if (!items.length) return "";
  return `<div class="report-source-list">${items.map((item) => `
    <div class="report-source-item">
      <h5>${escapeHtml(item.title || item.label || "")}</h5>
      <p>${escapeHtml(item.description || item.text || "")}</p>
    </div>
  `).join("")}</div>`;
}

function renderAdvantageList(items) {
  if (!items.length) return "";
  return `<div class="advantage-list">${items.map((item) => `
    <div class="advantage-item">
      <span class="advantage-bullet" aria-hidden="true"></span>
      <span>${escapeHtml(item)}</span>
    </div>
  `).join("")}</div>`;
}

function renderBlindSpotList(items) {
  if (!items.length) return "";
  return `<div class="blind-list">${items.map((item) => `
    <div class="blind-item">
      <h5>${escapeHtml(item.title || item.label || "")}</h5>
      <p>${escapeHtml(item.description || item.text || "")}</p>
    </div>
  `).join("")}</div>`;
}

function renderRiskForecastCard(primary, copy) {
  const items = primary.riskWarning || [];
  if (!items.length) return "";
  return card(copy.riskTitle, `
    <div class="risk-list">${items.map((item) => `
      <div class="risk-item">
        <strong>${escapeHtml(item.label || item.title || "")}</strong>
        <p>${escapeHtml(item.text || item.description || "")}</p>
      </div>
    `).join("")}</div>
  `, "risk-forecast-card card-with-icon");
}

function renderFutureProjectionCard(primary, copy) {
  const noChange = primary.futureNoChange || [];
  const withChange = primary.futureWithChange || [];
  if (!noChange.length && !withChange.length) return "";
  return card(copy.futureTitle, `
    <div class="future-block">
      <h4>${escapeHtml(copy.noChangeTitle)}</h4>
      ${list(noChange)}
    </div>
    <div class="future-block">
      <h4>${escapeHtml(copy.withChangeTitle)}</h4>
      ${list(withChange)}
    </div>
  `, "future-card");
}

function renderActionPlanCard(primary, copy) {
  return card(copy.actionTitle, renderTimeline(primary.actionPlan || []), "action-plan-card");
}

function renderCompletionCard(copy) {
  const lines = copy.completionLines || [];
  return `
    <section class="card completion-card">
      <h3>${escapeHtml(copy.completionTitle)}</h3>
      ${lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      <button class="primary-button" type="button" data-action="restart">${escapeHtml(copy.restartLabel)}</button>
    </section>
  `;
}

function calculateResult(values) {
  const slices = config.scoringLogic?.systemSlices || buildDefaultSystemSlices();
  const scores = {};
  for (const [system, [start, end]] of Object.entries(slices)) {
    scores[system] = values.slice(start, end).reduce((sum, item) => sum + Number(item || 0), 0);
  }
  const ranked = Object.entries(scores)
    .map(([system, score]) => ({ system, score }))
    .sort((a, b) => b.score - a.score);
  const typeMap = config.scoringLogic?.primaryTypeBySystem || buildDefaultTypeMap();
  const totalScore = Object.values(scores).reduce((sum, score) => sum + Number(score || 0), 0);
  const configuredResult = getScoreRuleResult(scores, totalScore) || getSpecialRuleResult(values, totalScore);
  const primaryType = configuredResult?.type || typeMap[ranked[0].system] || Object.keys(config.results)[0];
  const secondaryType = configuredResult?.secondaryType || typeMap[ranked[1]?.system] || primaryType;
  return {
    scores,
    ranked,
    primaryType,
    secondaryType,
    currentStage: getStage(primaryType, secondaryType),
    riskLevel: getRiskLevel(scores)
  };
}

function buildDefaultSystemSlices() {
  const systems = config.systems || [];
  const questionCount = (config.questions || []).length;
  const sliceSize = systems.length ? Math.floor(questionCount / systems.length) : questionCount;
  return Object.fromEntries(systems.map((system, index) => {
    const start = index * sliceSize;
    const end = index === systems.length - 1 ? questionCount : start + sliceSize;
    return [system.id, [start, end]];
  }));
}

function buildDefaultTypeMap() {
  const resultKeys = Object.keys(config.results || {});
  return Object.fromEntries((config.systems || []).map((system, index) => [
    system.id,
    resultKeys[index] || resultKeys[0]
  ]));
}

function getScoreRuleResult(scores, totalScore) {
  const logic = config.scoringLogic || {};
  const scoreValues = Object.values(scores).map((score) => Number(score || 0));
  const spread = Math.max(...scoreValues) - Math.min(...scoreValues);
  const maxSystemScore = Math.max(...scoreValues);
  const low = logic.lowScoreResult;
  if (low && totalScore <= Number(low.max) && maxSystemScore <= Number(low.maxSystemScore ?? Infinity)) {
    return low;
  }
  const high = logic.highScoreResult;
  if (high && totalScore >= Number(high.min) && spread <= Number(high.maxSpread ?? Infinity)) {
    return high;
  }
  return null;
}

function getSpecialRuleResult(values, totalScore) {
  const rules = config.scoringLogic?.specialResultRules || [];
  for (const rule of rules) {
    const indices = (rule.questionIds || [])
      .map((id) => (config.questions || []).findIndex((question) => Number(question.id) === Number(id)))
      .filter((index) => index >= 0);
    if (!indices.length) continue;
    const average = indices.reduce((sum, index) => sum + Number(values[index] || 0), 0) / indices.length;
    const enoughAverage = average >= Number(rule.minAverage ?? 0);
    const enoughTotal = rule.minTotal === undefined || totalScore >= Number(rule.minTotal);
    const belowTotal = rule.maxTotal === undefined || totalScore <= Number(rule.maxTotal);
    if (enoughAverage && enoughTotal && belowTotal) {
      return rule;
    }
  }
  return null;
}

function getRiskLevel(scores) {
  const total = Object.values(scores).reduce((sum, score) => sum + Number(score || 0), 0);
  const levels = config.scoringLogic?.riskLevel || [
    { max: 40, label: "状态较轻" },
    { max: 64, label: "需要留意" },
    { max: 96, label: "阻力较高" },
    { max: 128, label: "优先处理" }
  ];
  const matched = levels.find((level) => total <= Number(level.max));
  return matched?.label || levels.at(-1)?.label || "待观察";
}

function getStage(primaryType, secondaryType) {
  const stageMap = config.scoringLogic?.stageMap || {};
  return stageMap[`${primaryType}+${secondaryType}`] ||
    stageMap[`${secondaryType}+${primaryType}`] ||
    config.scoringLogic?.fallbackStage ||
    "状态调整期";
}

function buildDimensions(scores) {
  const clamp = (value) => Math.max(0, Math.min(100, Math.round(value)));
  const base = {};
  Object.entries(scores).forEach(([key, value]) => {
    base[key] = clamp(100 - (Number(value || 8) - 8) * (100 / 24));
  });
  const average = (...keys) => clamp(keys.reduce((sum, key) => sum + Number(base[key] || 0), 0) / Math.max(keys.length, 1));
  const configured = config.report?.radarDimensions;
  if (Array.isArray(configured) && configured.length) {
    return configured.slice(0, 6).map((item) => ({
      label: item.label,
      value: clamp(item.systems?.length ? average(...item.systems) : base[item.system] ?? item.value ?? 50)
    }));
  }
  const systems = config.systems || [];
  const systemItems = systems.slice(0, 4).map((system) => ({
    label: system.radarLabel || system.name || system.id,
    value: base[system.id] ?? 50
  }));
  return [
    ...systemItems,
    { label: config.report?.compositeRadarLabels?.[0] || "综合准备", value: average(...systems.slice(0, 2).map((system) => system.id)) },
    { label: config.report?.compositeRadarLabels?.[1] || "行动闭环", value: average(...systems.slice(2, 4).map((system) => system.id)) }
  ].slice(0, 6);
}

function renderRadar(items) {
  const center = 140;
  const maxRadius = 96;
  const points = items.map((item, index) => {
    const angle = -Math.PI / 2 + (index / items.length) * Math.PI * 2;
    const radius = (item.value / 100) * maxRadius;
    return {
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius,
      labelX: center + Math.cos(angle) * 118,
      labelY: center + Math.sin(angle) * 118,
      ...item
    };
  });
  const polygon = points.map((point) => `${point.x},${point.y}`).join(" ");
  const rings = [0.25, 0.5, 0.75, 1].map((ratio) => {
    const ring = items.map((_, index) => {
      const angle = -Math.PI / 2 + (index / items.length) * Math.PI * 2;
      return `${center + Math.cos(angle) * maxRadius * ratio},${center + Math.sin(angle) * maxRadius * ratio}`;
    }).join(" ");
    return `<polygon points="${ring}" fill="none" stroke="rgba(47,65,86,0.12)" stroke-width="1"></polygon>`;
  }).join("");
  return `
    <svg class="radar" viewBox="0 0 280 280" role="img" aria-label="六维状态图">
      ${rings}
      ${points.map((point) => `<line x1="${center}" y1="${center}" x2="${point.labelX}" y2="${point.labelY}" stroke="rgba(47,65,86,0.08)"></line>`).join("")}
      <polygon points="${polygon}" fill="rgba(47,65,86,0.18)" stroke="#2f4156" stroke-width="2"></polygon>
      ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="3" fill="#2f4156"></circle>`).join("")}
      ${points.map((point) => `<text x="${point.labelX}" y="${point.labelY}" text-anchor="middle" dominant-baseline="middle">${escapeHtml(point.label)}</text>`).join("")}
    </svg>
  `;
}

function renderSystemShare(scores) {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0) || 1;
  const ranked = Object.entries(scores)
    .map(([system, score]) => ({ system, score: Number(score || 0) }))
    .sort((a, b) => b.score - a.score);
  const top = ranked[0] || { system: "", score: 0 };
  const topSystem = getSystem(top.system);
  const topPercent = Math.round(top.score / total * 100);
  const spread = (ranked[0]?.score || 0) - (ranked.at(-1)?.score || 0);
  const summary = getSourceSummary(top.system, topPercent, total, spread);
  const rows = Object.entries(scores).map(([system, score]) => {
    const percent = Math.round(score / total * 100);
    return `
      <div class="share-row">
        <div class="share-row-top">
          <span>${escapeHtml(getSystem(system).name || system)}</span>
          <strong>${percent}%</strong>
        </div>
        <div class="share-track">
          <span style="width:${percent}%"></span>
        </div>
      </div>
    `;
  }).join("");
  return `
    <div class="share-summary">
      <strong>${escapeHtml(summary.title || `${topSystem.name || "主要来源"} ${topPercent}%`)}</strong>
      <p>${escapeHtml(summary.text)}</p>
    </div>
    <div class="share-list">${rows}</div>
  `;
}

function getSourceSummary(system, percent, total, spread) {
  if (spread <= 2) {
    if (total <= 40) {
      return {
        title: "暂无明显单一阻力",
        text: "四个环节的阻力都比较低，重点不是继续分析来源，而是直接完成一个今天能交付的小任务。"
      };
    }
    if (total >= 112) {
      return {
        title: "多系统同时高阻力",
        text: "工具、场景、学习和反馈都在同时拖住起步，先把任务降到一个最小动作，比继续全面补课更有效。"
      };
    }
    return {
      title: "阻力来源比较分散",
      text: "没有单一系统明显高出，说明问题更像链路不顺，需要从最小闭环开始重新建立节奏。"
    };
  }
  return {
    title: `${getSystem(system).name || "主要来源"} ${percent}%`,
    text: getSourceInsight(system, percent)
  };
}

function getSourceInsight(system, percent) {
  const systemName = getSystem(system).name || "这个系统";
  const configured = config.report?.sourceInsights || {};
  if (configured[system]) return configured[system];
  if (percent <= 28) return `你的阻力来源比较分散，${systemName}只是当前最需要先看的一块。`;
  return `${systemName}是当前占比最高的阻力来源，优先处理它，比同时解决所有问题更容易启动。`;
}

function renderMiniCards(items, bodyKey, titleKey = "title") {
  return `<div class="two-column">${items.map((item) => `
    <div class="mini-card">
      <strong>${escapeHtml(item[titleKey] || item.title || item.label || "")}</strong>
      <p>${escapeHtml(item[bodyKey] || "")}</p>
    </div>
  `).join("")}</div>`;
}

function renderTimeline(items) {
  return `<div class="timeline">${items.map((item, index) => `
    <div class="timeline-item">
      <span class="timeline-number">${index + 1}</span>
      <div>
        <span class="timeline-week">${escapeHtml(item.week || "")}</span>
        <strong class="timeline-title">${escapeHtml(item.title || "")}</strong>
        <p>${escapeHtml(item.description || "")}</p>
      </div>
    </div>
  `).join("")}</div>`;
}

function card(title, body, className = "") {
  if (!body) return "";
  return `<section class="card ${escapeHtml(className)}"><h3>${escapeHtml(title)}</h3>${body}</section>`;
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function getSystem(id) {
  return (config.systems || []).find((system) => system.id === id) || { id, name: id };
}

function getReportCopy() {
  const promise = config.cover?.promise || "";
  const promiseMatch = promise.match(/生成专属(.+)$/);
  const fallbackTitle = promiseMatch?.[1] || "诊断报告";
  return {
    title: config.report?.title || fallbackTitle,
    radarTitle: config.report?.radarTitle || "状态总览",
    sourceTitle: config.report?.sourceTitle || "你的关键阻力来自哪里？",
    sourceSubtitle: config.report?.sourceSubtitle || "问题来源分析",
    stageLabel: config.report?.stageLabel || "当前状态",
    riskLabel: config.report?.riskLabel || "阻力等级",
    primaryLabel: config.report?.primaryLabel || "主要类型",
    secondaryLabel: config.report?.secondaryLabel || "次级类型",
    answerTraceTitle: config.report?.answerTraceTitle || "为什么你会得到这个结果",
    misreadTitle: config.report?.misreadTitle || "你容易误判的地方",
    stuckActionTitle: config.report?.stuckActionTitle || "真正卡住的动作",
    todayStepTitle: config.report?.todayStepTitle || "今天最小一步",
    deliveryTitle: config.report?.deliveryTitle || "配套交付物",
    consumptionTitle: config.report?.consumptionTitle || "你的主要阻力来源",
    advantagesTitle: config.report?.advantagesTitle || "你的可用优势",
    hiddenAdvantageTitle: config.report?.hiddenAdvantageTitle || "你的隐藏优势",
    shouldNotDoTitle: config.report?.shouldNotDoTitle || "你现在最不该做什么",
    blindSpotTitle: config.report?.blindSpotTitle || "你容易忽略的盲区",
    riskTitle: config.report?.riskTitle || "如果继续这样，接下来会怎样？",
    futureTitle: config.report?.futureTitle || "未来推演",
    noChangeTitle: config.report?.noChangeTitle || "维持当前方式",
    withChangeTitle: config.report?.withChangeTitle || "开始做小调整",
    actionTitle: config.report?.actionTitle || "下一阶段行动路线图",
    completionTitle: config.report?.completionTitle || `${fallbackTitle}已完成`,
    completionLines: config.report?.completionLines || [
      "这份报告不是终点。",
      "它的作用，是帮你把下一步缩小到一个可以开始的动作。"
    ],
    restartLabel: config.report?.restartLabel || "重新诊断"
  };
}

function splitTitle(title) {
  if (title.includes("，")) {
    const [first, ...rest] = title.split("，");
    return [`${first}，`, rest.join("，")];
  }
  if (title.includes("还是")) {
    const index = title.indexOf("还是");
    return [title.slice(0, index), title.slice(index)];
  }
  return [title, ""];
}

function bind(selector, event, handler) {
  const element = document.querySelector(selector);
  if (element) element.addEventListener(event, handler);
}

function setMetaValue(name, value) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) element.setAttribute("content", value);
}

function setMetaProperty(property, value) {
  const element = document.querySelector(`meta[property="${property}"]`);
  if (element) element.setAttribute("content", value);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
