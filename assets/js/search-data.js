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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
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
          section: "News",},{id: "news-serving-as-a-reviewer-for-the-international-conference-on-networking-and-computing-icnc-2026",
          title: 'Serving as a Reviewer for the International Conference on Networking and Computing (ICNC)...',
          description: "",
          section: "News",},{id: "news-served-as-a-computer-science-judge-at-the-tidewater-science-and-engineering-fair-tsef-2026",
          title: 'Served as a Computer Science Judge at the Tidewater Science and Engineering Fair...',
          description: "",
          section: "News",},{id: "projects-symbolic-regression-for-ai-driven-scientific-discovery",
          title: 'Symbolic Regression for AI-Driven Scientific Discovery',
          description: "Building AI-for-Science workflows using symbolic regression to support interpretable scientific discovery and experiment analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_symbolic_regression/";
            },},{id: "projects-security-and-robustness-of-efficient-ai-models",
          title: 'Security and Robustness of Efficient AI Models',
          description: "Studying bit-flip and backdoor attacks on efficient neural networks and long-tail dataset robustness.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_adversarial_ml/";
            },},{id: "projects-t3-ciders-cyberinfrastructure-curriculum-development",
          title: 'T3-CIDERS Cyberinfrastructure Curriculum Development',
          description: "Developing instructional modules integrating cyberinfrastructure and data-enabled research in cybersecurity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_t3ciders/";
            },},{id: "projects-power-data-collection-systems-engineering",
          title: 'Power Data Collection Systems Engineering',
          description: "Linux- and Qt-based electric energy collection clients with multi-protocol communication and automated reporting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_power_data/";
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
