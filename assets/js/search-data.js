// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects and engineering work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-dr-yaohang-li-s-research-group-to-work-on-ai-for-science-focusing-on-symbolic-regression-for-scientific-discovery",
          title: 'Joined Dr. Yaohang Li’s research group to work on AI for Science, focusing...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-ieee-milcom-2025-contrastive-multi-hop-semantic-communication-presented-in-los-angeles-ca",
          title: 'Paper accepted at IEEE MILCOM 2025: “Contrastive Multi-Hop Semantic Communication” presented in Los...',
          description: "",
          section: "News",},{id: "news-abstract-accepted-at-ai4eic-2026-generalized-parton-distributions-from-physics-constrained-symbolic-regression-ai-ml-for-data-analysis-and-theory-track",
          title: 'Abstract accepted at AI4EIC 2026: “Generalized Parton Distributions from Physics-Constrained Symbolic Regression” (AI/ML...',
          description: "",
          section: "News",},{id: "projects-femtomind-agentic-ai-for-global-qcd-analysis",
          title: 'FemtoMind — Agentic AI for Global QCD Analysis',
          description: "An LLM multi-agent system and MCP server that run multi-step global QCD analyses on HPC clusters end to end (DOE Genesis Mission).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_femtomind/";
            },},{id: "projects-t3-ciders-cyberinfrastructure-curriculum-development",
          title: 'T3-CIDERS Cyberinfrastructure Curriculum Development',
          description: "Developing instructional modules integrating cyberinfrastructure and data-enabled research in cybersecurity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_t3ciders/";
            },},{id: "projects-efficiency-and-effectiveness-exploration-of-bitnet",
          title: 'Efficiency and Effectiveness Exploration of BitNet',
          description: "Benchmarking BitNet, a compact large language model, across heterogeneous hardware platforms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_bitnet/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%75%30%33%34@%6F%64%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Chunyu-Hugh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chunyu-hu-249970a7", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F6LakZwAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
