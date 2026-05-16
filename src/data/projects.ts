import wondergameslogo from "../assets/logos/WonderGamesLogo.svg";
import wonderlearnlogo from "../assets/logos/WonderLearn 2.png";
import sanabellogo from "../assets/logos/logo.png";
import immalogo from "../assets/logos/imma logo2 psd@3x.png";
import shufflelogo from "../assets/logos/shufflelogo.png";
import gaminglogo from "../assets/logos/gaminglogo.png";
import hardwarelogo from "../assets/logos/hardwarelogo.png";

import immacasestudy from "../assets/casestudyimma.jpg"

const getScreenshots = (globResult: Record<string, unknown>) => {
  return Object.values(globResult) as string[];
};

const immascreenshots = getScreenshots(
  import.meta.glob('../assets/immascreenshot/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })
);
const sanabelscreenshots = getScreenshots(
  import.meta.glob('../assets/sanabelscreenshot/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })
);
const wondergamesscreenshots = getScreenshots(
  import.meta.glob('../assets/wondergamesscreenshot/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })
);
const wonderlearnscreenshots = getScreenshots(
  import.meta.glob('../assets/wonderlearnscreenshot/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })
);

export interface ProjectData {
  id: string;
  name: string;
  desc: string;
  longDesc?: string;
  tech: string[];
  color: string;
  logo: string;
  link?: string;
  gallery: string[];
}

export const projects: ProjectData[] = [
  {
    id: "wondergames",
    name: "WonderGames",
    desc: "A gamified learning platform with XP, levels, medals, leaderboards, and interactive educational mini-games.",
    longDesc: "WonderGames helps students learn through game mechanics, progress tracking, rewards, and responsive mini-game experiences. The platform combines a modern React interface with a Node.js API, MongoDB data models, authentication, media handling, and smooth UI animation.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Cloudinary", "JWT"],
    color: "from-blue-500 to-cyan-500",
    logo: wondergameslogo,
    link: "https://www.wonderlearn.net/wondergames",
    gallery: wondergamesscreenshots,
  },
  {
    id: "wonderlearn",
    name: "WonderLearn Website",
    desc: "A full-stack website for showcasing WonderLearn services and products with animated pages, authentication, and a user portal.",
    longDesc: "The WonderLearn website presents the company's learning products through animated landing pages, role-based authentication, and a user portal. It is built as a full-stack web experience with documented APIs, responsive layouts, and production deployment across Vercel and Render.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Swagger", "Vercel", "Render"],
    color: "from-purple-500 to-pink-500",
    logo: wonderlearnlogo,
    link: "https://www.wonderlearn.net/",
    gallery: wonderlearnscreenshots,
  },
  {
    id: "sanabel-al-ihsan",
    name: "Sanabel Al-Ihsan",
    desc: "A cross-platform mobile app that encourages students to perform good deeds and earn points and rewards.",
    longDesc: "Sanabel Al-Ihsan is an iOS and Android app focused on positive student behavior. Students complete good-deed challenges, earn points and rewards, and have their progress tracked through an admin dashboard backed by a Node.js API and MySQL database.",
    tech: ["React", "TypeScript", "Ionic", "Capacitor", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    color: "from-emerald-500 to-teal-500",
    logo: sanabellogo,
    link: "https://play.google.com/store/apps/details?id=com.wonderlearn.sanabel",
    gallery: sanabelscreenshots,
  },
  {
    id: "imma-ai-assistant",
    name: "IMMA",
    desc: "An AI-powered platform that automates and enhances digital marketing workflows using LLM pipelines.",
    longDesc: "Intelligent Marketing Management Assistant (IMMA) was built as a graduation project and awarded an Excellent grade. It uses LLM pipelines to support digital marketing workflows, combining a React interface, Flask services, MongoDB, AWS deployment, Docker, LangChain, and Jenkins.",
    tech: ["React", "Flask", "MongoDB", "AWS", "Docker", "LangChain", "Jenkins"],
    color: "from-blue-600 to-indigo-600",
    logo: immalogo,
    gallery: immascreenshots,
  },
  {
    id: "imma-ui-ux",
    name: "IMMA UI / UX Case Study",
    desc: "A UI and UX case study for the IMMA platform, covering product structure, flows, and interface design.",
    longDesc: "A design case study documenting the IMMA product experience, from interface direction and visual design to user flows and presentation assets for the graduation project.",
    tech: ["Figma", "Adobe Photoshop"],
    color: "from-pink-500 to-rose-500",
    logo: immalogo,
    link: "https://behance.net/alielmayyah",
    gallery: [immacasestudy],
  },
  {
    id: "gaming-store",
    name: "Gaming Store",
    desc: "An online gaming store inspired by Sony's website.",
    longDesc: "A dark, console-inspired storefront concept with product browsing, interactive hover states, and a polished visual style built with foundational web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-indigo-500 to-purple-500",
    logo: gaminglogo,
    gallery: [],
  },
  {
    id: "shuffle-music",
    name: "Shuffle",
    desc: "An online music streaming website.",
    longDesc: "A music streaming interface concept with custom browsing pages, media-focused layouts, and a front-end experience built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-amber-500 to-orange-500",
    logo: shufflelogo,
    gallery: [],
  },
  {
    id: "hardware-projects",
    name: "Hardware Projects",
    desc: "A collection including an OS Scheduler, RFID Access Control System, and microcontroller-based Car Parking System.",
    longDesc: "A set of low-level and embedded systems projects: a Process Generator and OS Scheduler emulation in C# and C++, an Arduino RFID Access Control System, and an ATmega32 car parking system using sensors and actuators.",
    tech: ["C++", "C#", "Arduino", "ATmega32", "Sensors", "Actuators"],
    color: "from-slate-500 to-zinc-500",
    logo: hardwarelogo,
    gallery: [],
  }
];
