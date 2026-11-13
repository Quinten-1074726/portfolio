// Skills shown on the home page (and later on /about).
//
// level: 3 = Proficient, 2 = Comfortable, 1 = Familiar, null = not set yet (shows "TODO")
// icon:  a Simple Icons icon (https://simpleicons.org), or null to show `initials` instead
//        (some brands, like OpenAI, Azure and Adobe, are not available in Simple Icons)
//
// CONCEPT: list and levels are a first draft based on the public GitHub repos
// (how often a tool appears in package.json / composer.json). TODO: Quinten checks and adjusts.

import {
  siJavascript, siHtml5, siCss, siPhp,
  siReact, siTailwindcss, siVite, siReactrouter, siFramer, siChartdotjs, siAlpinedotjs, siAstro,
  siExpo,
  siNodedotjs, siExpress, siMongodb, siLaravel, siJsonwebtokens,
  siLangchain, siReplicate, siClaude,
  siGit, siGithub, siFigma,
  siPython,
} from "simple-icons";

export const levels = {
  3: "Proficient",
  2: "Comfortable",
  1: "Familiar",
};

export const skillGroups = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: siJavascript, level: 3 }, // 10 repos
      { name: "HTML", icon: siHtml5, level: 3 },
      { name: "CSS", icon: siCss, level: 2 },
      { name: "PHP", icon: siPhp, level: 2 }, // CineMap (Laravel)
      { name: "Python", icon: siPython, level: 1 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: siReact, level: 2 }, // 5 repos
      { name: "Tailwind CSS", icon: siTailwindcss, level: 2 }, // 5 repos
      { name: "Vite", icon: siVite, level: 2 },
      { name: "React Router", icon: siReactrouter, level: 2 },
      { name: "Framer Motion", icon: siFramer, level: 1 }, // SonarPop
      { name: "Chart.js", icon: siChartdotjs, level: 1 }, // SonarPop
      { name: "Alpine.js", icon: siAlpinedotjs, level: 1 }, // CineMap
      { name: "Astro", icon: siAstro, level: 1 }, // this portfolio
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", icon: siReact, level: 2 }, // CineFind + PRG07
      { name: "Expo", icon: siExpo, level: 2 },
      { name: "NativeWind", icon: null, initials: "Nw", level: 1 }, // CineFind
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: siNodedotjs, level: 2 },
      { name: "Express", icon: siExpress, level: 2 }, // ExpenseTracker, PRG08
      { name: "MongoDB", icon: siMongodb, level: 2 }, // with Mongoose
      { name: "Laravel", icon: siLaravel, level: 2 }, // CineMap
      { name: "JWT auth", icon: siJsonwebtokens, level: 1 }, // ExpenseTracker
    ],
  },
  {
    name: "AI",
    skills: [
      { name: "ChatGPT", icon: null, initials: "Gp", level: 2 }, // TODO: level
      { name: "Claude", icon: siClaude, level: 2 }, // TODO: level
      { name: "LangChain", icon: siLangchain, level: 2 }, // PRG08 (many assignments)
      { name: "OpenAI / Azure OpenAI", icon: null, initials: "AI", level: 2 },
      { name: "Vector search (FAISS)", icon: null, initials: "Vs", level: 1 }, // PRG08 agent
      { name: "Replicate", icon: siReplicate, level: 1 }, // PRG08 agent
    ],
  },
  {
    name: "Design & tools",
    skills: [
      { name: "Figma", icon: siFigma, level: 2 },
      { name: "Adobe Creative Cloud", icon: null, initials: "Cc", level: 3 },
      { name: "Git", icon: siGit, level: 2 },
      { name: "GitHub", icon: siGithub, level: 2 },
    ],
  },
];
