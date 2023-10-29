export const METADATA = {
  author: "Tsumugii",
  title: "Portfolio | Tsumugii",
  description:
    "Tsumugii is a Student from Shanghai, interested in gaming and cutting-edge technologies",
  siteUrl: "https://www.tsumugii.com/",
  twitterHandle: "@xiaojiang05",
  keywords: [
    "Tsumugii",
    "Game Developer",
    "Game Player",
    "Full Stack",
    "Artificial Intelligence",
    "Software Development",
    "Computer Science",
    "Large Language Model",
    "Portfolio",
    "Folio",
  ].join(", "),
  image:
    "https://cdn.jsdelivr.net/gh/Tsumugii24/Typora-images@main/images/2023%2F10%2F29%2F046188a707461f051882ecbeb2cc0e9a-image-20231029232319571-4c53ae.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Experience",
    ref: "experience",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Junior Student majors in Information Engineering",
  "I am thrilled with the application and development of updating technologies",
  "I hold the opinion that coding can better our life",
  "I want to make games that would be appreciated and enjoyed by everyone"
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: jsf002016@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/%E8%88%92%E5%87%A1-%E5%A7%9C-096683292/",
  },
  {
    name: "github",
    url: "https://github.com/Tsumugii24",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/Tsumugii24/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/xiaojiang05",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "python",
    "java",
    // "csharp",
    "html",
    "css",
    "javascript",
    "typescript",
    // "sass",
    // "cpp",
    "nodejs",
    "webpack",
    "vite",
    // "firebase",
    // "moralis",
    // "stripe",
    // "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "pytorch",
    "react",
    "hadoop",
    "redux",
    "nextjs",
    "tailwindcss",
    // "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "redis", "hive", "mongodb"],
  other: ["git", "unity_white", "docker"],
};

export const PROJECTS = [
  {
    name: "PoetryChat",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "A multimodal interactive software based on LLMs🤗",
    gradient: ["#3737da", "rgba(47,124,203,0.95)"],
    url: "https://github.com/Tsumugii24/PoetryChat",
    tech: ["python", "pytorch", "mapbox", "docker"],
  },
  {
    name: "3Dify",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Exploration on virtual portrait generation technology for the Metaverse🤩",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/Tsumugii24/PIFu-multiview",
    tech: ["typescript", "react", "vue", "mysql"],
  },
  {
    name: "WasteSavvy",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Design of Situational Adaptation Classification System Based on Deep Learning Framework😊",
    gradient: ["#296600", "#66ff8a"],
    url: "https://www.tsumugii.com/",
    tech: ["java", "chakra-ui", "redux", "pytorch"],
  },
  {
    name: "Haunted Castle",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Unity-based third-person platformer😆",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Tsumugii24/Haunted-Castle",
    tech: ["csharp", "unity"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Meituan",
    title: "Software Development Intern",
    location: "Shanghai, China",
    range: "July 2023 - August 2023",
    responsibilities: [
      "Works in Intelligence & Communication Technology Center/Online Intelligent Customer Service Group",
      "Participate in the development, maintenance and cutting-edge exploration of the intelligent solution and hosting robot part of the toC link of the Meituan app intelligent customer service module.",
    ],
    url: "https://zhaopin.meituan.com/web/campus",
    video: "/work/meituan.mp4",
  },
  {
    id: 2,
    company: "Bilibili",
    title: "Development Intern",
    location: "Shanghai, China",
    range: "August 2023 - October 2023",
    responsibilities: [
      "Works in Enterprise Efficiency Department/Personnel Industry Research Group",
      "Participate in the research and application of the job matching algorithm to improve the utilization rate of the talent pool and the efficiency of the recruitment process.",
      "Successfully figured out an algorithm that use the existing DB to establish a Person-Job Fit model.",
    ],
    url: "https://jobs.bilibili.com/",
    video: "/work/bilibili.mp4",
  },
  {
    id: 3,
    company: "undetermined",
    title: "undetermined",
    location: "China",
    range: "Current - Someday",
    responsibilities: [
      "I would be very happy if i could have the opportunity of working in a game company like Ubisoft.",
      "Develop astonishing Games.",
      "Gain developing experience and connections.",
    ],
    url: "https://zh-cn.ubisoft.com/",
    video: "/work/mirage.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
