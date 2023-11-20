const CONFIG = {
  // profile setting (required)
  profile: {
    name: "박석희",
    image: "/stone-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "Develop for those in need.",
    email: "kiit0901@gmail.com",
    linkedin: "석희-박-5bb79a270",
    github: "stoneHee99",
    instagram: "stone__ed",
  },
  projects: [
    {
      name: `Teach Me`,
      href: "https://teach-me.live/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "stoneHee-log",
    description: "welcome to stoneHee-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://stonehee99.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["박석희", "Stonehee99", "Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: "52982918f9324cde9f4206151b31ccba",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: "G-LFFWHJT42E" || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: "eWK8mAZ41g6aN3nnvvZuwzm49SiPyPRVWDzerYWeFxA" || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "stoneHee99/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
