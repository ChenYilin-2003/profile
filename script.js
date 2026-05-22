const state = {
  lang: localStorage.getItem("portfolio-language") || "zh",
  activeFacet: 0,
};

const media = {
  science:
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=84",
  boardroom:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=84",
  market:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=84",
  communication:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=84",
  stage:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=84",
  fitness:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=84",
  music:
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=84",
  product:
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1400&q=84",
  travel:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=84",
  ai:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=84",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
};

const copy = {
  zh: {
    nav: {
      home: "主页",
      about: "全面探索",
      portfolio: "作品集",
      contact: "联系我",
      ask: "来问我(AI)",
    },
    hero: {
      eyebrow: "AI × Science × Storytelling",
      title: "连接科学、商业与传播的跨界创作者：用 AI 探索未来，用故事链接世界。",
      subtitle: "从实验室、董事会议室到舞台聚光灯，把复杂问题翻译成动人的行动。",
      ctaPrimary: "进入全面探索",
      ctaSecondary: "问问 AI 分身",
      scroll: "向下探索",
      marquee: [
        "NUS生物技术全奖硕士，也能在聚光灯下拿捏双语主持 🧬",
        "能办500+人的全校晚会，也能为了热爱一个月狂减20斤 🔥",
        "在辉瑞助力高管拿下MoU，也在蒙牛搞定0预算KOL 💼",
        "用AI提效科研实验，也用AI写歌上架网易云 🎧",
        "雅思总分7.5，口语8.5，用双语把复杂故事讲清楚 🌍",
      ],
    },
    about: {
      eyebrow: "Full exploration",
      title: "全面探索",
      description: "从科研实验、市场运营、商业沟通到多维兴趣，把逸霖的经历拆成四个可以深入进入的界面。",
      open: "进入界面",
      imageHint: "点击进入后可替换为真实项目图片",
      facets: [
        {
          icon: "🧪",
          kicker: "Research Lab",
          title: "科研实验",
          short: "实验、数据与AI提效",
          image: media.science,
          imageCaption: "科研实验照片位：可替换为实验室、样本、仪器或研究现场",
          body: "NUS生物技术硕士/浸会食品科学一级荣誉；5年实验室经验；自学机器学习并融入感官课题；利用AI优化研究所记录。",
          detailTitle: "科研实验：把严谨训练变成可复用的研究系统",
          detailIntro:
            "这一页适合放实验室高清照片、科研项目截图、论文/海报或AI记录工作流。重点呈现她如何把实验能力、数据意识和AI工具组合起来。",
          detailBullets: [
            "NUS生物技术全奖硕士与浸会食品科学一级荣誉背景，具备扎实科研训练。",
            "5年实验室经验，覆盖实验设计、样本处理、感官研究与研究记录。",
            "自学机器学习，将AI用于实验记录整理、文献提效和感官课题分析。",
          ],
          stats: [
            ["5年", "湿实验、感官科学与数据记录经验"],
            ["NUS", "生物技术全奖硕士训练"],
            ["AI", "把机器学习嵌入科研流程"],
          ],
        },
        {
          icon: "📈",
          kicker: "Market Growth",
          title: "市场运营",
          short: "品牌、内容与增长",
          image: media.market,
          imageCaption: "市场运营照片位：可替换为品牌活动、社媒内容、KOL合作截图",
          body: "在蒙牛品牌营销中参与内容策划与零费用KOL合作操盘，把有限资源转化为可传播的品牌触点。",
          detailTitle: "市场运营：在资源有限时做出可传播的增长动作",
          detailIntro:
            "这一页适合放品牌活动图、Campaign视觉、社媒数据截图、KOL合作内容。重点呈现她如何从用户、内容和渠道拆解增长。",
          detailBullets: [
            "参与蒙牛品牌营销项目，理解快消品牌的内容节奏与传播链路。",
            "推动零费用KOL合作，用资源整合和沟通策略换取真实内容产出。",
            "能把品牌调性、用户兴趣和平台语言翻译成可执行运营动作。",
          ],
          stats: [
            ["0预算", "撬动KOL内容合作"],
            ["内容", "从选题到触点的运营思维"],
            ["品牌", "快消语境下的传播执行"],
          ],
        },
        {
          icon: "🤝",
          kicker: "Business Communication",
          title: "商业沟通",
          short: "政策、合作与表达",
          image: media.communication,
          imageCaption: "商业沟通照片位：可替换为会议、采访、主持或商务活动照片",
          body: "辉瑞中国大湾区医药政策调研与MoU协助；广东经视全英出镜采编与双语主持经历，让复杂信息更容易被关键对象理解。",
          detailTitle: "商业沟通：把复杂议题翻译成让人愿意行动的语言",
          detailIntro:
            "这一页适合放商务会议、主持现场、采访截图或合作材料视觉。重点呈现她在政策、商业与公众表达之间的转译能力。",
          detailBullets: [
            "在辉瑞中国参与大湾区医药政策调研，协助高管推进MoU相关材料。",
            "广东经视全英出镜采编经验，具备镜头表达与双语信息组织能力。",
            "曾统筹50+人协会并策划500人规模主持人大赛，兼具组织和现场沟通能力。",
          ],
          stats: [
            ["MoU", "协助高管推进关键合作材料"],
            ["全英", "电视出镜采编与双语表达"],
            ["500人", "大型活动策划与现场沟通"],
          ],
        },
        {
          icon: "✨",
          kicker: "Multiverse Interests",
          title: "多维兴趣",
          short: "运动、音乐与体验力",
          image: media.fitness,
          imageCaption: "多维兴趣照片位：可替换为运动、音乐、旅行或生活方式照片",
          body: "皮划艇、月减20斤的健身狂人、创立全国第一线上唱歌社团、网易云AI音乐人，用真实体验持续拓宽创作边界。",
          detailTitle: "多维兴趣：把热爱变成可持续的自我迭代",
          detailIntro:
            "这一页适合放运动大片、AI音乐封面、社团活动图或生活方式照片。重点呈现她不设限的体验力和内容创造力。",
          detailBullets: [
            "为了热爱一个月减掉20斤，体现强目标拆解和执行能力。",
            "创立全国第一线上唱歌社团，探索兴趣社群的线上组织方式。",
            "以AI音乐人身份上架网易云，用技术参与音乐与内容创作。",
          ],
          stats: [
            ["20斤", "一个月极限健身蜕变"],
            ["全国第一", "线上唱歌社团创立者"],
            ["网易云", "AI音乐人作品上架"],
          ],
        },
      ],
    },
    portfolio: {
      eyebrow: "Selected work",
      title: "作品集与多媒体",
      description: "精选四类最适合展示图片和视频的作品模块：学术海报、短视频制作、产品研发、健身旅游。",
      typeImage: "Image Story",
      typeVideo: "Video Slot",
      open: "点击预览",
      items: [
        {
          type: "Academic Poster",
          title: "学术海报",
          caption: "预留高清海报与研究展示位，可放论文海报、会议展示、实验图表或项目摘要。",
          image: media.science,
        },
        {
          type: "Video Production",
          title: "短视频制作",
          caption: "预留短视频播放组件位，适合放主持剪辑、采访片段、品牌短片或Vlog成片。",
          image: media.stage,
          video: media.video,
        },
        {
          type: "Product R&D",
          title: "产品研发",
          caption: "展示从用户洞察、配方/原型、测试反馈到产品叙事的研发过程与成果。",
          image: media.product,
        },
        {
          type: "Fitness & Travel",
          title: "健身旅游",
          caption: "把健身蜕变、户外体验和旅行影像放在一起，呈现自律、审美与生命力。",
          image: media.travel,
        },
      ],
    },
    ask: {
      eyebrow: "Ask Yilin AI",
      title: "来问我",
      description: "一个预留真实 LLM API 接口的个人 AI 智能体雏形，目前以硬编码人格化问答呈现。",
      terminalTitle: "Yilin_AI / live terminal",
      status: "在线",
      placeholder: "试试：她最跨界的经历是什么？",
      send: "发送",
      welcome:
        "你好！我是逸霖的 AI 分身，我了解她的实验室数据、辉瑞公关经历、以及她是怎么一个月减掉20斤的。你可以直接问我关于她的任何事。",
      fallback:
        "这个问题很适合继续深聊。简短版：逸霖的优势是把科学训练、商业敏感和表达能力放在同一个系统里，用 AI 提效，也用故事把人连接起来。",
      answers: {
        lab: "她有5年实验室经验，NUS生物技术全奖硕士背景，也会把机器学习和AI工具放进科研记录、感官课题与实验流程里。",
        pfizer:
          "在辉瑞中国，她参与大湾区医药政策调研，并协助高管推进MoU相关材料；她擅长把政策语境翻译成商业可用的信息。",
        fitness:
          "她为了热爱曾一个月减掉20斤。这个故事背后不是单纯的狠，而是目标拆解、节奏管理和强执行力。",
        host: "她做过广东经视全英出镜采编，也曾任播音协会社长，统筹50+人团队策划500人规模主持人大赛。",
        ai: "她把AI当成跨界杠杆：既用于科研记录和实验提效，也用于音乐创作、内容生成与个人知识库的表达。",
      },
    },
    contact: {
      eyebrow: "Let us connect",
      title: "让科学、商业和故事在同一张桌上发生。",
      description: "欢迎聊合作、主持、科研传播、品牌项目，或任何值得跨界解决的复杂问题。",
      ask: "先问 AI 分身",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "Explore",
      portfolio: "Portfolio",
      contact: "Contact",
      ask: "Ask Me (AI)",
    },
    hero: {
      eyebrow: "AI × Science × Storytelling",
      title: "A cross-disciplinary creator connecting science, business, and communication.",
      subtitle: "Exploring the future with AI, and turning complex worlds into stories people can feel.",
      ctaPrimary: "Start exploring",
      ctaSecondary: "Ask my AI twin",
      scroll: "Scroll",
      marquee: [
        "A fully funded NUS biotech master who can own a bilingual stage 🧬",
        "She can run a 500+ campus gala and cut 20 jin in a month for what she loves 🔥",
        "From helping Pfizer executives land an MoU to unlocking zero-budget KOLs at Mengniu 💼",
        "Using AI to accelerate research experiments, then writing AI songs for NetEase Cloud Music 🎧",
        "IELTS 7.5 overall, 8.5 speaking — making complex stories land bilingually 🌍",
      ],
    },
    about: {
      eyebrow: "Full exploration",
      title: "Full exploration",
      description:
        "Research lab, market operations, business communication, and multidimensional interests become four image-ready interfaces you can enter one by one.",
      open: "Enter interface",
      imageHint: "Replace this with a real project image later",
      facets: [
        {
          icon: "🧪",
          kicker: "Research Lab",
          title: "Research Lab",
          short: "Experiments, data, and AI leverage",
          image: media.science,
          imageCaption: "Research image slot: lab, samples, instruments, or fieldwork",
          body: "NUS biotechnology master with a full scholarship and first-class food science training at HKBU; five years of lab experience; self-taught machine learning applied to sensory research and AI-enhanced institute records.",
          detailTitle: "Research Lab: turning rigorous training into reusable research systems",
          detailIntro:
            "Use this page for lab photography, research screenshots, posters, papers, or AI-powered record workflows. It shows how she combines experimentation, data awareness, and AI tools.",
          detailBullets: [
            "Fully funded NUS biotechnology master's training and first-class food science foundation at HKBU.",
            "Five years of lab work across experimental design, sample handling, sensory research, and records.",
            "Self-taught machine learning applied to research documentation, literature efficiency, and sensory analysis.",
          ],
          stats: [
            ["5 yrs", "Wet lab, sensory science, and research records"],
            ["NUS", "Full-scholarship biotechnology training"],
            ["AI", "Machine learning woven into research workflows"],
          ],
        },
        {
          icon: "📈",
          kicker: "Market Growth",
          title: "Market Operations",
          short: "Brand, content, and growth",
          image: media.market,
          imageCaption: "Market image slot: brand events, social content, or KOL collaboration screenshots",
          body: "In Mengniu brand marketing, she worked on content planning and zero-budget KOL collaboration, turning limited resources into visible brand touchpoints.",
          detailTitle: "Market Operations: building spreadable growth with limited resources",
          detailIntro:
            "Use this page for campaign visuals, brand activity photos, social data screenshots, or KOL content. It highlights how she breaks growth down through users, content, and channels.",
          detailBullets: [
            "Participated in Mengniu brand marketing projects and learned the rhythm of FMCG communication.",
            "Activated zero-budget KOL cooperation through resource integration and thoughtful outreach.",
            "Translates brand tone, user interest, and platform language into concrete operating moves.",
          ],
          stats: [
            ["0 budget", "KOL partnership activation"],
            ["Content", "Operational thinking from topic to touchpoint"],
            ["Brand", "Execution in FMCG communication contexts"],
          ],
        },
        {
          icon: "🤝",
          kicker: "Business Communication",
          title: "Business Communication",
          short: "Policy, partnership, and presence",
          image: media.communication,
          imageCaption: "Communication image slot: meetings, interviews, hosting, or business events",
          body: "Supported Pfizer China Greater Bay Area healthcare policy research and MoU materials; English TV reporting and bilingual hosting sharpened her ability to make complex information land.",
          detailTitle: "Business Communication: translating complexity into language that moves people",
          detailIntro:
            "Use this page for meeting photos, hosting shots, interview stills, or collaboration material visuals. It shows her translation ability across policy, business, and public expression.",
          detailBullets: [
            "Worked on Pfizer China Greater Bay Area healthcare policy research and MoU-related executive materials.",
            "Appeared on Guangdong Economic TV as an English reporter/editor with bilingual information design skills.",
            "Led a 50+ member association and planned a 500-person hosting contest, combining organization and live communication.",
          ],
          stats: [
            ["MoU", "Executive-level collaboration support"],
            ["English", "On-camera reporting and bilingual presence"],
            ["500", "Large-scale event planning and communication"],
          ],
        },
        {
          icon: "✨",
          kicker: "Multiverse Interests",
          title: "Multidimensional Interests",
          short: "Sports, music, and lived experience",
          image: media.fitness,
          imageCaption: "Interest image slot: sports, music, travel, or lifestyle photography",
          body: "Kayaking, a one-month 20-jin fitness transformation, founder of the first nationwide online singing club, and NetEase Cloud AI musician.",
          detailTitle: "Multidimensional Interests: turning passion into continuous self-iteration",
          detailIntro:
            "Use this page for sports portraits, AI music covers, community photos, or lifestyle images. It presents her boundary-free energy and creative range.",
          detailBullets: [
            "Lost 20 jin in one month for something she loved, showing goal breakdown and execution.",
            "Founded the first nationwide online singing club, exploring online community organization.",
            "Released AI music on NetEase Cloud, using technology as part of music and content creation.",
          ],
          stats: [
            ["20 jin", "One-month fitness transformation"],
            ["First", "Nationwide online singing club founder"],
            ["Music", "AI musician on NetEase Cloud"],
          ],
        },
      ],
    },
    portfolio: {
      eyebrow: "Selected work",
      title: "Portfolio and media",
      description:
        "Four focused modules for image and video storytelling: academic posters, short-video production, product R&D, and fitness travel.",
      typeImage: "Image Story",
      typeVideo: "Video Slot",
      open: "Open preview",
      items: [
        {
          type: "Academic Poster",
          title: "Academic Poster",
          caption: "A high-resolution slot for research posters, conference displays, experimental charts, or project abstracts.",
          image: media.science,
        },
        {
          type: "Video Production",
          title: "Short-video Production",
          caption: "A reserved video module for hosting reels, interview cuts, brand shorts, or finished vlog edits.",
          image: media.stage,
          video: media.video,
        },
        {
          type: "Product R&D",
          title: "Product R&D",
          caption:
            "Show the process from user insight, formula or prototype, testing feedback, to product storytelling.",
          image: media.product,
        },
        {
          type: "Fitness & Travel",
          title: "Fitness Travel",
          caption:
            "Fitness transformation, outdoor experience, and travel imagery come together as discipline, taste, and vitality.",
          image: media.travel,
        },
      ],
    },
    ask: {
      eyebrow: "Ask Yilin AI",
      title: "Ask me",
      description:
        "A personal AI agent prototype with a reserved LLM API hook. For now, it delivers a handcrafted conversational experience.",
      terminalTitle: "Yilin_AI / live terminal",
      status: "online",
      placeholder: "Try: what is her most cross-disciplinary story?",
      send: "Send",
      welcome:
        "Hi! I am Yilin's AI twin. I know her lab data habits, Pfizer public-affairs experience, and how she lost 20 jin in one month. Ask me anything about her.",
      fallback:
        "Great question. Short version: Yilin's edge is putting scientific discipline, business intuition, and stage-ready communication into one system, using AI for leverage and stories for connection.",
      answers: {
        lab: "She has five years of lab experience, a fully funded NUS biotechnology master's background, and a habit of bringing machine learning and AI tools into research records, sensory projects, and experimental workflows.",
        pfizer:
          "At Pfizer China, she worked on Greater Bay Area healthcare policy research and helped prepare MoU-related executive materials, translating policy context into business-ready insight.",
        fitness:
          "She once lost 20 jin in one month for something she loved. The real story is goal breakdown, rhythm management, and fierce execution.",
        host: "She has appeared on Guangdong Economic TV as an English reporter/editor and led a 50+ member broadcasting association to build a 500-person hosting competition.",
        ai: "She treats AI as cross-disciplinary leverage: research records, experiment efficiency, music creation, content generation, and personal knowledge expression.",
      },
    },
    contact: {
      eyebrow: "Let us connect",
      title: "Let science, business, and story happen at the same table.",
      description:
        "Open to collaborations, hosting, science communication, brand projects, and any complex problem worth solving across boundaries.",
      ask: "Ask the AI twin first",
    },
  },
};

const selectors = {
  header: document.querySelector("[data-header]"),
  navToggle: document.querySelector(".nav-toggle"),
  nav: document.querySelector(".site-nav"),
  langToggle: document.querySelector("[data-lang-toggle]"),
  marquee: document.querySelector("[data-marquee]"),
  facetTabs: document.querySelector("[data-facet-tabs]"),
  facetPanel: document.querySelector("[data-facet-panel]"),
  portfolioGrid: document.querySelector("[data-portfolio-grid]"),
  chatLog: document.querySelector("[data-chat-log]"),
  chatForm: document.querySelector("[data-chat-form]"),
  chatInput: document.querySelector("[data-chat-input]"),
  lightbox: document.querySelector("[data-lightbox]"),
  exploreDetail: document.querySelector("[data-explore-detail]"),
};

const t = (path) => path.split(".").reduce((acc, key) => acc?.[key], copy[state.lang]);

function applyLanguage(nextLang = state.lang) {
  state.lang = nextLang;
  localStorage.setItem("portfolio-language", state.lang);
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.body.classList.add("is-translating");

  window.setTimeout(() => {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-lang-option]").forEach((node) => {
      node.classList.toggle("is-active", node.dataset.langOption === state.lang);
    });

    renderMarquee();
    renderFacets();
    renderPortfolio();
    resetChat();
    if (selectors.exploreDetail.classList.contains("is-open")) {
      renderExploreDetail(state.activeFacet);
    }

    window.setTimeout(() => document.body.classList.remove("is-translating"), 80);
  }, 180);
}

function renderMarquee() {
  const items = t("hero.marquee");
  const loop = [...items, ...items];
  selectors.marquee.innerHTML = loop
    .map((item) => `<a class="marquee-item" href="#about" role="listitem">${item}</a>`)
    .join("");
}

function renderFacets() {
  const facets = t("about.facets");

  selectors.facetTabs.innerHTML = facets
    .map(
      (facet, index) => `
        <button
          class="facet-tab ${index === state.activeFacet ? "is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${index === state.activeFacet}"
          data-facet-index="${index}"
        >
          <span class="tab-icon">${facet.icon}</span>
          <span>
            <strong>${facet.title}</strong>
            <span>${facet.short}</span>
          </span>
        </button>
      `,
    )
    .join("");

  renderFacetPanel(state.activeFacet);
}

function renderFacetPanel(index) {
  const facets = t("about.facets");
  const facet = facets[index];
  state.activeFacet = index;

  selectors.facetPanel.classList.add("is-changing");

  window.setTimeout(() => {
    const image = selectors.facetPanel.querySelector("[data-facet-image]");
    selectors.facetPanel.querySelector("[data-facet-icon]").textContent = facet.icon;
    selectors.facetPanel.querySelector("[data-facet-kicker]").textContent = facet.kicker;
    selectors.facetPanel.querySelector("[data-facet-title]").textContent = facet.title;
    selectors.facetPanel.querySelector("[data-facet-body]").textContent = facet.body;
    selectors.facetPanel.querySelector("[data-facet-open]").textContent = t("about.open");
    selectors.facetPanel.querySelector("[data-facet-caption]").textContent = facet.imageCaption || t("about.imageHint");
    image.src = facet.image;
    image.alt = facet.title;
    selectors.facetPanel.querySelector("[data-facet-stats]").innerHTML = facet.stats
      .map(([value, label]) => `<li><strong>${value}</strong><span>${label}</span></li>`)
      .join("");

    selectors.facetTabs.querySelectorAll(".facet-tab").forEach((tab) => {
      const isActive = Number(tab.dataset.facetIndex) === index;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    selectors.facetPanel.classList.remove("is-changing");
  }, 180);
}

function renderExploreDetail(index) {
  const facet = t("about.facets")[index];
  const image = selectors.exploreDetail.querySelector("[data-explore-image]");
  image.src = facet.image;
  image.alt = facet.title;
  selectors.exploreDetail.querySelector("[data-explore-kicker]").textContent = facet.kicker;
  selectors.exploreDetail.querySelector("[data-explore-title]").textContent = facet.detailTitle || facet.title;
  selectors.exploreDetail.querySelector("[data-explore-intro]").textContent = facet.detailIntro || facet.body;
  selectors.exploreDetail.querySelector("[data-explore-bullets]").innerHTML = facet.detailBullets
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function openExploreDetail(index = state.activeFacet) {
  renderExploreDetail(index);
  selectors.exploreDetail.classList.add("is-open");
  selectors.exploreDetail.setAttribute("aria-hidden", "false");
}

function closeExploreDetail() {
  selectors.exploreDetail.classList.remove("is-open");
  selectors.exploreDetail.setAttribute("aria-hidden", "true");
}

function renderPortfolio() {
  selectors.portfolioGrid.innerHTML = t("portfolio.items")
    .map(
      (item, index) => `
        <button class="portfolio-card" type="button" data-portfolio-index="${index}" aria-label="${t("portfolio.open")}: ${item.title}">
          <img src="${item.image}" alt="" loading="lazy" />
          <div class="portfolio-copy">
            <span class="portfolio-type">${item.type}</span>
            <h3>${item.title}</h3>
            <p>${item.caption}</p>
          </div>
        </button>
      `,
    )
    .join("");
}

function openLightbox(index) {
  const item = t("portfolio.items")[index];
  const lightbox = selectors.lightbox;
  const image = lightbox.querySelector("[data-lightbox-image]");
  const video = lightbox.querySelector("[data-lightbox-video]");

  image.src = item.image;
  image.alt = item.title;
  video.pause();
  video.removeAttribute("src");
  lightbox.classList.toggle("is-video", Boolean(item.video));

  if (item.video) {
    video.src = item.video;
    video.poster = item.image;
  }

  lightbox.querySelector("[data-lightbox-type]").textContent = item.type;
  lightbox.querySelector("[data-lightbox-title]").textContent = item.title;
  lightbox.querySelector("[data-lightbox-caption]").textContent = item.caption;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const video = selectors.lightbox.querySelector("[data-lightbox-video]");
  video.pause();
  selectors.lightbox.classList.remove("is-open", "is-video");
  selectors.lightbox.setAttribute("aria-hidden", "true");
}

function appendMessage(text, role = "ai") {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.textContent = text;
  selectors.chatLog.append(message);
  selectors.chatLog.scrollTop = selectors.chatLog.scrollHeight;
  return message;
}

function appendTyping() {
  const typing = document.createElement("div");
  typing.className = "message ai typing";
  typing.setAttribute("aria-label", "AI is typing");
  typing.innerHTML = "<span></span><span></span><span></span>";
  selectors.chatLog.append(typing);
  selectors.chatLog.scrollTop = selectors.chatLog.scrollHeight;
  return typing;
}

function resetChat() {
  selectors.chatLog.innerHTML = "";
  appendMessage(t("ask.welcome"));
}

async function getAiResponse(question) {
  // Future LLM integration can replace this local matcher:
  // return fetch("/api/yilin-agent", { method: "POST", body: JSON.stringify({ question, lang: state.lang }) });
  const normalized = question.toLowerCase();
  const answers = t("ask.answers");

  if (/lab|research|science|实验|科研|生物|机器学习|数据/.test(normalized)) return answers.lab;
  if (/pfizer|mou|policy|business|辉瑞|政策|商业|蒙牛|kol/.test(normalized)) return answers.pfizer;
  if (/fitness|weight|20|减|健身|瘦/.test(normalized)) return answers.fitness;
  if (/host|stage|tv|主持|聚光灯|电视|出镜|播音/.test(normalized)) return answers.host;
  if (/ai|music|song|网易云|音乐|智能/.test(normalized)) return answers.ai;
  return t("ask.fallback");
}

async function handleChatSubmit(event) {
  event.preventDefault();
  const question = selectors.chatInput.value.trim();
  if (!question) return;

  selectors.chatInput.value = "";
  appendMessage(question, "user");
  const typing = appendTyping();

  window.setTimeout(async () => {
    const answer = await getAiResponse(question);
    typing.remove();
    appendMessage(answer);
  }, 520);
}

function bindEvents() {
  selectors.langToggle.addEventListener("click", () => {
    applyLanguage(state.lang === "zh" ? "en" : "zh");
  });

  selectors.navToggle.addEventListener("click", () => {
    const isOpen = selectors.nav.classList.toggle("is-open");
    selectors.navToggle.classList.toggle("is-open", isOpen);
    selectors.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  selectors.nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      selectors.nav.classList.remove("is-open");
      selectors.navToggle.classList.remove("is-open");
      selectors.navToggle.setAttribute("aria-expanded", "false");
    }
  });

  selectors.facetTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-facet-index]");
    if (!tab) return;
    renderFacetPanel(Number(tab.dataset.facetIndex));
  });

  selectors.facetPanel.addEventListener("click", (event) => {
    if (event.target.closest("[data-facet-open]")) openExploreDetail(state.activeFacet);
  });

  selectors.exploreDetail.addEventListener("click", (event) => {
    if (event.target.matches("[data-explore-detail], [data-explore-close]")) closeExploreDetail();
  });

  selectors.portfolioGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-portfolio-index]");
    if (!card) return;
    openLightbox(Number(card.dataset.portfolioIndex));
  });

  selectors.lightbox.addEventListener("click", (event) => {
    if (event.target.matches("[data-lightbox], [data-lightbox-close]")) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      closeExploreDetail();
    }
  });

  selectors.chatForm.addEventListener("submit", handleChatSubmit);

  window.addEventListener("scroll", () => {
    selectors.header.classList.toggle("is-scrolled", window.scrollY > 20);
  });
}

function observeSections() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  bindEvents();
  observeSections();
  applyLanguage(state.lang);
}

document.addEventListener("DOMContentLoaded", init);
