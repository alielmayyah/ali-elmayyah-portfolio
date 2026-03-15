import wondergameslogo from "../assets/logos/WonderGamesLogo.svg";
import wonderlearnlogo from "../assets/logos/WonderLearn 2.png";
import sanabellogo from "../assets/logos/logo.png";
import immalogo from "../assets/logos/imma logo2 psd@3x.png";
import shufflelogo from "../assets/logos/shufflelogo.png";
import gaminglogo from "../assets/logos/gaminglogo.png";
import hardwarelogo from "../assets/logos/hardwarelogo.png";

import immacasestudy from "../assets/casestudyimma.jpg"
// Dynamically import all images in the screenshot folders using Vite
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
    desc: "An interactive gamified website featuring educational games and engaging learning experiences.",
    longDesc: "WonderGames is a fully interactive gamified platform focusing on delivering educational content through fun, engaging mini-games. Built to scale, it features smooth animations, user progression, and real-time feedback.",
    tech: ["React", "Node.js", "MongoDB", "Git"],
    color: "from-blue-500 to-cyan-500",
    logo: wondergameslogo,
    link: "https://www.wonderlearn.net/wondergames",
    gallery: wondergamesscreenshots,
  },
  {
    id: "wonderlearn",
    name: "WonderLearn Website",
    desc: "A dynamic, responsive educational website designed to deliver smooth user journeys, interactive content, and scalable features.",
    longDesc: "The WonderLearn official learning portal. Designed with dynamic routing, engaging UI/UX to keep students focused, and highly responsive components to operate seamlessly across all devices.",
    tech: ["React", "Node.js", "Git"],
    color: "from-purple-500 to-pink-500",
    logo: wonderlearnlogo,
       link: "https://www.wonderlearn.net/",
    gallery: wonderlearnscreenshots,
  },
  {
    id: "sanabel-al-ihsan",
    name: "Sanabel Al-Ihsan",
    desc: "A gamified platform designed to encourage students and younger users to perform good deeds through interactive challenges and reward systems.",
    longDesc: "Sanabel Al-Ihsan bridges habit-building with gamification. Users engage with daily real-life challenges, earning points and climbing leaderboards while establishing positive behavioral patterns.",
    tech: ["React", "MongoDB", "AWS", "Git"],
    color: "from-emerald-500 to-teal-500",
    logo: sanabellogo,
    link: "https://play.google.com/store/apps/details?id=com.wonderlearn.sanabel",
    gallery: sanabelscreenshots,
  },
  {
    id: "imma-ai-assistant",
    name: "IMMA – AI Assistant",
    desc: "An AI-powered platform designed to enhance the efficiency and effectiveness of digital marketing.",
    longDesc: "Intelligent Marketing Management Assistant (IMMA) uses advanced AI models to suggest, automate, and analyze digital marketing campaigns. Developed as a graduation project with excellent grades.",
    tech: ["React", "Flask", "MongoDB", "AWS", "Docker", "LangChain", "Jenkins", "Git"],
    color: "from-blue-600 to-indigo-600",
    logo: immalogo,
    // link: "https://github.com/alielmayyah",
    gallery: immascreenshots,
  },
  {
    id: "imma-ui-ux",
    name: "IMMA UI / UX Case Study",
    desc: "Designed the UI and created a UX case study for the IMMA platform.",
    longDesc: "A comprehensive UI/UX case study detailing the design thinking, wireframing, prototyping, and user testing phases of the IMMA platform, ensuring an intuitive user journey for digital marketers.",
    tech: ["Figma", "Adobe Photoshop"],
    color: "from-pink-500 to-rose-500",
    logo: immalogo,
    link: "https://behance.net/alielmayyah",
    gallery: [immacasestudy], 
  },
  {
    id: "gaming-store",
    name: "Gaming Store",
    desc: "An online gaming website store inspired by Sony’s official PlayStation website.",
    longDesc: "A sleek, dark-themed storefront mirroring the premium feel of modern console dashboards. Features dynamic hover states, parallax scrolling, and an organized layout for discovering new titles.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-indigo-500 to-purple-500",
    logo: gaminglogo,
    // link: "https://github.com/alielmayyah",
    gallery: [],
  },
  {
    id: "shuffle-music",
    name: "Shuffle Music",
    desc: "An online music streaming website.",
    longDesc: "An immersive music streaming interface with custom audio players, playlist management, and a vibrant aesthetic tailored for music discovery.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-amber-500 to-orange-500",
    logo: shufflelogo,
    // link: "https://github.com/alielmayyah",
    gallery: [],
  },
  {
    id: "hardware-projects",
    name: "Hardware Projects",
    desc: "Includes OS Scheduler (C#, C++), RFID Reader (Arduino), and Car Parking System (ATmega32, Sensors, Actuators).",
    longDesc: "A collection of embedded systems and low-level software projects demonstrating strong foundational computer science knowledge. Systems feature real-world actuator integrations and memory management.",
    tech: ["C++", "C#", "Arduino", "ATmega32"],
    color: "from-slate-500 to-zinc-500",
    logo: hardwarelogo,
    // link: "https://github.com/alielmayyah",
    gallery: [],
  }
];
