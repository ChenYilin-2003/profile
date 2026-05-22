const state = {
  lang: localStorage.getItem("portfolio-language") || "zh",
  activeFacet: 0,
};

const media = {
  science:
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=84",
  boardroom:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=84",
  stage:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=84",
  fitness:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=84",
  music:
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=84",
  ai:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=84",
  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
};

const copy = {
  zh: {
    nav: {
      home: "主页",
      about: "多维切面",
      portfolio: "作品集",
      contact: "联系我",
      ask: "来问我(AI)",
    },
    hero: {
      eyebrow: "AI × Science × Storytelling",
      title: "连接科学、商业与传播的跨界创作者：用 AI 探索未来，用故事链接世界。",
      subtitle: "从实验室、董事会议室到舞台聚光灯，把复杂问题翻译成动人的行动。",
      ctaPrimary: "展开多维切面",
      ctaSecondary: "问问 AI 分身",
      scroll: "向下探索",
      marquee: [
        "NUS生物技术全奖硕士，也能在聚光灯下拿捏双语主持 🧬",
        "能办500+人的全校晚会，也能为了热爱一个月狂减20斤 🔥",
        "在辉瑞助力高管拿下MoU，也在蒙牛搞定0预算KOL 💼",
        "用AI提效科研实验，也用AI写歌上架网易云 🎧",
      ],
    },
    about: {
      eyebrow: "Four dimensions",
      title: "多维切面",
      description: "她不是单一标签，而是一组可切换的能力坐标：科研、商业、传播与体验力互相增强。",
      facets: [
        {
          icon: "🧪",
          kicker: "AI Maker in Lab",
          title: "实验室里的 AI 创客",
          short: "科研系统力",
          body: "NUS生物技术硕士/浸会食品科学一级荣誉；5年实验室经验；自学机器学习并融入感官课题；利用AI优化研究所记录。",
          stats: [
            ["5年", "湿实验、感官科学与数据记录经验"],
            ["NUS", "生物技术全奖硕士训练"],
            ["AI", "把机器学习嵌入科研流程"],
          ],
        },
        {
          icon: "💼",
          kicker: "Policy × Business",
          title: "懂政策的商业推手",
          short: "策略转化力",
          body: "辉瑞中国大湾区医药政策调研与MoU协助；蒙牛品牌营销与零费用KOL合作操盘，能把复杂利益相关方对齐到一张路线图。",
          stats: [
            ["MoU", "协助高管推进关键合作材料"],
            ["0预算", "撬动KOL内容合作"],
            ["GBA", "医药政策与市场语境洞察"],
          ],
        },
        {
          icon: "🎤",
          kicker: "Stage Connector",
          title: "聚光灯下的连接者",
          short: "表达组织力",
          body: "广东经视全英出镜采编；播音协会社长，统筹50+人团队并策划首届500人规模主持人大赛。",
          stats: [
            ["全英", "电视出镜采编与双语表达"],
            ["50+", "协会组织与团队统筹"],
            ["500人", "首届大型主持人大赛策划"],
          ],
        },
        {
          icon: "🏄‍♀️",
          kicker: "Experience Hunter",
          title: "不设限的体验派",
          short: "自我迭代力",
          body: "皮划艇、月减20斤的健身狂人、创立全国第一线上唱歌社团、网易云AI音乐人，用真实体验持续拓宽创作边界。",
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
      description: "用优雅网格预留照片、短视频与项目故事，适合后续接入真实媒体资源。",
      typeImage: "Image Story",
      typeVideo: "Video Slot",
      open: "点击预览",
      items: [
        {
          type: "Image Story",
          title: "科研实验与 AI 工作流",
          caption: "将机器学习、感官研究与实验室记录系统化，减少重复劳动，释放创造力。",
          image: media.science,
        },
        {
          type: "Image Story",
          title: "辉瑞政策调研与 MoU 协助",
          caption: "把医药政策、城市机会与高管沟通素材压缩成清晰可执行的商业语言。",
          image: media.boardroom,
        },
        {
          type: "Video Slot",
          title: "双语主持与全英出镜",
          caption: "预留短视频播放组件位，可替换为真实主持、采访或舞台剪辑。",
          image: media.stage,
          video: media.video,
        },
        {
          type: "Image Story",
          title: "500+ 人主持人大赛",
          caption: "从招募、内容、舞台到现场节奏，让大型校园活动拥有专业制作质感。",
          image: media.stage,
        },
        {
          type: "Image Story",
          title: "健身与户外体验",
          caption: "把自律、身体叙事和镜头表达结合成真实的个人品牌资产。",
          image: media.fitness,
        },
        {
          type: "Image Story",
          title: "AI 音乐与线上社群",
          caption: "从全国线上唱歌社团到网易云 AI 音乐人，持续实验内容与技术的新连接。",
          image: media.music,
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
      about: "Dimensions",
      portfolio: "Portfolio",
      contact: "Contact",
      ask: "Ask Me (AI)",
    },
    hero: {
      eyebrow: "AI × Science × Storytelling",
      title: "A cross-disciplinary creator connecting science, business, and communication.",
      subtitle: "Exploring the future with AI, and turning complex worlds into stories people can feel.",
      ctaPrimary: "Explore dimensions",
      ctaSecondary: "Ask my AI twin",
      scroll: "Scroll",
      marquee: [
        "A fully funded NUS biotech master who can own a bilingual stage 🧬",
        "She can run a 500+ campus gala and cut 20 jin in a month for what she loves 🔥",
        "From helping Pfizer executives land an MoU to unlocking zero-budget KOLs at Mengniu 💼",
        "Using AI to accelerate research experiments, then writing AI songs for NetEase Cloud Music 🎧",
      ],
    },
    about: {
      eyebrow: "Four dimensions",
      title: "Multidimensional by design",
      description:
        "Not a single label, but a switchboard of strengths: research, business, communication, and lived experience reinforcing one another.",
      facets: [
        {
          icon: "🧪",
          kicker: "AI Maker in Lab",
          title: "The AI maker inside the lab",
          short: "Research systems",
          body: "NUS biotechnology master with a full scholarship and first-class food science training at HKBU; five years of lab experience; self-taught machine learning applied to sensory research and AI-enhanced institute records.",
          stats: [
            ["5 yrs", "Wet lab, sensory science, and research records"],
            ["NUS", "Full-scholarship biotechnology training"],
            ["AI", "Machine learning woven into research workflows"],
          ],
        },
        {
          icon: "💼",
          kicker: "Policy × Business",
          title: "A business driver fluent in policy",
          short: "Strategic translation",
          body: "Supported Pfizer China Greater Bay Area healthcare policy research and MoU materials; led Mengniu brand marketing moves and zero-budget KOL collaborations.",
          stats: [
            ["MoU", "Executive-level collaboration support"],
            ["0 budget", "KOL partnership activation"],
            ["GBA", "Healthcare policy and market insight"],
          ],
        },
        {
          icon: "🎤",
          kicker: "Stage Connector",
          title: "A connector under the spotlight",
          short: "Communication ops",
          body: "On-camera English reporter and editor for Guangdong Economic TV; president of the broadcasting association, leading 50+ members and launching a 500-person hosting competition.",
          stats: [
            ["English", "On-camera reporting and bilingual presence"],
            ["50+", "Association leadership and team operations"],
            ["500", "First large-scale hosting contest"],
          ],
        },
        {
          icon: "🏄‍♀️",
          kicker: "Experience Hunter",
          title: "An experience-first boundary breaker",
          short: "Self iteration",
          body: "Kayaking, a one-month 20-jin fitness transformation, founder of the first nationwide online singing club, and NetEase Cloud AI musician.",
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
        "An elegant media grid for images, video reels, and project stories, ready for real assets whenever you want to swap them in.",
      typeImage: "Image Story",
      typeVideo: "Video Slot",
      open: "Open preview",
      items: [
        {
          type: "Image Story",
          title: "Research experiments and AI workflows",
          caption:
            "Systemizing machine learning, sensory research, and lab records to reduce repetition and unlock creative bandwidth.",
          image: media.science,
        },
        {
          type: "Image Story",
          title: "Pfizer policy research and MoU support",
          caption:
            "Compressing healthcare policy, city opportunities, and executive communication into clear business language.",
          image: media.boardroom,
        },
        {
          type: "Video Slot",
          title: "Bilingual hosting and English reporting",
          caption: "A reserved short-video module for real hosting, interview, or stage footage.",
          image: media.stage,
          video: media.video,
        },
        {
          type: "Image Story",
          title: "500+ person hosting competition",
          caption:
            "From recruitment and content to stage flow, creating a campus event with a professional production feel.",
          image: media.stage,
        },
        {
          type: "Image Story",
          title: "Fitness and outdoor experiences",
          caption: "Turning discipline, body narrative, and camera language into authentic personal brand assets.",
          image: media.fitness,
        },
        {
          type: "Image Story",
          title: "AI music and online community",
          caption:
            "From a nationwide online singing club to NetEase Cloud AI music, constantly testing new links between content and technology.",
          image: media.music,
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
    selectors.facetPanel.querySelector("[data-facet-icon]").textContent = facet.icon;
    selectors.facetPanel.querySelector("[data-facet-kicker]").textContent = facet.kicker;
    selectors.facetPanel.querySelector("[data-facet-title]").textContent = facet.title;
    selectors.facetPanel.querySelector("[data-facet-body]").textContent = facet.body;
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

  selectors.portfolioGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-portfolio-index]");
    if (!card) return;
    openLightbox(Number(card.dataset.portfolioIndex));
  });

  selectors.lightbox.addEventListener("click", (event) => {
    if (event.target.matches("[data-lightbox], [data-lightbox-close]")) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
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
