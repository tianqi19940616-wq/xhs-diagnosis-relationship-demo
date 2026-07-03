window.DIAG_CONTENT = {
  "slug": "relationship-communication",
  "schemaVersion": 1,
  "templateMode": "constructed",
  "source": "brief-generated-v1-third-theme-validation",
  "diagnosisDesign": {
    "theme": "亲密关系沟通卡点诊断",
    "targetUser": "已经在亲密关系中反复沟通失败、冷战、误解或争吵，但还想弄清自己卡在哪里的人",
    "coreScene": "想好好说一件事，却在开口、表达、回应或收尾时反复走向误解、争吵、沉默或委屈",
    "corePain": "分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环",
    "coreQuestion": "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
    "whyTest": "用户知道关系里有问题，但每次沟通都像踩雷，不知道该先练表达、先稳情绪、先听对方，还是先谈边界。",
    "afterTest": "测完后，用户要认出自己的主要沟通卡点，并拿到一个当天可以尝试的低风险沟通动作。",
    "ifNoChange": "继续把每次沟通失败归因成对方不懂我或自己不适合亲密关系，冷战、误解和防御会越来越自动化。",
    "firstStep": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
  },
  "cover": {
    "title": "你们为什么总是说着说着就变了？",
    "introLines": [
      "有些关系不是没感情，",
      "是每次沟通都走错路。",
      "先别急着判断谁对谁错，",
      "先看你真正卡在哪一步。"
    ],
    "startLabel": "开始诊断",
    "promise": "40道题目 · 约4分钟 · 生成专属沟通卡点报告"
  },
  "loadingLines": [
    "正在识别你的亲密关系沟通卡点信号...",
    "正在比对关键维度与答案轨迹...",
    "正在生成你的专属行动建议...",
    "正在完成诊断报告..."
  ],
  "report": {
    "title": "亲密关系沟通报告",
    "radarTitle": "沟通状态总览",
    "sourceTitle": "你的沟通卡点来自哪里？",
    "sourceSubtitle": "问题来源分析",
    "stageLabel": "当前阶段",
    "riskLabel": "卡点等级",
    "primaryLabel": "主要卡点",
    "secondaryLabel": "次级卡点",
    "answerTraceTitle": "为什么你会得到这个结果",
    "misreadTitle": "你容易误判的地方",
    "stuckActionTitle": "真正卡住的动作",
    "todayStepTitle": "今天最小一步",
    "deliveryTitle": "配套交付物",
    "consumptionTitle": "你的真实沟通消耗",
    "advantagesTitle": "你的关系修复优势",
    "hiddenAdvantageTitle": "你的隐藏优势",
    "shouldNotDoTitle": "你现在最不该做什么",
    "blindSpotTitle": "你的沟通盲区",
    "riskTitle": "如果继续这样沟通，未来30天会怎样？",
    "futureTitle": "未来推演",
    "noChangeTitle": "继续原样沟通",
    "withChangeTitle": "开始低风险修复",
    "actionTitle": "未来30天沟通修复路线图",
    "completionTitle": "沟通卡点报告已完成",
    "completionLines": [
      "这份报告不是判断谁对谁错。",
      "它的作用，是帮你找到下一次沟通最先要修的一步。"
    ],
    "restartLabel": "重新诊断",
    "radarDimensions": [
      {
        "label": "表达清晰",
        "system": "expression_clarity"
      },
      {
        "label": "情绪调节",
        "system": "emotion_regulation"
      },
      {
        "label": "倾听回应",
        "system": "listening_response"
      },
      {
        "label": "边界协商",
        "system": "boundary_negotiation"
      },
      {
        "label": "修复复盘",
        "system": "repair_loop"
      },
      {
        "label": "修复余量",
        "systems": [
          "expression_clarity",
          "emotion_regulation",
          "listening_response",
          "boundary_negotiation",
          "repair_loop"
        ]
      }
    ]
  },
  "systems": [
    {
      "id": "expression_clarity",
      "name": "表达系统"
    },
    {
      "id": "emotion_regulation",
      "name": "情绪系统"
    },
    {
      "id": "listening_response",
      "name": "倾听系统"
    },
    {
      "id": "boundary_negotiation",
      "name": "边界系统"
    },
    {
      "id": "repair_loop",
      "name": "修复系统"
    }
  ],
  "dimensionCards": [
    {
      "id": "expression_clarity",
      "name": "表达清晰",
      "result": "blurred_expression",
      "measures": "用户能否把感受、事实和请求分开说清楚，而不是让对方猜。",
      "highMeans": "开口时容易绕、憋、暗示或一次倒出很多旧账。",
      "lowMeans": "能比较清楚地说出发生了什么、自己感受如何、希望对方做什么。",
      "highQuotes": [
        "我明明很委屈，但一开口就变成指责或翻旧账。",
        "我总希望对方自己懂，可对方真的不懂。"
      ],
      "lowQuotes": [
        "我能说清楚具体发生了什么，也能表达自己的需求。",
        "我不指望对方猜，会尽量把请求说出来。"
      ]
    },
    {
      "id": "emotion_regulation",
      "name": "情绪调节",
      "result": "emotion_surge",
      "measures": "用户能否在沟通时承受情绪上升，而不被情绪接管。",
      "highMeans": "一被触发就急、炸、哭、逃或关闭，话题很快偏离原问题。",
      "lowMeans": "能觉察情绪上升，并先暂停或降速。",
      "highQuotes": [
        "我本来只想好好说，结果几句话后就控制不住。",
        "对方一句话就能把我点燃，然后什么都谈不了。"
      ],
      "lowQuotes": [
        "我会先停一下，不急着把最刺的话说出口。",
        "我能意识到自己被触发了，先让沟通慢下来。"
      ]
    },
    {
      "id": "listening_response",
      "name": "倾听回应",
      "result": "missed_listening",
      "measures": "用户能否听见对方真正想表达的内容，而不是只准备反驳或自我保护。",
      "highMeans": "沟通时容易抓漏洞、急着解释、防御或只听到攻击。",
      "lowMeans": "能复述对方意思，并区分对方表达和自己的触发。",
      "highQuotes": [
        "对方一说我有问题，我脑子里马上开始辩解。",
        "我不是不想听，但我总觉得对方在否定我。"
      ],
      "lowQuotes": [
        "我会先确认我有没有听懂对方的意思。",
        "我能分清对方在说感受，还是在攻击我。"
      ]
    },
    {
      "id": "boundary_negotiation",
      "name": "边界协商",
      "result": "boundary_blur",
      "measures": "用户能否说清自己的边界、需求和可协商空间，而不是靠忍让或控制维持关系。",
      "highMeans": "不是压住自己，就是要求对方立刻按自己的方式来。",
      "lowMeans": "能表达边界，也能给出可讨论的空间。",
      "highQuotes": [
        "我总是忍到受不了才说，结果一说就很重。",
        "我不知道怎么谈边界，只会让步或爆发。"
      ],
      "lowQuotes": [
        "我能说清自己不能接受什么，也能听对方怎么想。",
        "边界不是威胁，是我们一起找可行方式。"
      ]
    },
    {
      "id": "repair_loop",
      "name": "修复复盘",
      "result": "repair_gap",
      "measures": "用户是否能在争执后完成修复，而不是让问题沉入旧账。",
      "highMeans": "争执后缺少复盘和修复，关系靠遗忘、冷却或下一次爆发维持。",
      "lowMeans": "能在事后回看触发点、表达歉意或约定下次怎么做。",
      "highQuotes": [
        "我们每次吵完都过去了，但其实没有真的解决。",
        "旧问题一直在，下一次又会被翻出来。"
      ],
      "lowQuotes": [
        "吵完后我们至少会说清下次怎么避免。",
        "我愿意先修复关系，再讨论谁对谁错。"
      ]
    }
  ],
  "questions": [
    {
      "id": 1,
      "system": "expression_clarity",
      "text": "当你想说一件让你不舒服的事时，通常会怎么开口？",
      "options": [
        {
          "label": "A",
          "text": "直接说具体发生了什么",
          "score": 1
        },
        {
          "label": "B",
          "text": "先铺垫一下，再慢慢说",
          "score": 2
        },
        {
          "label": "C",
          "text": "绕很久，对方常常抓不到重点",
          "score": 3
        },
        {
          "label": "D",
          "text": "忍很久，最后一次爆出来",
          "score": 4
        }
      ]
    },
    {
      "id": 2,
      "system": "expression_clarity",
      "text": "你能否把“事实、感受、请求”分开表达？",
      "options": [
        {
          "label": "A",
          "text": "大多数时候可以",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时可以，但不稳定",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常混在一起说",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎说不清，只剩情绪",
          "score": 4
        }
      ]
    },
    {
      "id": 3,
      "system": "expression_clarity",
      "text": "对方听完你的表达，通常是否知道你想要什么？",
      "options": [
        {
          "label": "A",
          "text": "通常知道",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时知道",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常需要反复猜",
          "score": 3
        },
        {
          "label": "D",
          "text": "常常完全误解",
          "score": 4
        }
      ]
    },
    {
      "id": 4,
      "system": "expression_clarity",
      "text": "你是否经常希望对方“应该自己懂”？",
      "options": [
        {
          "label": "A",
          "text": "很少，我会说清楚",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔会",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常会，因此更失望",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎一直如此，说出来反而觉得没意义",
          "score": 4
        }
      ]
    },
    {
      "id": 5,
      "system": "expression_clarity",
      "text": "你表达需求时，最容易变成什么？",
      "options": [
        {
          "label": "A",
          "text": "具体请求",
          "score": 1
        },
        {
          "label": "B",
          "text": "带一点情绪的说明",
          "score": 2
        },
        {
          "label": "C",
          "text": "委屈或抱怨",
          "score": 3
        },
        {
          "label": "D",
          "text": "指责、翻旧账或沉默",
          "score": 4
        }
      ]
    },
    {
      "id": 6,
      "system": "expression_clarity",
      "text": "当对方说“你到底想怎样”时，你通常能回答吗？",
      "options": [
        {
          "label": "A",
          "text": "能说出一个具体请求",
          "score": 1
        },
        {
          "label": "B",
          "text": "能说个大概",
          "score": 2
        },
        {
          "label": "C",
          "text": "不太能，只知道自己难受",
          "score": 3
        },
        {
          "label": "D",
          "text": "答不上来，然后更生气或更委屈",
          "score": 4
        }
      ]
    },
    {
      "id": 7,
      "system": "expression_clarity",
      "text": "你是否会用暗示、试探或反话表达真实需求？",
      "options": [
        {
          "label": "A",
          "text": "很少",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎默认这样，因为直接说太难",
          "score": 4
        }
      ]
    },
    {
      "id": 8,
      "system": "expression_clarity",
      "text": "一次沟通结束后，你常觉得自己真正想说的话说出来了吗？",
      "options": [
        {
          "label": "A",
          "text": "大多说出来了",
          "score": 1
        },
        {
          "label": "B",
          "text": "说出了一部分",
          "score": 2
        },
        {
          "label": "C",
          "text": "很多没说清",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎没说出来，反而更堵",
          "score": 4
        }
      ]
    },
    {
      "id": 9,
      "system": "emotion_regulation",
      "text": "沟通中对方一句话刺到你时，你通常会？",
      "options": [
        {
          "label": "A",
          "text": "先停一下再回应",
          "score": 1
        },
        {
          "label": "B",
          "text": "语气变硬，但还能谈",
          "score": 2
        },
        {
          "label": "C",
          "text": "立刻反击或哭出来",
          "score": 3
        },
        {
          "label": "D",
          "text": "整个人被点燃，后面只剩情绪",
          "score": 4
        }
      ]
    },
    {
      "id": 10,
      "system": "emotion_regulation",
      "text": "你能否觉察自己什么时候已经不适合继续谈？",
      "options": [
        {
          "label": "A",
          "text": "能，并会暂停",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时能",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常事后才发现",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎发现不了，直到吵崩",
          "score": 4
        }
      ]
    },
    {
      "id": 11,
      "system": "emotion_regulation",
      "text": "争执时，你最常出现的反应是？",
      "options": [
        {
          "label": "A",
          "text": "尽量回到问题本身",
          "score": 1
        },
        {
          "label": "B",
          "text": "语气上来，但还能听",
          "score": 2
        },
        {
          "label": "C",
          "text": "开始反击、冷笑或委屈",
          "score": 3
        },
        {
          "label": "D",
          "text": "爆发、逃开或完全关机",
          "score": 4
        }
      ]
    },
    {
      "id": 12,
      "system": "emotion_regulation",
      "text": "你是否会在情绪很高时说出伤人的话？",
      "options": [
        {
          "label": "A",
          "text": "很少",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎每次严重争执都会",
          "score": 4
        }
      ]
    },
    {
      "id": 13,
      "system": "emotion_regulation",
      "text": "对方沉默或冷淡时，你的内在反应更接近？",
      "options": [
        {
          "label": "A",
          "text": "先确认对方状态",
          "score": 1
        },
        {
          "label": "B",
          "text": "有点不安",
          "score": 2
        },
        {
          "label": "C",
          "text": "明显焦虑，想追问",
          "score": 3
        },
        {
          "label": "D",
          "text": "立刻觉得被抛下或被否定",
          "score": 4
        }
      ]
    },
    {
      "id": 14,
      "system": "emotion_regulation",
      "text": "你能否在沟通中提出“我们先暂停十分钟”？",
      "options": [
        {
          "label": "A",
          "text": "可以",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔可以",
          "score": 2
        },
        {
          "label": "C",
          "text": "很难，怕一停就没结果",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎不行，我会一直追到有答案",
          "score": 4
        }
      ]
    },
    {
      "id": 15,
      "system": "emotion_regulation",
      "text": "争执后，你恢复平静通常需要多久？",
      "options": [
        {
          "label": "A",
          "text": "较快能回来",
          "score": 1
        },
        {
          "label": "B",
          "text": "需要一会儿",
          "score": 2
        },
        {
          "label": "C",
          "text": "会影响一整天",
          "score": 3
        },
        {
          "label": "D",
          "text": "会影响几天甚至更久",
          "score": 4
        }
      ]
    },
    {
      "id": 16,
      "system": "emotion_regulation",
      "text": "当你情绪上来时，还能记得这次原本要谈什么吗？",
      "options": [
        {
          "label": "A",
          "text": "通常能",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时会忘",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常忘，变成别的问题",
          "score": 3
        },
        {
          "label": "D",
          "text": "完全被情绪带走",
          "score": 4
        }
      ]
    },
    {
      "id": 17,
      "system": "listening_response",
      "text": "对方表达不满时，你第一反应通常是？",
      "options": [
        {
          "label": "A",
          "text": "先听他说完",
          "score": 1
        },
        {
          "label": "B",
          "text": "一边听一边有点防御",
          "score": 2
        },
        {
          "label": "C",
          "text": "马上想解释自己不是那样",
          "score": 3
        },
        {
          "label": "D",
          "text": "立刻觉得被攻击",
          "score": 4
        }
      ]
    },
    {
      "id": 18,
      "system": "listening_response",
      "text": "你会复述对方的意思来确认吗？",
      "options": [
        {
          "label": "A",
          "text": "经常会",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔会",
          "score": 2
        },
        {
          "label": "C",
          "text": "很少会",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎不会，我更想赶紧解释",
          "score": 4
        }
      ]
    },
    {
      "id": 19,
      "system": "listening_response",
      "text": "沟通中你更常在听什么？",
      "options": [
        {
          "label": "A",
          "text": "对方真正想表达什么",
          "score": 1
        },
        {
          "label": "B",
          "text": "对方哪里让我不舒服",
          "score": 2
        },
        {
          "label": "C",
          "text": "对方哪里说得不对",
          "score": 3
        },
        {
          "label": "D",
          "text": "对方是不是在否定我",
          "score": 4
        }
      ]
    },
    {
      "id": 20,
      "system": "listening_response",
      "text": "当对方说“你没有听我说”时，你通常觉得？",
      "options": [
        {
          "label": "A",
          "text": "可能是真的，我会确认",
          "score": 1
        },
        {
          "label": "B",
          "text": "有点委屈，但愿意听",
          "score": 2
        },
        {
          "label": "C",
          "text": "我明明听了，只是不认同",
          "score": 3
        },
        {
          "label": "D",
          "text": "对方就是在挑我的错",
          "score": 4
        }
      ]
    },
    {
      "id": 21,
      "system": "listening_response",
      "text": "你能否允许对方先表达完，不马上给结论？",
      "options": [
        {
          "label": "A",
          "text": "大多可以",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时可以",
          "score": 2
        },
        {
          "label": "C",
          "text": "很难，我会忍不住插话",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎不行，我必须马上回应",
          "score": 4
        }
      ]
    },
    {
      "id": 22,
      "system": "listening_response",
      "text": "你是否经常把对方的感受听成对你的控诉？",
      "options": [
        {
          "label": "A",
          "text": "很少",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎默认会这样听",
          "score": 4
        }
      ]
    },
    {
      "id": 23,
      "system": "listening_response",
      "text": "沟通结束后，你能说清对方最在意什么吗？",
      "options": [
        {
          "label": "A",
          "text": "通常能",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时能",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常说不清",
          "score": 3
        },
        {
          "label": "D",
          "text": "只记得自己被伤到了",
          "score": 4
        }
      ]
    },
    {
      "id": 24,
      "system": "listening_response",
      "text": "你是否会为了证明自己没错，而忽略对方真正要的回应？",
      "options": [
        {
          "label": "A",
          "text": "很少",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎每次争执都会",
          "score": 4
        }
      ]
    },
    {
      "id": 25,
      "system": "boundary_negotiation",
      "text": "当你不想答应对方某个要求时，你通常会？",
      "options": [
        {
          "label": "A",
          "text": "直接说明原因和可替代方案",
          "score": 1
        },
        {
          "label": "B",
          "text": "有点为难，但会表达",
          "score": 2
        },
        {
          "label": "C",
          "text": "先答应，之后心里不舒服",
          "score": 3
        },
        {
          "label": "D",
          "text": "忍到爆发或直接拒绝得很重",
          "score": 4
        }
      ]
    },
    {
      "id": 26,
      "system": "boundary_negotiation",
      "text": "你能否说清自己在关系里的底线？",
      "options": [
        {
          "label": "A",
          "text": "比较清楚",
          "score": 1
        },
        {
          "label": "B",
          "text": "有大概感觉",
          "score": 2
        },
        {
          "label": "C",
          "text": "不太清楚，只知道不舒服",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎说不清，常常靠情绪判断",
          "score": 4
        }
      ]
    },
    {
      "id": 27,
      "system": "boundary_negotiation",
      "text": "你谈边界时，最容易变成什么？",
      "options": [
        {
          "label": "A",
          "text": "具体协商",
          "score": 1
        },
        {
          "label": "B",
          "text": "有点紧张的说明",
          "score": 2
        },
        {
          "label": "C",
          "text": "委屈地让对方猜",
          "score": 3
        },
        {
          "label": "D",
          "text": "指责、威胁或冷处理",
          "score": 4
        }
      ]
    },
    {
      "id": 28,
      "system": "boundary_negotiation",
      "text": "当对方不接受你的边界时，你会？",
      "options": [
        {
          "label": "A",
          "text": "继续说明并寻找可行方案",
          "score": 1
        },
        {
          "label": "B",
          "text": "会动摇一点",
          "score": 2
        },
        {
          "label": "C",
          "text": "容易让步或赌气",
          "score": 3
        },
        {
          "label": "D",
          "text": "觉得对方不爱我或不尊重我",
          "score": 4
        }
      ]
    },
    {
      "id": 29,
      "system": "boundary_negotiation",
      "text": "你是否经常为了关系稳定而牺牲自己的真实感受？",
      "options": [
        {
          "label": "A",
          "text": "很少",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎默认先忍",
          "score": 4
        }
      ]
    },
    {
      "id": 30,
      "system": "boundary_negotiation",
      "text": "你是否会把“对方不同意”理解成“对方不在乎我”？",
      "options": [
        {
          "label": "A",
          "text": "很少",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎会立刻这样理解",
          "score": 4
        }
      ]
    },
    {
      "id": 31,
      "system": "boundary_negotiation",
      "text": "你们遇到分歧时，是否能讨论第三种方案？",
      "options": [
        {
          "label": "A",
          "text": "经常能",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔能",
          "score": 2
        },
        {
          "label": "C",
          "text": "很少能",
          "score": 3
        },
        {
          "label": "D",
          "text": "通常只剩谁听谁的",
          "score": 4
        }
      ]
    },
    {
      "id": 32,
      "system": "boundary_negotiation",
      "text": "你表达边界后，是否会强烈内疚？",
      "options": [
        {
          "label": "A",
          "text": "很少",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎每次都会",
          "score": 4
        }
      ]
    },
    {
      "id": 33,
      "system": "repair_loop",
      "text": "争执结束后，你们通常会怎么处理？",
      "options": [
        {
          "label": "A",
          "text": "会复盘并修复",
          "score": 1
        },
        {
          "label": "B",
          "text": "会简单和好",
          "score": 2
        },
        {
          "label": "C",
          "text": "冷一阵就过去",
          "score": 3
        },
        {
          "label": "D",
          "text": "没有处理，只是压下去",
          "score": 4
        }
      ]
    },
    {
      "id": 34,
      "system": "repair_loop",
      "text": "你能否在事后说出自己哪里被触发了？",
      "options": [
        {
          "label": "A",
          "text": "通常能",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时能",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常说不清",
          "score": 3
        },
        {
          "label": "D",
          "text": "只记得对方哪里伤了我",
          "score": 4
        }
      ]
    },
    {
      "id": 35,
      "system": "repair_loop",
      "text": "你是否能为自己沟通中的伤人部分道歉？",
      "options": [
        {
          "label": "A",
          "text": "可以，而且不等于全盘认错",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时可以",
          "score": 2
        },
        {
          "label": "C",
          "text": "很难，怕对方得寸进尺",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎不行，我会觉得自己输了",
          "score": 4
        }
      ]
    },
    {
      "id": 36,
      "system": "repair_loop",
      "text": "同一个问题是否会反复出现？",
      "options": [
        {
          "label": "A",
          "text": "很少重复",
          "score": 1
        },
        {
          "label": "B",
          "text": "偶尔重复",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常重复",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎每次都绕回旧问题",
          "score": 4
        }
      ]
    },
    {
      "id": 37,
      "system": "repair_loop",
      "text": "你们是否有“下次遇到这种情况怎么办”的约定？",
      "options": [
        {
          "label": "A",
          "text": "有，而且会执行",
          "score": 1
        },
        {
          "label": "B",
          "text": "有一点",
          "score": 2
        },
        {
          "label": "C",
          "text": "很少有",
          "score": 3
        },
        {
          "label": "D",
          "text": "没有，每次都重新吵",
          "score": 4
        }
      ]
    },
    {
      "id": 38,
      "system": "repair_loop",
      "text": "沟通失败后，你更容易？",
      "options": [
        {
          "label": "A",
          "text": "找触发点和改法",
          "score": 1
        },
        {
          "label": "B",
          "text": "难过一阵后再说",
          "score": 2
        },
        {
          "label": "C",
          "text": "等对方先来缓和",
          "score": 3
        },
        {
          "label": "D",
          "text": "把它记进旧账",
          "score": 4
        }
      ]
    },
    {
      "id": 39,
      "system": "repair_loop",
      "text": "你是否能区分“修复关系”和“证明谁对”？",
      "options": [
        {
          "label": "A",
          "text": "能区分",
          "score": 1
        },
        {
          "label": "B",
          "text": "有时能",
          "score": 2
        },
        {
          "label": "C",
          "text": "经常混在一起",
          "score": 3
        },
        {
          "label": "D",
          "text": "几乎分不开，必须先分输赢",
          "score": 4
        }
      ]
    },
    {
      "id": 40,
      "system": "repair_loop",
      "text": "如果未来三个月都按现在方式沟通，你觉得关系会？",
      "options": [
        {
          "label": "A",
          "text": "有机会变好",
          "score": 1
        },
        {
          "label": "B",
          "text": "大概维持",
          "score": 2
        },
        {
          "label": "C",
          "text": "问题会继续累积",
          "score": 3
        },
        {
          "label": "D",
          "text": "可能越来越冷或越来越炸",
          "score": 4
        }
      ]
    }
  ],
  "results": {
    "stable_dialogue": {
      "type": "stable_dialogue",
      "title": "可修复沟通型",
      "subtitle": "你们的问题还没有固化，适合先做一次小修复。",
      "coreConclusion": "你的答案显示，表达、情绪、倾听、边界和修复都没有明显高阻力。现在最重要的是把一次小沟通做完整，而不是等问题变大。",
      "summary": "你们还有沟通余量，适合先建立一个低风险修复动作。",
      "hitStatement": "你不是没有问题，只是沟通里还保留着可以修的余地。",
      "answerTrace": [
        "第 1 题和第 9 题如果你还能说清事实和控制情绪，说明沟通入口没有完全堵住。",
        "第 17 题到第 24 题如果你还能听见对方一部分意思，说明关系里仍有回应空间。",
        "第 33 题到第 40 题如果争执后还能简单修复，说明问题还没有完全沉成旧账。"
      ],
      "misread": "你可能以为只有等关系变得更好才能沟通，实际是一次小修复本身就会让关系变好一点。",
      "stuckAction": "把一次小问题从开口到收尾完整说完。",
      "todayStep": "今天只选一个低风险小问题，用一句“我想确认一下，不是要吵架”开头，说清事实、感受和一个具体请求。",
      "delivery": {
        "title": "低风险开口卡",
        "items": [
          "只选一个低风险小问题，不碰最重旧账",
          "用“我想确认一下”降低对抗感",
          "最后只提出一个具体请求"
        ]
      },
      "deepAnalysis": [
        "可修复沟通型的关键不是给自己贴标签，而是先看清问题在什么环节反复出现。",
        "在亲密关系沟通卡点诊断里，真正有价值的不是“准不准”的一瞬间，而是报告能不能把你的状态翻译成一个可观察的模式。",
        "当这个模式被看见，你才有机会从一次低风险动作开始，验证关系、状态或行动是否还能被修复。"
      ],
      "consumptionSources": [
        {
          "title": "表层症状",
          "description": "你们还有沟通余量，适合先建立一个低风险修复动作。"
        },
        {
          "title": "真实机制",
          "description": "你的答案显示，表达、情绪、倾听、边界和修复都没有明显高阻力。现在最重要的是把一次小沟通做完整，而不是等问题变大。"
        },
        {
          "title": "优先动作",
          "description": "把一次小问题从开口到收尾完整说完。"
        }
      ],
      "advantages": [
        "你已经愿意看见具体模式",
        "你还能把问题拆成可观察信号",
        "你适合从“选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。”开始"
      ],
      "blindSpots": [
        {
          "title": "把所有问题混成一个判断",
          "description": "当你只用“分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环”概括全部问题时，就很难知道第一步该改哪里。"
        },
        {
          "title": "只追求一次性说清",
          "description": "越想一次解决所有问题，越容易让表达、回应和修复都失去入口。"
        },
        {
          "title": "没有保留可复盘证据",
          "description": "如果没有记录一次具体场景，下一次很容易又回到同样的感受和同样的反应。"
        }
      ],
      "riskWarning": [
        {
          "label": "判断风险",
          "text": "继续用模糊感受替代具体问题定位。"
        },
        {
          "label": "行动风险",
          "text": "要么一次性摊牌，要么继续忍着，没有中间动作。"
        },
        {
          "label": "关系风险",
          "text": "小误解持续堆积后，会被误认为无法改变。"
        },
        {
          "label": "修复风险",
          "text": "缺少收尾动作，会让每次沟通都留下新的旧账。"
        }
      ],
      "futureNoChange": [
        "小问题继续堆积",
        "沟通余量慢慢变少",
        "误解被当成性格问题",
        "下一次争执更难收尾"
      ],
      "futureWithChange": [
        "完成一次低风险沟通",
        "确认对方是否愿意回应",
        "建立一个修复样本",
        "为更难的问题积累信心"
      ],
      "actionPlan": [
        {
          "week": "第1周",
          "title": "定位主卡点",
          "description": "只记录一次最典型的真实场景，标出它属于哪个维度。"
        },
        {
          "week": "第2周",
          "title": "做一次低风险动作",
          "description": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
        },
        {
          "week": "第3周",
          "title": "观察回应变化",
          "description": "记录对方是否更容易理解、回应或进入修复。"
        },
        {
          "week": "第4周",
          "title": "决定继续修复或调整策略",
          "description": "根据现实反馈判断，是继续微调、换沟通方式，还是处理更深层边界。"
        }
      ],
      "hiddenAdvantage": "你已经开始把模糊感受转成可观察、可验证、可行动的问题。",
      "shouldNotDo": "在没有定位主卡点前，用一次大的判断替代一次小的验证。",
      "keywords": [
        "亲密关系沟通卡点诊断",
        "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
        "可修复沟通型",
        "表达清晰",
        "情绪调节",
        "倾听回应",
        "边界协商",
        "修复复盘"
      ]
    },
    "defense_loop": {
      "type": "defense_loop",
      "title": "防御循环型",
      "subtitle": "你们不是只在讨论问题，而是在彼此防御。",
      "coreConclusion": "你的答案在多个维度上都偏高，说明沟通已经不是单点卡住，而是表达、情绪、倾听、边界和修复彼此强化。",
      "summary": "当防御循环启动，任何话题都会很快变成谁对谁错。",
      "hitStatement": "你们不是说不明白，是每句话都先穿过了一层防御。",
      "answerTrace": [
        "第 1 到第 8 题如果开口经常变成指责或沉默，说明表达入口已经不稳定。",
        "第 9 到第 24 题如果情绪和倾听同时失控，说明你们很容易从谈问题滑到互相保护自己。",
        "第 33 到第 40 题如果争执后没有修复，旧账会不断进入下一次沟通。"
      ],
      "misread": "你可能以为只要这次讲赢就能解决问题，实际真正需要先打断防御循环。",
      "stuckAction": "先停止升级，而不是继续证明谁对。",
      "todayStep": "下一次冲突出现时，只做一件事：说“我现在开始防御了，我们先停十分钟再回来”。",
      "delivery": {
        "title": "防御暂停卡",
        "items": [
          "识别自己开始防御的身体信号",
          "用一句话提出暂停，不继续追问",
          "十分钟后只复述对方一句核心意思"
        ]
      },
      "deepAnalysis": [
        "防御循环型的关键不是给自己贴标签，而是先看清问题在什么环节反复出现。",
        "在亲密关系沟通卡点诊断里，真正有价值的不是“准不准”的一瞬间，而是报告能不能把你的状态翻译成一个可观察的模式。",
        "当这个模式被看见，你才有机会从一次低风险动作开始，验证关系、状态或行动是否还能被修复。"
      ],
      "consumptionSources": [
        {
          "title": "表层症状",
          "description": "当防御循环启动，任何话题都会很快变成谁对谁错。"
        },
        {
          "title": "真实机制",
          "description": "你的答案在多个维度上都偏高，说明沟通已经不是单点卡住，而是表达、情绪、倾听、边界和修复彼此强化。"
        },
        {
          "title": "优先动作",
          "description": "先停止升级，而不是继续证明谁对。"
        }
      ],
      "advantages": [
        "你已经愿意看见具体模式",
        "你还能把问题拆成可观察信号",
        "你适合从“选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。”开始"
      ],
      "blindSpots": [
        {
          "title": "把所有问题混成一个判断",
          "description": "当你只用“分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环”概括全部问题时，就很难知道第一步该改哪里。"
        },
        {
          "title": "只追求一次性说清",
          "description": "越想一次解决所有问题，越容易让表达、回应和修复都失去入口。"
        },
        {
          "title": "没有保留可复盘证据",
          "description": "如果没有记录一次具体场景，下一次很容易又回到同样的感受和同样的反应。"
        }
      ],
      "riskWarning": [
        {
          "label": "判断风险",
          "text": "继续用模糊感受替代具体问题定位。"
        },
        {
          "label": "行动风险",
          "text": "要么一次性摊牌，要么继续忍着，没有中间动作。"
        },
        {
          "label": "关系风险",
          "text": "小误解持续堆积后，会被误认为无法改变。"
        },
        {
          "label": "修复风险",
          "text": "缺少收尾动作，会让每次沟通都留下新的旧账。"
        }
      ],
      "futureNoChange": [
        "每次沟通都快速升级",
        "双方越来越只记得被伤害",
        "旧账不断进入新问题",
        "关系温度持续下降"
      ],
      "futureWithChange": [
        "先打断升级路径",
        "让双方从防御回到问题",
        "减少伤人话语",
        "为后续修复争取空间"
      ],
      "actionPlan": [
        {
          "week": "第1周",
          "title": "定位主卡点",
          "description": "只记录一次最典型的真实场景，标出它属于哪个维度。"
        },
        {
          "week": "第2周",
          "title": "做一次低风险动作",
          "description": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
        },
        {
          "week": "第3周",
          "title": "观察回应变化",
          "description": "记录对方是否更容易理解、回应或进入修复。"
        },
        {
          "week": "第4周",
          "title": "决定继续修复或调整策略",
          "description": "根据现实反馈判断，是继续微调、换沟通方式，还是处理更深层边界。"
        }
      ],
      "hiddenAdvantage": "你已经开始把模糊感受转成可观察、可验证、可行动的问题。",
      "shouldNotDo": "在没有定位主卡点前，用一次大的判断替代一次小的验证。",
      "keywords": [
        "亲密关系沟通卡点诊断",
        "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
        "防御循环型",
        "表达清晰",
        "情绪调节",
        "倾听回应",
        "边界协商",
        "修复复盘"
      ]
    },
    "blurred_expression": {
      "type": "blurred_expression",
      "title": "表达模糊型",
      "subtitle": "你不是没有需求，是需求经常被委屈和暗示包住。",
      "coreConclusion": "你的表达清晰维度突出，说明你最需要先把事实、感受和请求分开，而不是期待对方自己猜懂。",
      "summary": "表达不清会让对方只能回应你的情绪，却接不到你的真实需求。",
      "hitStatement": "你真正想说的话，常常在开口前就被委屈包住了。",
      "answerTrace": [
        "第 1 题如果你开口时容易绕很久或忍到爆发，说明沟通从入口就变重了。",
        "第 2 题如果事实、感受和请求经常混在一起，对方就很难知道该回应哪一部分。",
        "第 6 题如果你答不上“到底想怎样”，说明需求还没有被翻译成具体请求。"
      ],
      "misread": "你可能以为对方不在乎你，实际是对方常常没听懂你真正要什么。",
      "stuckAction": "把委屈翻译成一个具体请求。",
      "todayStep": "今天写一句三段式表达：发生了什么、我感到什么、我希望你做什么；先写下来，不急着发。",
      "delivery": {
        "title": "三段式表达卡",
        "items": [
          "一句事实：只描述发生了什么",
          "一句感受：只说自己的感受",
          "一句请求：只提一个对方能执行的小动作"
        ]
      },
      "deepAnalysis": [
        "表达模糊型的关键不是给自己贴标签，而是先看清问题在什么环节反复出现。",
        "在亲密关系沟通卡点诊断里，真正有价值的不是“准不准”的一瞬间，而是报告能不能把你的状态翻译成一个可观察的模式。",
        "当这个模式被看见，你才有机会从一次低风险动作开始，验证关系、状态或行动是否还能被修复。"
      ],
      "consumptionSources": [
        {
          "title": "表层症状",
          "description": "表达不清会让对方只能回应你的情绪，却接不到你的真实需求。"
        },
        {
          "title": "真实机制",
          "description": "你的表达清晰维度突出，说明你最需要先把事实、感受和请求分开，而不是期待对方自己猜懂。"
        },
        {
          "title": "优先动作",
          "description": "把委屈翻译成一个具体请求。"
        }
      ],
      "advantages": [
        "你已经愿意看见具体模式",
        "你还能把问题拆成可观察信号",
        "你适合从“选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。”开始"
      ],
      "blindSpots": [
        {
          "title": "把所有问题混成一个判断",
          "description": "当你只用“分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环”概括全部问题时，就很难知道第一步该改哪里。"
        },
        {
          "title": "只追求一次性说清",
          "description": "越想一次解决所有问题，越容易让表达、回应和修复都失去入口。"
        },
        {
          "title": "没有保留可复盘证据",
          "description": "如果没有记录一次具体场景，下一次很容易又回到同样的感受和同样的反应。"
        }
      ],
      "riskWarning": [
        {
          "label": "判断风险",
          "text": "继续用模糊感受替代具体问题定位。"
        },
        {
          "label": "行动风险",
          "text": "要么一次性摊牌，要么继续忍着，没有中间动作。"
        },
        {
          "label": "关系风险",
          "text": "小误解持续堆积后，会被误认为无法改变。"
        },
        {
          "label": "修复风险",
          "text": "缺少收尾动作，会让每次沟通都留下新的旧账。"
        }
      ],
      "futureNoChange": [
        "继续用暗示和反话表达需求",
        "对方继续听不懂重点",
        "委屈越积越多",
        "最后用爆发替代表达"
      ],
      "futureWithChange": [
        "需求被翻译成具体请求",
        "对方更容易回应",
        "减少猜测和误解",
        "沟通入口变轻"
      ],
      "actionPlan": [
        {
          "week": "第1周",
          "title": "定位主卡点",
          "description": "只记录一次最典型的真实场景，标出它属于哪个维度。"
        },
        {
          "week": "第2周",
          "title": "做一次低风险动作",
          "description": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
        },
        {
          "week": "第3周",
          "title": "观察回应变化",
          "description": "记录对方是否更容易理解、回应或进入修复。"
        },
        {
          "week": "第4周",
          "title": "决定继续修复或调整策略",
          "description": "根据现实反馈判断，是继续微调、换沟通方式，还是处理更深层边界。"
        }
      ],
      "hiddenAdvantage": "你已经开始把模糊感受转成可观察、可验证、可行动的问题。",
      "shouldNotDo": "在没有定位主卡点前，用一次大的判断替代一次小的验证。",
      "keywords": [
        "亲密关系沟通卡点诊断",
        "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
        "表达模糊型",
        "表达清晰",
        "情绪调节",
        "倾听回应",
        "边界协商",
        "修复复盘"
      ]
    },
    "emotion_surge": {
      "type": "emotion_surge",
      "title": "情绪接管型",
      "subtitle": "你不是不讲理，是情绪一上来就把方向盘抢走了。",
      "coreConclusion": "你的情绪调节维度突出，说明沟通最容易断在情绪上升后的失速。",
      "summary": "当情绪接管，原本要谈的事会迅速变成攻击、逃开或证明自己受伤。",
      "hitStatement": "你本来想解决问题，但情绪先替你冲到了最前面。",
      "answerTrace": [
        "第 9 题如果对方一句话就能把你点燃，说明触发点已经很敏感。",
        "第 12 题如果情绪高时会说出伤人的话，沟通会从解决问题变成互相受伤。",
        "第 16 题如果情绪上来后忘记原本要谈什么，说明你需要先学会降速。"
      ],
      "misread": "你可能以为必须马上说清才不会被忽视，实际是越急越容易把问题推远。",
      "stuckAction": "在情绪接管前按下暂停键。",
      "todayStep": "今天先写一条暂停句：“我现在情绪上来了，我想十分钟后再继续谈。”先练熟，不急着用在大冲突里。",
      "delivery": {
        "title": "十分钟暂停卡",
        "items": [
          "识别一个情绪上来的身体信号",
          "提前写好一句可直接使用的暂停句",
          "暂停后只做呼吸或离开现场，不继续打字追问"
        ]
      },
      "deepAnalysis": [
        "情绪接管型的关键不是给自己贴标签，而是先看清问题在什么环节反复出现。",
        "在亲密关系沟通卡点诊断里，真正有价值的不是“准不准”的一瞬间，而是报告能不能把你的状态翻译成一个可观察的模式。",
        "当这个模式被看见，你才有机会从一次低风险动作开始，验证关系、状态或行动是否还能被修复。"
      ],
      "consumptionSources": [
        {
          "title": "表层症状",
          "description": "当情绪接管，原本要谈的事会迅速变成攻击、逃开或证明自己受伤。"
        },
        {
          "title": "真实机制",
          "description": "你的情绪调节维度突出，说明沟通最容易断在情绪上升后的失速。"
        },
        {
          "title": "优先动作",
          "description": "在情绪接管前按下暂停键。"
        }
      ],
      "advantages": [
        "你已经愿意看见具体模式",
        "你还能把问题拆成可观察信号",
        "你适合从“选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。”开始"
      ],
      "blindSpots": [
        {
          "title": "把所有问题混成一个判断",
          "description": "当你只用“分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环”概括全部问题时，就很难知道第一步该改哪里。"
        },
        {
          "title": "只追求一次性说清",
          "description": "越想一次解决所有问题，越容易让表达、回应和修复都失去入口。"
        },
        {
          "title": "没有保留可复盘证据",
          "description": "如果没有记录一次具体场景，下一次很容易又回到同样的感受和同样的反应。"
        }
      ],
      "riskWarning": [
        {
          "label": "判断风险",
          "text": "继续用模糊感受替代具体问题定位。"
        },
        {
          "label": "行动风险",
          "text": "要么一次性摊牌，要么继续忍着，没有中间动作。"
        },
        {
          "label": "关系风险",
          "text": "小误解持续堆积后，会被误认为无法改变。"
        },
        {
          "label": "修复风险",
          "text": "缺少收尾动作，会让每次沟通都留下新的旧账。"
        }
      ],
      "futureNoChange": [
        "沟通越来越容易升级",
        "伤人话语越来越多",
        "对方更怕沟通",
        "你也更害怕下一次失控"
      ],
      "futureWithChange": [
        "先保住沟通现场",
        "减少不可撤回的话",
        "让问题晚一点但更清楚地被讨论",
        "重新建立安全感"
      ],
      "actionPlan": [
        {
          "week": "第1周",
          "title": "定位主卡点",
          "description": "只记录一次最典型的真实场景，标出它属于哪个维度。"
        },
        {
          "week": "第2周",
          "title": "做一次低风险动作",
          "description": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
        },
        {
          "week": "第3周",
          "title": "观察回应变化",
          "description": "记录对方是否更容易理解、回应或进入修复。"
        },
        {
          "week": "第4周",
          "title": "决定继续修复或调整策略",
          "description": "根据现实反馈判断，是继续微调、换沟通方式，还是处理更深层边界。"
        }
      ],
      "hiddenAdvantage": "你已经开始把模糊感受转成可观察、可验证、可行动的问题。",
      "shouldNotDo": "在没有定位主卡点前，用一次大的判断替代一次小的验证。",
      "keywords": [
        "亲密关系沟通卡点诊断",
        "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
        "情绪接管型",
        "表达清晰",
        "情绪调节",
        "倾听回应",
        "边界协商",
        "修复复盘"
      ]
    },
    "missed_listening": {
      "type": "missed_listening",
      "title": "倾听错位型",
      "subtitle": "你听见了话，却没听见对方真正要你回应什么。",
      "coreConclusion": "你的倾听回应维度突出，说明你在沟通中容易先防御、解释或抓漏洞，而不是先确认对方真正想表达什么。",
      "summary": "倾听错位会让对方越说越觉得没被理解，你也越听越觉得被攻击。",
      "hitStatement": "你不是没有听见对方，是太快听成了对自己的否定。",
      "answerTrace": [
        "第 17 题如果对方表达不满时你马上想解释，说明你很快进入自我保护。",
        "第 19 题如果你更多在听对方哪里说得不对，就容易错过对方真正需要的回应。",
        "第 23 题如果沟通结束后只记得自己被伤到了，说明你们没有完成互相理解。"
      ],
      "misread": "你可能以为先解释清楚自己没错最重要，实际对方更需要先确认自己被听见。",
      "stuckAction": "先复述对方一句核心意思，再表达自己。",
      "todayStep": "下次对方表达不满时，先说“我听到你在意的是……我理解对了吗？”不要立刻解释。",
      "delivery": {
        "title": "复述确认卡",
        "items": [
          "先复述对方一句核心意思",
          "问一句“我理解对了吗”",
          "得到确认后再表达自己的部分"
        ]
      },
      "deepAnalysis": [
        "倾听错位型的关键不是给自己贴标签，而是先看清问题在什么环节反复出现。",
        "在亲密关系沟通卡点诊断里，真正有价值的不是“准不准”的一瞬间，而是报告能不能把你的状态翻译成一个可观察的模式。",
        "当这个模式被看见，你才有机会从一次低风险动作开始，验证关系、状态或行动是否还能被修复。"
      ],
      "consumptionSources": [
        {
          "title": "表层症状",
          "description": "倾听错位会让对方越说越觉得没被理解，你也越听越觉得被攻击。"
        },
        {
          "title": "真实机制",
          "description": "你的倾听回应维度突出，说明你在沟通中容易先防御、解释或抓漏洞，而不是先确认对方真正想表达什么。"
        },
        {
          "title": "优先动作",
          "description": "先复述对方一句核心意思，再表达自己。"
        }
      ],
      "advantages": [
        "你已经愿意看见具体模式",
        "你还能把问题拆成可观察信号",
        "你适合从“选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。”开始"
      ],
      "blindSpots": [
        {
          "title": "把所有问题混成一个判断",
          "description": "当你只用“分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环”概括全部问题时，就很难知道第一步该改哪里。"
        },
        {
          "title": "只追求一次性说清",
          "description": "越想一次解决所有问题，越容易让表达、回应和修复都失去入口。"
        },
        {
          "title": "没有保留可复盘证据",
          "description": "如果没有记录一次具体场景，下一次很容易又回到同样的感受和同样的反应。"
        }
      ],
      "riskWarning": [
        {
          "label": "判断风险",
          "text": "继续用模糊感受替代具体问题定位。"
        },
        {
          "label": "行动风险",
          "text": "要么一次性摊牌，要么继续忍着，没有中间动作。"
        },
        {
          "label": "关系风险",
          "text": "小误解持续堆积后，会被误认为无法改变。"
        },
        {
          "label": "修复风险",
          "text": "缺少收尾动作，会让每次沟通都留下新的旧账。"
        }
      ],
      "futureNoChange": [
        "对方越来越觉得你不听",
        "你越来越觉得被攻击",
        "沟通变成解释和反解释",
        "真正问题没人接住"
      ],
      "futureWithChange": [
        "先让对方感到被听见",
        "降低防御速度",
        "减少无效解释",
        "让沟通回到问题本身"
      ],
      "actionPlan": [
        {
          "week": "第1周",
          "title": "定位主卡点",
          "description": "只记录一次最典型的真实场景，标出它属于哪个维度。"
        },
        {
          "week": "第2周",
          "title": "做一次低风险动作",
          "description": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
        },
        {
          "week": "第3周",
          "title": "观察回应变化",
          "description": "记录对方是否更容易理解、回应或进入修复。"
        },
        {
          "week": "第4周",
          "title": "决定继续修复或调整策略",
          "description": "根据现实反馈判断，是继续微调、换沟通方式，还是处理更深层边界。"
        }
      ],
      "hiddenAdvantage": "你已经开始把模糊感受转成可观察、可验证、可行动的问题。",
      "shouldNotDo": "在没有定位主卡点前，用一次大的判断替代一次小的验证。",
      "keywords": [
        "亲密关系沟通卡点诊断",
        "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
        "倾听错位型",
        "表达清晰",
        "情绪调节",
        "倾听回应",
        "边界协商",
        "修复复盘"
      ]
    },
    "boundary_blur": {
      "type": "boundary_blur",
      "title": "边界模糊型",
      "subtitle": "你不是没有底线，是太常在忍让和爆发之间来回跳。",
      "coreConclusion": "你的边界协商维度突出，说明你需要把边界从情绪爆发中拿出来，变成可讨论的具体规则。",
      "summary": "边界不清会让你一边让步一边积累怨气，最后用爆发替代协商。",
      "hitStatement": "你总是忍到快撑不住，才用很重的方式说出边界。",
      "answerTrace": [
        "第 25 题如果你不想答应时常先答应，说明边界入口被延后了。",
        "第 27 题如果谈边界容易变成指责、威胁或冷处理，说明边界已经被情绪包住。",
        "第 31 题如果分歧时只剩谁听谁的，你们缺少第三种方案。"
      ],
      "misread": "你可能以为谈边界就是伤害关系，实际不谈边界才会让怨气变重。",
      "stuckAction": "把边界说成一个可执行规则，而不是一场情绪审判。",
      "todayStep": "今天只写一个边界句：“这件事我可以做到 X，但不能做到 Y；我们能不能改成 Z？”",
      "delivery": {
        "title": "边界协商句卡",
        "items": [
          "写出自己能接受的 X",
          "写出不能继续承受的 Y",
          "给出一个可讨论替代方案 Z"
        ]
      },
      "deepAnalysis": [
        "边界模糊型的关键不是给自己贴标签，而是先看清问题在什么环节反复出现。",
        "在亲密关系沟通卡点诊断里，真正有价值的不是“准不准”的一瞬间，而是报告能不能把你的状态翻译成一个可观察的模式。",
        "当这个模式被看见，你才有机会从一次低风险动作开始，验证关系、状态或行动是否还能被修复。"
      ],
      "consumptionSources": [
        {
          "title": "表层症状",
          "description": "边界不清会让你一边让步一边积累怨气，最后用爆发替代协商。"
        },
        {
          "title": "真实机制",
          "description": "你的边界协商维度突出，说明你需要把边界从情绪爆发中拿出来，变成可讨论的具体规则。"
        },
        {
          "title": "优先动作",
          "description": "把边界说成一个可执行规则，而不是一场情绪审判。"
        }
      ],
      "advantages": [
        "你已经愿意看见具体模式",
        "你还能把问题拆成可观察信号",
        "你适合从“选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。”开始"
      ],
      "blindSpots": [
        {
          "title": "把所有问题混成一个判断",
          "description": "当你只用“分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环”概括全部问题时，就很难知道第一步该改哪里。"
        },
        {
          "title": "只追求一次性说清",
          "description": "越想一次解决所有问题，越容易让表达、回应和修复都失去入口。"
        },
        {
          "title": "没有保留可复盘证据",
          "description": "如果没有记录一次具体场景，下一次很容易又回到同样的感受和同样的反应。"
        }
      ],
      "riskWarning": [
        {
          "label": "判断风险",
          "text": "继续用模糊感受替代具体问题定位。"
        },
        {
          "label": "行动风险",
          "text": "要么一次性摊牌，要么继续忍着，没有中间动作。"
        },
        {
          "label": "关系风险",
          "text": "小误解持续堆积后，会被误认为无法改变。"
        },
        {
          "label": "修复风险",
          "text": "缺少收尾动作，会让每次沟通都留下新的旧账。"
        }
      ],
      "futureNoChange": [
        "继续先忍让后爆发",
        "对方更难理解你的底线",
        "你更容易觉得自己被忽视",
        "关系里怨气持续增加"
      ],
      "futureWithChange": [
        "边界变得可讨论",
        "减少突然爆发",
        "让对方知道可执行规则",
        "为关系保留协商空间"
      ],
      "actionPlan": [
        {
          "week": "第1周",
          "title": "定位主卡点",
          "description": "只记录一次最典型的真实场景，标出它属于哪个维度。"
        },
        {
          "week": "第2周",
          "title": "做一次低风险动作",
          "description": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
        },
        {
          "week": "第3周",
          "title": "观察回应变化",
          "description": "记录对方是否更容易理解、回应或进入修复。"
        },
        {
          "week": "第4周",
          "title": "决定继续修复或调整策略",
          "description": "根据现实反馈判断，是继续微调、换沟通方式，还是处理更深层边界。"
        }
      ],
      "hiddenAdvantage": "你已经开始把模糊感受转成可观察、可验证、可行动的问题。",
      "shouldNotDo": "在没有定位主卡点前，用一次大的判断替代一次小的验证。",
      "keywords": [
        "亲密关系沟通卡点诊断",
        "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
        "边界模糊型",
        "表达清晰",
        "情绪调节",
        "倾听回应",
        "边界协商",
        "修复复盘"
      ]
    },
    "repair_gap": {
      "type": "repair_gap",
      "title": "修复断层型",
      "subtitle": "你们不是吵完就过去了，是问题被压进了下一次。",
      "coreConclusion": "你的修复复盘维度突出，说明争执后的收尾没有真正完成，旧问题会不断回到新沟通里。",
      "summary": "没有修复，关系只能靠冷却维持；但冷却不等于解决。",
      "hitStatement": "你们看起来和好了，但很多问题只是沉进了旧账里。",
      "answerTrace": [
        "第 33 题如果争执后只是冷一阵就过去，说明你们缺少真正修复。",
        "第 36 题如果同一个问题经常重复出现，说明旧问题没有被处理成新约定。",
        "第 39 题如果修复关系和证明谁对分不开，沟通很容易卡在输赢。"
      ],
      "misread": "你可能以为不提了就是过去了，实际没修复的问题会换个形式再回来。",
      "stuckAction": "把一次争执复盘成一个下次约定。",
      "todayStep": "今天选一个最近的小争执，只写一句：下次再遇到这种情况，我们能不能先怎么做？",
      "delivery": {
        "title": "争执后修复卡",
        "items": [
          "只选一个小争执，不复盘全部旧账",
          "写出一个具体争执触发点",
          "写出一个下次可以尝试的新约定"
        ]
      },
      "deepAnalysis": [
        "修复断层型的关键不是给自己贴标签，而是先看清问题在什么环节反复出现。",
        "在亲密关系沟通卡点诊断里，真正有价值的不是“准不准”的一瞬间，而是报告能不能把你的状态翻译成一个可观察的模式。",
        "当这个模式被看见，你才有机会从一次低风险动作开始，验证关系、状态或行动是否还能被修复。"
      ],
      "consumptionSources": [
        {
          "title": "表层症状",
          "description": "没有修复，关系只能靠冷却维持；但冷却不等于解决。"
        },
        {
          "title": "真实机制",
          "description": "你的修复复盘维度突出，说明争执后的收尾没有真正完成，旧问题会不断回到新沟通里。"
        },
        {
          "title": "优先动作",
          "description": "把一次争执复盘成一个下次约定。"
        }
      ],
      "advantages": [
        "你已经愿意看见具体模式",
        "你还能把问题拆成可观察信号",
        "你适合从“选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。”开始"
      ],
      "blindSpots": [
        {
          "title": "把所有问题混成一个判断",
          "description": "当你只用“分不清自己是不会表达、害怕冲突、听不见对方、边界不清，还是关系已经进入防御循环”概括全部问题时，就很难知道第一步该改哪里。"
        },
        {
          "title": "只追求一次性说清",
          "description": "越想一次解决所有问题，越容易让表达、回应和修复都失去入口。"
        },
        {
          "title": "没有保留可复盘证据",
          "description": "如果没有记录一次具体场景，下一次很容易又回到同样的感受和同样的反应。"
        }
      ],
      "riskWarning": [
        {
          "label": "判断风险",
          "text": "继续用模糊感受替代具体问题定位。"
        },
        {
          "label": "行动风险",
          "text": "要么一次性摊牌，要么继续忍着，没有中间动作。"
        },
        {
          "label": "关系风险",
          "text": "小误解持续堆积后，会被误认为无法改变。"
        },
        {
          "label": "修复风险",
          "text": "缺少收尾动作，会让每次沟通都留下新的旧账。"
        }
      ],
      "futureNoChange": [
        "旧问题继续累积",
        "每次争执都像重新打开历史",
        "和好越来越像暂时停火",
        "关系安全感继续下降"
      ],
      "futureWithChange": [
        "争执后能留下一个新约定",
        "旧账进入可处理状态",
        "减少重复吵同一个问题",
        "关系开始有修复证据"
      ],
      "actionPlan": [
        {
          "week": "第1周",
          "title": "定位主卡点",
          "description": "只记录一次最典型的真实场景，标出它属于哪个维度。"
        },
        {
          "week": "第2周",
          "title": "做一次低风险动作",
          "description": "选择最近一次失败沟通，标出卡在开口、情绪、倾听、边界还是修复，并只做一个小动作。"
        },
        {
          "week": "第3周",
          "title": "观察回应变化",
          "description": "记录对方是否更容易理解、回应或进入修复。"
        },
        {
          "week": "第4周",
          "title": "决定继续修复或调整策略",
          "description": "根据现实反馈判断，是继续微调、换沟通方式，还是处理更深层边界。"
        }
      ],
      "hiddenAdvantage": "你已经开始把模糊感受转成可观察、可验证、可行动的问题。",
      "shouldNotDo": "在没有定位主卡点前，用一次大的判断替代一次小的验证。",
      "keywords": [
        "亲密关系沟通卡点诊断",
        "用户的亲密关系沟通卡点主要来自表达清晰、情绪调节、倾听回应、边界协商、修复复盘中的哪一类？",
        "修复断层型",
        "表达清晰",
        "情绪调节",
        "倾听回应",
        "边界协商",
        "修复复盘"
      ]
    }
  },
  "scoringLogic": {
    "systemSlices": {
      "expression_clarity": [
        0,
        8
      ],
      "emotion_regulation": [
        8,
        16
      ],
      "listening_response": [
        16,
        24
      ],
      "boundary_negotiation": [
        24,
        32
      ],
      "repair_loop": [
        32,
        40
      ]
    },
    "primaryTypeBySystem": {
      "expression_clarity": "blurred_expression",
      "emotion_regulation": "emotion_surge",
      "listening_response": "missed_listening",
      "boundary_negotiation": "boundary_blur",
      "repair_loop": "repair_gap"
    },
    "lowScoreResult": {
      "max": 52,
      "maxSystemScore": 12,
      "type": "stable_dialogue",
      "secondaryType": "stable_dialogue"
    },
    "highScoreResult": {
      "min": 140,
      "maxSpread": 8,
      "type": "defense_loop",
      "secondaryType": "defense_loop"
    },
    "specialResultRules": [],
    "stageMap": {
      "stable_dialogue+stable_dialogue": "可修复沟通期",
      "defense_loop+defense_loop": "复合卡点警戒期",
      "blurred_expression+emotion_surge": "表达清晰情绪调节交叠期",
      "emotion_surge+missed_listening": "情绪调节倾听回应交叠期",
      "missed_listening+boundary_blur": "倾听回应边界协商交叠期",
      "boundary_blur+repair_gap": "边界协商修复复盘交叠期",
      "repair_gap+blurred_expression": "修复复盘表达清晰交叠期"
    },
    "fallbackStage": "亲密关系沟通卡点诊断调整期",
    "riskLevel": [
      {
        "max": 52,
        "label": "低卡点"
      },
      {
        "max": 80,
        "label": "中度卡点"
      },
      {
        "max": 120,
        "label": "高卡点"
      },
      {
        "max": 160,
        "label": "优先处理"
      }
    ]
  },
  "resultMatrixTests": [
    {
      "name": "all_low",
      "expected": "stable_dialogue",
      "fill": 1
    },
    {
      "name": "all_high",
      "expected": "defense_loop",
      "fill": 4
    },
    {
      "name": "blurred_expression",
      "expected": "blurred_expression",
      "fill": 1,
      "ranges": [
        [
          0,
          8,
          4
        ]
      ]
    },
    {
      "name": "emotion_surge",
      "expected": "emotion_surge",
      "fill": 1,
      "ranges": [
        [
          8,
          16,
          4
        ]
      ]
    },
    {
      "name": "missed_listening",
      "expected": "missed_listening",
      "fill": 1,
      "ranges": [
        [
          16,
          24,
          4
        ]
      ]
    },
    {
      "name": "boundary_blur",
      "expected": "boundary_blur",
      "fill": 1,
      "ranges": [
        [
          24,
          32,
          4
        ]
      ]
    },
    {
      "name": "repair_gap",
      "expected": "repair_gap",
      "fill": 1,
      "ranges": [
        [
          32,
          40,
          4
        ]
      ]
    }
  ]
};
