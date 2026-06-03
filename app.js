const chapters = [
  {
    time: "20:30",
    label: "序章",
    status: "案前回溯",
    title: "星核系统",
    image: "assets/01_密室办公室主场景.png",
    text: [
      "恒远写字楼 18 层只剩几盏灯还亮着。研发部总监陈峰负责核心项目“星核系统”，最近因为分红、成果归属和商业合作，和多名下属关系紧张。",
      "他的办公室是封闭空间：门从内部反锁，窗户完全封闭，没有外力破坏。角落里有轻微搏斗划痕，独立茶水间仍有水渍。",
      "你现在只知道一件事：这不是一场简单的职场报复。有人想让死亡、密室和代码失窃在同一晚发生。"
    ],
    actions: [
      { text: "记录案发背景", panel: "case", reveal: ["background"] },
      { text: "查看当前已知人员", panel: "people" },
      { text: "推进时间：21:00", next: true }
    ]
  },
  {
    time: "21:00",
    label: "第一幕",
    status: "地下车库",
    title: "五分钟停留",
    image: "assets/01_密室办公室主场景.png",
    text: [
      "地下车库监控显示，苏晴的车在 21:00 进入写字楼。她声称自己 20:00 已经回家照顾孩子。",
      "21:10 前后，她的车在车库角落短暂停留。画面昏暗，只能看见有人靠近车窗，交谈大约五分钟。",
      "这段画面现在还不能证明下毒，但它足以推翻苏晴的完整不在场说法。"
    ],
    actions: [
      { text: "收录地下车库监控", panel: "evidence", reveal: ["garage", "suProfile"] },
      { text: "讯问苏晴的去向", panel: "people", suspect: "苏晴", reveal: ["suPressure"] },
      { text: "推进时间：21:10", next: true }
    ]
  },
  {
    time: "21:10",
    label: "第二幕",
    status: "电梯监控",
    title: "林薇回到 18 层",
    image: "assets/05_18层电梯口监控.png",
    text: [
      "电梯口监控拍到林薇进入 18 层。她最初说自己 20:30 下班，21:05 在超市结账，随后回家。",
      "小票是真的，但她家人说她 21:40 才到家。中间空出的二十多分钟，正好够她回到写字楼。",
      "安全通道监控在 21:10 到 21:30 期间人为故障。她说自己从安全通道离开，偏偏没有画面能证明。"
    ],
    actions: [
      { text: "收录 18 层监控与小票", panel: "evidence", reveal: ["cctv", "receipt", "linProfile"] },
      { text: "用时间差追问林薇", panel: "people", suspect: "林薇", reveal: ["linPressure"] },
      { text: "推进时间：21:15", next: true }
    ]
  },
  {
    time: "21:15",
    label: "第三幕",
    status: "办公室门口",
    title: "杯身指纹",
    image: "assets/03_毒咖啡杯物证.png",
    text: [
      "王浩承认 21:15 左右去过陈峰办公室。他说自己只是谈项目补救方案。",
      "毒咖啡杯上提取到王浩的指纹。乍看之下，他像最容易指控的人：觊觎总监职位，又被陈峰要求撤职。",
      "但杯沿和杯托有擦拭痕迹，杯身指纹却被保留。这个指纹更像被刻意留下的靶子。"
    ],
    actions: [
      { text: "收录毒咖啡杯", panel: "evidence", reveal: ["coffee", "wangProfile"] },
      { text: "追问王浩的通话记录", panel: "people", suspect: "王浩", reveal: ["wangPressure"] },
      { text: "推进时间：21:25", next: true }
    ]
  },
  {
    time: "21:25",
    label: "第四幕",
    status: "手机与茶水间",
    title: "纸杯和短信",
    image: "assets/06_关键短信手机线索.png",
    text: [
      "陈峰手机在 21:25 发出短信：“对不起，奖金会给你，别闹了。”收件人是苏晴，但她的手机当时关机。",
      "茶水间水槽里找到一次性纸杯，杯内残留氰化物。杯身有林薇指纹，杯口有苏晴指纹。",
      "咖啡里不只有氰化物，还有少量镇静剂。陈峰不是瞬间倒下，他先失去反抗能力。"
    ],
    actions: [
      { text: "收录短信、纸杯和镇静剂", panel: "evidence", reveal: ["phone", "paperCup", "sedative"] },
      { text: "追问苏晴的关机与转账", panel: "people", suspect: "苏晴", reveal: ["suBreak"] },
      { text: "推进时间：21:35", next: true }
    ]
  },
  {
    time: "21:35",
    label: "第五幕",
    status: "封锁现场",
    title: "门锁和抽屉",
    image: "assets/02_初始场景_死者伏倒桌上.png",
    text: [
      "办公室门从内部反锁，门锁内侧留下林薇指纹。指纹上带有安全通道灰尘，与她“从安全通道离开”的说法互相咬合。",
      "抽屉有撬动痕迹，内侧同样提取到林薇指纹。“星核系统”核心代码副本不翼而飞。",
      "林薇不是临时起意。她进入办公室，不只是确认死亡，还要拿走代码，封住陈峰即将揭穿她的证据。"
    ],
    actions: [
      { text: "收录门锁、抽屉和代码失窃", panel: "evidence", reveal: ["lock", "drawer", "codeCopy"] },
      { text: "拆穿林薇的商业间谍身份", panel: "people", suspect: "林薇", reveal: ["linBreak"] },
      { text: "推进时间：21:50", next: true }
    ]
  },
  {
    time: "21:50",
    label: "第六幕",
    status: "资金流向",
    title: "十万元转账",
    image: "assets/07_三名嫌疑人档案板.png",
    text: [
      "苏晴银行卡收到一笔 10 万元匿名转账，金额刚好够孩子一期医药费。",
      "转账账户与竞争对手公司海外账户存在资金往来。林薇此前承诺给苏晴医药费，并帮她掩盖挪用公款的过错。",
      "王浩也有秘密：他和陈峰曾挪用项目资金投资失败。他撞见陈峰濒死却没有报警，但没有证据显示他参与下毒。"
    ],
    actions: [
      { text: "收录转账、聊天记录与资金问题", panel: "evidence", reveal: ["transfer", "chat", "wangSecret"] },
      { text: "整理三人交叉证词", panel: "people", reveal: ["cross"] },
      { text: "推进时间：22:10", next: true }
    ]
  },
  {
    time: "22:10",
    label: "终幕",
    status: "结案推理",
    title: "密室不只是门",
    image: "assets/07_三名嫌疑人档案板.png",
    text: [
      "现在，表面动机、隐藏动机和物证链条都浮出来了。",
      "林薇是主谋：她要灭口、窃取“星核系统”核心代码，并伪造密室。苏晴是协助者：她递送毒纸杯、望风，并收取报酬。王浩是知情隐瞒者：他撞见尸体后选择逃避。",
      "结案时不要只看谁最有动机。要看谁能同时解释毒源、门锁、代码失窃、监控空白和资金流向。"
    ],
    actions: [
      { text: "查看完整证据", panel: "evidence" },
      { text: "提交结案推理", panel: "deduction" }
    ]
  }
];

const evidence = {
  background: {
    order: 0,
    label: "案情",
    title: "密闭办公室",
    image: "assets/01_密室办公室主场景.png",
    text: "陈峰办公室门从内部反锁，窗户封闭，无外力破坏。角落有轻微搏斗划痕，独立茶水间保留关键痕迹。“星核系统”核心代码副本案发后失踪。"
  },
  garage: {
    order: 1,
    label: "监控",
    title: "21:00 地下车库",
    image: "assets/01_密室办公室主场景.png",
    text: "苏晴车辆进入地下车库，并在角落停留约五分钟。她声称全程在家照顾孩子，此处形成第一处证词裂缝。"
  },
  receipt: {
    order: 2,
    label: "票据",
    title: "购物小票",
    image: "assets/05_18层电梯口监控.png",
    text: "林薇 21:05 在超市结账，小票真实。但她家人称她 21:40 才到家，中间空白时间无法解释。"
  },
  cctv: {
    order: 3,
    label: "监控",
    title: "21:10 电梯口画面",
    image: "assets/05_18层电梯口监控.png",
    text: "林薇 21:10 进入 18 层，随后电梯监控没有拍到她离开。安全通道监控同一时间段人为故障。"
  },
  coffee: {
    order: 4,
    label: "物证",
    title: "毒咖啡杯",
    image: "assets/03_毒咖啡杯物证.png",
    text: "杯中残留氰化物和少量镇静剂。杯壁有王浩指纹，但杯沿与杯托被擦过，指纹更像被保留下来的误导。"
  },
  phone: {
    order: 5,
    label: "通讯",
    title: "21:25 异常短信",
    image: "assets/06_关键短信手机线索.png",
    text: "陈峰手机向苏晴发出“对不起，奖金会给你，别闹了”。苏晴手机当时关机，短信更像被用来混淆时间线。"
  },
  paperCup: {
    order: 6,
    label: "物证",
    title: "茶水间纸杯",
    image: "assets/03_毒咖啡杯物证.png",
    text: "一次性纸杯残留氰化物。杯身有林薇指纹，杯口有苏晴指纹，是下毒链条中最直接的载体。"
  },
  sedative: {
    order: 7,
    label: "鉴定",
    title: "镇静剂残留",
    image: "assets/03_毒咖啡杯物证.png",
    text: "咖啡中检出少量镇静剂，可解释陈峰为何没有激烈反抗，也解释办公室角落只有轻微搏斗划痕。"
  },
  lock: {
    order: 8,
    label: "痕迹",
    title: "门锁内侧指纹",
    image: "assets/04_门锁女性指纹线索.png",
    text: "门锁内侧有林薇指纹，且指纹带有安全通道灰尘。门锁内部有轻微磨损，疑似备用钥匙反复使用。"
  },
  drawer: {
    order: 9,
    label: "痕迹",
    title: "抽屉撬痕",
    image: "assets/02_初始场景_死者伏倒桌上.png",
    text: "陈峰办公室抽屉被撬，内侧提取到林薇指纹。抽屉原存放“星核系统”核心代码副本。"
  },
  codeCopy: {
    order: 10,
    label: "资料",
    title: "核心代码失踪",
    image: "assets/07_三名嫌疑人档案板.png",
    text: "“星核系统”核心代码副本不翼而飞。陈峰电脑加密文件夹中藏有林薇商业间谍身份线索。"
  },
  transfer: {
    order: 11,
    label: "资金",
    title: "十万元匿名转账",
    image: "assets/07_三名嫌疑人档案板.png",
    text: "苏晴 21:50 收到 10 万元匿名转账，金额刚好够孩子一期医药费。转账账户与竞争对手公司海外账户有关联。"
  },
  chat: {
    order: 12,
    label: "通讯",
    title: "聊天记录",
    image: "assets/06_关键短信手机线索.png",
    text: "恢复的聊天记录出现“下毒”“望风”“报酬”等关键词，指向林薇与苏晴的协作。"
  },
  wangSecret: {
    order: 13,
    label: "背景",
    title: "王浩的隐瞒",
    image: "assets/07_三名嫌疑人档案板.png",
    text: "王浩与陈峰曾挪用项目资金投资失败。王浩撞见陈峰濒死后逃离，选择隐瞒，但没有直接下毒证据。"
  }
};

const people = {
  林薇: {
    role: "研发部核心员工",
    bio: "28 岁，负责核心代码。表面上因成果被抢、晋升失败、分红落空而怨恨陈峰。",
    motive: "隐藏动机是商业间谍身份暴露。陈峰准备第二天开除并起诉她，她需要灭口并窃取“星核系统”核心代码。",
    evidence: "21:10 回到 18 层；门锁、抽屉、茶水间纸杯均留下指纹；工位抽屉发现备用钥匙复制件和代码片段。",
    doubt: "从购物小票、邻居聊天到拿电脑，她的说法层层被监控和证词推翻。",
    interviews: {
      base: [
        ["侦探", "你说 20:30 下班，21:05 超市结账，之后回家？"],
        ["林薇", "对。小票可以证明。我只是买了蔬菜和日用品。"],
        ["侦探", "陈峰抢过你的研发成果？"],
        ["林薇", "他确实抢过，也没给我应得的分红。但这不代表我会杀人。"]
      ],
      pressure: [
        ["侦探", "你家人说你 21:40 才到家。监控却拍到你 21:10 进入 18 层。"],
        ["林薇", "我回去拿电脑，拿完就从安全通道走了。"],
        ["侦探", "安全通道监控正好故障。门锁内侧也有你的指纹。"],
        ["林薇", "那是以前帮陈峰整理文件时碰到的。"]
      ],
      break: [
        ["侦探", "你的抽屉里有备用钥匙复制件，还有“星核系统”代码片段。陈峰电脑里也有你的间谍证据。"],
        ["林薇", "……我无话可说。"],
        ["侦探", "苏晴说你给她氰化物，让她望风，并承诺 10 万医药费。"],
        ["林薇", "我没让她杀人。杀人的一定是她。"]
      ]
    }
  },
  王浩: {
    role: "研发部副总监",
    bio: "35 岁，与陈峰竞争总监职位，并因项目失误面临撤职。",
    motive: "隐藏问题是与陈峰共同挪用项目资金投资失败，害怕陈峰把责任推给自己。",
    evidence: "咖啡杯身有王浩指纹；21:20-21:25 有无法核实的通话；承认帮助林薇获取陈峰作息表。",
    doubt: "他有隐瞒和逃避，但没有毒源、门锁、纸杯和资金链证据，无法闭合作案链条。",
    interviews: {
      base: [
        ["侦探", "你 21:15 去过陈峰办公室？"],
        ["王浩", "去过。我说是聊项目补救，其实还有资金问题。"],
        ["侦探", "杯上有你的指纹。"],
        ["王浩", "我碰过杯子，但没往里面下毒。"]
      ],
      pressure: [
        ["侦探", "21:20 到 21:25 的通话对象和林薇有关。"],
        ["王浩", "她问我有没有找到陈峰。我以为她只是要资料。"],
        ["侦探", "你撞见陈峰濒死，为什么不报警？"],
        ["王浩", "我怕挪用资金的事暴露。我逃了。"]
      ],
      break: [
        ["侦探", "你不是凶手，但你帮林薇提供了作息表，也隐瞒了尸体。"],
        ["王浩", "我承认隐瞒。我怕坐牢，可我没有杀陈峰。"]
      ]
    }
  },
  苏晴: {
    role: "陈峰秘书",
    bio: "32 岁，曾与陈峰有暧昧关系，后被抛弃并被拖欠奖金。",
    motive: "孩子重病急需医药费，且陈峰掌握她挪用公款证据。林薇以 10 万元和掩盖过错诱使她协助。",
    evidence: "地下车库与林薇会合；手机 21:20 关机；纸杯杯口有她指纹；21:50 收到 10 万元匿名转账。",
    doubt: "她承认递送毒纸杯和望风，却试图否认知道剂量致命。",
    interviews: {
      base: [
        ["侦探", "你说 20:00 回家照顾孩子，但车库监控显示你 21:00 回到写字楼。"],
        ["苏晴", "我只是回来拿文件，很快就走了。"],
        ["侦探", "你的手机 21:20 关机。"],
        ["苏晴", "没电了，我没看到陈峰发来的短信。"]
      ],
      pressure: [
        ["侦探", "你 21:50 收到 10 万匿名转账，刚好够孩子医药费。"],
        ["苏晴", "那是朋友借我的钱。"],
        ["侦探", "聊天记录里有“下毒”“望风”“报酬”。"],
        ["苏晴", "……我只是帮她递了纸杯。"]
      ],
      break: [
        ["侦探", "纸杯杯口有你的指纹，杯身有林薇指纹。你不是旁观者。"],
        ["苏晴", "是她给我的氰化物。她说只是让陈峰昏迷，不会死。"],
        ["侦探", "你负责递送毒纸杯、望风、关机制造空白。"],
        ["苏晴", "我承认协助，但主谋是林薇。"]
      ]
    }
  }
};

const deductionSteps = [
  { id: "mastermind", title: "本案主谋是谁？", options: ["王浩", "林薇", "苏晴", "陈峰自杀"] },
  { id: "helper", title: "直接协助作案的人是谁？", options: ["三人共同下毒", "王浩", "无人协助", "苏晴"] },
  { id: "concealer", title: "谁更像知情隐瞒者，而不是下毒者？", options: ["没有知情隐瞒者", "苏晴", "王浩", "林薇"] },
  { id: "motive", title: "哪种隐藏目的最能解释死亡与代码失窃同时发生？", options: ["单纯争夺项目分红", "替苏晴复仇", "商业间谍身份暴露并窃取核心代码", "嫉妒王浩升职"] },
  { id: "poison", title: "下毒链条中最关键的载体是什么？", options: ["王浩的咖啡杯指纹", "红酒杯", "茶水间一次性纸杯", "拆信刀"] },
  { id: "lockedRoom", title: "密室如何形成？", options: ["陈峰自锁后死亡", "王浩从外侧强行锁门", "苏晴远程操控门锁", "林薇用备用钥匙进入，确认死亡后反锁并经安全通道离开"] },
  { id: "finalChain", title: "哪组证据形成最终闭环？", options: ["购物小票、王浩指纹、拆信刀、红酒杯", "苏晴家人证词、陈峰短信、项目会议记录", "电梯监控、纸杯指纹、门锁指纹、抽屉撬痕、转账与聊天记录", "王浩通话、陈峰工作日志、超市小票"] }
];

const state = {
  stage: 0,
  maxStage: 0,
  revealed: new Set(["background"]),
  viewed: new Set(),
  activeSuspect: "林薇",
  deduction: {},
  audio: null
};

const refs = {
  startScreen: document.querySelector("#startScreen"),
  stageScreen: document.querySelector("#stageScreen"),
  stageImage: document.querySelector("#stageImage"),
  stageKicker: document.querySelector("#stageKicker"),
  stageTitle: document.querySelector("#stageTitle"),
  chapterLabel: document.querySelector("#chapterLabel"),
  storyText: document.querySelector("#storyText"),
  actionList: document.querySelector("#actionList"),
  progressStrip: document.querySelector("#progressStrip"),
  panelOverlay: document.querySelector("#panelOverlay"),
  panelKicker: document.querySelector("#panelKicker"),
  panelTitle: document.querySelector("#panelTitle"),
  panelBody: document.querySelector("#panelBody"),
  transitionOverlay: document.querySelector("#transitionOverlay"),
  transitionTime: document.querySelector("#transitionTime"),
  transitionText: document.querySelector("#transitionText"),
  prevChapter: document.querySelector("#prevChapter"),
  nextChapter: document.querySelector("#nextChapter")
};

function currentChapter() {
  return chapters[state.stage];
}

function reveal(ids = []) {
  ids.forEach((id) => state.revealed.add(id));
}

function renderStage() {
  const chapter = currentChapter();
  refs.stageKicker.textContent = chapter.status;
  refs.stageTitle.textContent = `${chapter.time} · ${chapter.title}`;
  refs.chapterLabel.textContent = chapter.label;
  refs.storyText.innerHTML = chapter.text.map((line) => `<p>${line}</p>`).join("");
  refs.actionList.innerHTML = "";
  refs.stageScreen.classList.add("switching");
  window.setTimeout(() => {
    refs.stageImage.src = chapter.image;
    refs.stageImage.alt = chapter.title;
    refs.stageScreen.classList.remove("switching");
  }, 120);
  chapter.actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action.text;
    button.addEventListener("click", () => runAction(action));
    refs.actionList.appendChild(button);
  });
  refs.prevChapter.disabled = state.stage === 0;
  refs.nextChapter.disabled = state.stage >= state.maxStage;
  renderProgress();
}

function renderProgress() {
  refs.progressStrip.innerHTML = "";
  chapters.forEach((chapter, index) => {
    const node = document.createElement("button");
    node.type = "button";
    node.className = "progress-node";
    node.classList.toggle("active", index === state.stage);
    node.classList.toggle("done", index < state.stage);
    node.disabled = index > state.maxStage;
    node.innerHTML = `<strong>${chapter.time}</strong><span>${chapter.title}</span>`;
    node.addEventListener("click", () => jumpToStage(index));
    refs.progressStrip.appendChild(node);
  });
}

function runAction(action) {
  reveal(action.reveal);
  if (action.suspect) state.activeSuspect = action.suspect;
  if (action.next) {
    advanceStage();
    return;
  }
  if (action.panel) openPanel(action.panel);
}

function advanceStage() {
  if (state.stage >= chapters.length - 1) return;
  const next = chapters[state.stage + 1];
  refs.transitionTime.textContent = next.time;
  refs.transitionText.textContent = next.text[0];
  refs.transitionOverlay.classList.add("show");
  playSoftCue();
  window.setTimeout(() => {
    state.stage += 1;
    state.maxStage = Math.max(state.maxStage, state.stage);
    renderStage();
  }, 460);
  window.setTimeout(() => refs.transitionOverlay.classList.remove("show"), 1120);
}

function jumpToStage(index) {
  if (index < 0 || index > state.maxStage) return;
  const next = chapters[index];
  refs.transitionTime.textContent = next.time;
  refs.transitionText.textContent = index < state.stage ? "你回到之前的调查节点，重新站到那一刻的现场。" : next.text[0];
  refs.transitionOverlay.classList.add("show");
  window.setTimeout(() => {
    state.stage = index;
    renderStage();
  }, 260);
  window.setTimeout(() => refs.transitionOverlay.classList.remove("show"), 760);
}

function openPanel(type) {
  const titles = {
    case: ["调查资料", "案卷"],
    evidence: ["现场记录", "证据"],
    people: ["人物顺序", "嫌疑人"],
    deduction: ["结尾整合", "结案推理"]
  };
  refs.panelKicker.textContent = titles[type][0];
  refs.panelTitle.textContent = titles[type][1];
  refs.panelBody.innerHTML = renderPanel(type);
  refs.panelOverlay.classList.add("show");
  refs.panelOverlay.setAttribute("aria-hidden", "false");
  wirePanel(type);
}

function closePanel() {
  refs.panelOverlay.classList.remove("show");
  refs.panelOverlay.setAttribute("aria-hidden", "true");
}

function knownEvidence() {
  return Object.entries(evidence)
    .filter(([id]) => state.revealed.has(id))
    .sort((a, b) => a[1].order - b[1].order);
}

function renderPanel(type) {
  if (type === "case") {
    return `<div class="grid">${card("background", evidence.background)}</div>`;
  }
  if (type === "evidence") {
    return `<div class="grid">${knownEvidence().map(([id, item]) => card(id, item)).join("")}</div>`;
  }
  if (type === "people") {
    return `<div class="people-list">${Object.entries(people).map(([name, person]) => renderPerson(name, person)).join("")}</div>`;
  }
  return renderDeduction();
}

function card(id, item) {
  return `
    <article class="card">
      <img src="${item.image}" alt="${item.title}">
      <div class="card-content">
        <small>${item.label}</small>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="card-actions">
          <button data-view-evidence="${id}" type="button">${state.viewed.has(id) ? "已查看" : "查看"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderPerson(name, person) {
  if (!isPersonKnown(name)) {
    return `
      <article class="card">
        <div class="card-content">
          <small>尚未讯问</small>
          <h3>${name}</h3>
          <p>此人的完整动机和证词尚未进入调查。继续推进时间线后再回到人物页。</p>
        </div>
      </article>
    `;
  }
  const mode = interviewMode(name);
  return `
    <article class="card">
      <div class="card-content">
        <small>${person.role}</small>
        <h3>${name}</h3>
        <p>${person.bio}</p>
        <div class="person-focus">
          <div class="focus-box"><b>动机</b><p>${person.motive}</p></div>
          <div class="focus-box"><b>证据</b><p>${person.evidence}</p></div>
          <div class="focus-box"><b>疑点</b><p>${person.doubt}</p></div>
        </div>
        <div class="dialogue">
          ${person.interviews[mode].map(([speaker, text]) => `<p><span class="speaker">${speaker}</span>：${text}</p>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function isPersonKnown(name) {
  if (name === "林薇") return state.revealed.has("linProfile");
  if (name === "王浩") return state.revealed.has("wangProfile");
  if (name === "苏晴") return state.revealed.has("suProfile");
  return false;
}

function interviewMode(name) {
  if (name === "林薇" && state.revealed.has("linBreak")) return "break";
  if (name === "林薇" && state.revealed.has("linPressure")) return "pressure";
  if (name === "王浩" && state.revealed.has("wangSecret")) return "break";
  if (name === "王浩" && state.revealed.has("wangPressure")) return "pressure";
  if (name === "苏晴" && state.revealed.has("suBreak")) return "break";
  if (name === "苏晴" && state.revealed.has("suPressure")) return "pressure";
  return "base";
}

function renderDeduction() {
  return `
    <div class="deduction-flow">
      <article class="card">
        <div class="card-content">
          <small>整合</small>
          <h3>不是谁最可疑，而是谁能闭合全部证据</h3>
          <p>本案的关键不是单一动机，而是多条链同时闭合：毒源、纸杯指纹、密室反锁、代码失窃、资金转账、聊天记录与监控空白。</p>
        </div>
      </article>
      ${deductionSteps.map(renderDeductionStep).join("")}
      <button class="submit-btn" id="submitCase" type="button">提交结案报告</button>
      <div class="verdict" id="verdict"></div>
    </div>
  `;
}

function renderDeductionStep(step) {
  return `
    <article class="deduction-step">
      <h3>${step.title}</h3>
      <div class="choice-grid">
        ${step.options.map((option) => `<button class="choice-btn ${state.deduction[step.id] === option ? "selected" : ""}" data-step="${step.id}" data-choice="${option}" type="button">${option}</button>`).join("")}
      </div>
    </article>
  `;
}

function wirePanel(type) {
  refs.panelBody.querySelectorAll("[data-view-evidence]").forEach((button) => {
    button.addEventListener("click", () => {
      state.viewed.add(button.dataset.viewEvidence);
      openPanel(type);
    });
  });
  refs.panelBody.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.deduction[button.dataset.step] = button.dataset.choice;
      openPanel("deduction");
    });
  });
  const submit = refs.panelBody.querySelector("#submitCase");
  if (submit) submit.addEventListener("click", submitCase);
}

function submitCase() {
  const answer = state.deduction;
  const correct =
    answer.mastermind === "林薇" &&
    answer.helper === "苏晴" &&
    answer.concealer === "王浩" &&
    answer.motive === "商业间谍身份暴露并窃取核心代码" &&
    answer.poison === "茶水间一次性纸杯" &&
    answer.lockedRoom === "林薇用备用钥匙进入，确认死亡后反锁并经安全通道离开" &&
    answer.finalChain === "电梯监控、纸杯指纹、门锁指纹、抽屉撬痕、转账与聊天记录";
  const verdict = refs.panelBody.querySelector("#verdict");
  verdict.className = `verdict ${correct ? "ok" : "warn"}`;
  if (correct) {
    verdict.innerHTML =
      "结案成立。林薇是主谋和核心凶手：她商业间谍身份被陈峰发现，必须灭口并窃取“星核系统”核心代码。苏晴为协助者：因孩子医药费和挪用公款把柄，被林薇以 10 万元诱使递送毒纸杯、望风并关机制造空白。王浩不是凶手，而是知情隐瞒者：他因挪用资金问题撞见陈峰濒死后逃离。决定性闭环是：林薇 21:10 进入 18 层，茶水间纸杯同时留下林薇和苏晴指纹，门锁内侧与抽屉撬痕均指向林薇，核心代码失窃解释真正目的，转账和聊天记录证明苏晴协作。所谓密室，是林薇确认死亡、取走代码后从内部反锁，再经故障安全通道离开的结果。";
    playResolve();
    return;
  }
  verdict.innerHTML =
    "报告被退回。重新核对：谁能同时解释商业间谍身份、核心代码失窃、纸杯双人指纹、门锁内侧指纹、苏晴 10 万转账，以及王浩为什么只隐瞒不下毒？能解释全部链条的人，才是本案主谋。";
  playSoftCue();
}

function setupAudio() {
  document.querySelector("#audioToggle").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    if (state.audio) {
      state.audio.stop();
      state.audio = null;
      button.textContent = "环境声：关";
      return;
    }
    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 0.32;
    master.connect(context.destination);
    const room = context.createOscillator();
    const roomGain = context.createGain();
    room.type = "sine";
    room.frequency.value = 72;
    roomGain.gain.value = 0.07;
    room.connect(roomGain);
    roomGain.connect(master);
    const noiseBuffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * 0.18;
    const rain = context.createBufferSource();
    const rainFilter = context.createBiquadFilter();
    const rainGain = context.createGain();
    rain.buffer = noiseBuffer;
    rain.loop = true;
    rainFilter.type = "bandpass";
    rainFilter.frequency.value = 1200;
    rainFilter.Q.value = 0.7;
    rainGain.gain.value = 0.14;
    rain.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(master);
    const air = context.createOscillator();
    const airGain = context.createGain();
    air.type = "triangle";
    air.frequency.value = 145;
    airGain.gain.value = 0.028;
    air.connect(airGain);
    airGain.connect(master);
    room.start();
    rain.start();
    air.start();
    state.audio = {
      context,
      master,
      stop() {
        [room, rain, air].forEach((node) => {
          try {
            node.stop();
          } catch {}
        });
        context.close();
      }
    };
    button.textContent = "环境声：开";
  });
}

function playSoftCue() {
  if (!state.audio) return;
  const { context, master } = state.audio;
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(196, context.currentTime);
  osc.frequency.exponentialRampToValueAtTime(110, context.currentTime + 0.42);
  gain.gain.setValueAtTime(0.001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.55);
  osc.connect(gain);
  gain.connect(master);
  osc.start();
  osc.stop(context.currentTime + 0.6);
}

function playResolve() {
  if (!state.audio) return;
  const { context, master } = state.audio;
  [196, 247, 294].forEach((freq, index) => {
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.001, context.currentTime + index * 0.11);
    gain.gain.exponentialRampToValueAtTime(0.065, context.currentTime + 0.08 + index * 0.11);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.78 + index * 0.11);
    osc.connect(gain);
    gain.connect(master);
    osc.start(context.currentTime + index * 0.11);
    osc.stop(context.currentTime + 0.9 + index * 0.11);
  });
}

document.querySelector("#startGame").addEventListener("click", () => {
  refs.startScreen.classList.add("hidden");
});
document.querySelectorAll("[data-panel]").forEach((button) => {
  button.addEventListener("click", () => openPanel(button.dataset.panel));
});
document.querySelector("#closePanel").addEventListener("click", closePanel);
refs.prevChapter.addEventListener("click", () => jumpToStage(state.stage - 1));
refs.nextChapter.addEventListener("click", () => jumpToStage(state.stage + 1));
refs.panelOverlay.addEventListener("click", (event) => {
  if (event.target === refs.panelOverlay) closePanel();
});
setupAudio();
renderStage();
