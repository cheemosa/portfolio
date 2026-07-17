import { FaGithub, FaLinkedin, FaBluetooth, FaFilePdf } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import collegeMap from "./assets/images/ProjectImages/collegemap.jpg";
import EzFit from "./assets/images/ProjectImages/EZ.jpg";
import imageEditor from "./assets/images/ProjectImages/imageEditor.jpg";
import jobify from "./assets/images/ProjectImages/jobfy.jpg";
import portfolio from "./assets/images/ProjectImages/portfolio.png";
import mutualFund from "./assets/images/ProjectImages/mutualFund.JPG";
import recallAi from "./assets/images/ProjectImages/recallAi.JPG";

import folder from "./assets/images/FolderImages/folder.png";
import mail from "./assets/images/FolderImages/mail.png";
import about from "./assets/images/FolderImages/questionMark.png";
import resume from "./assets/images/FolderImages/resume.png";

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/jeevottam-bhat-137a87246/",
    icon: <FaLinkedin size={30} />,
  },
  {
    id: 2,
    url: "https://github.com/alo06",
    icon: <FaGithub size={30} />,
  },
  {
    id: 3,
    url: "https://leetcode.com/jeevo06/",
    icon: <SiLeetcode size={30} />,
  },
  {
    id: 4,
    url: "https://auth.geeksforgeeks.org/user/bhatjeevu06",
    icon: <SiGeeksforgeeks size={30} />,
  },
];

export const educationData = [
  {
    institute: "NMAMIT, Nitte",
    duration: "2020 - 2024",
    degree: "Computer Science and Engineering",
    cgpa: "8.8",
  },
  {
    institute: "Sharada",
    duration: "2018 - 2020",
    degree: "PCMB",
    cgpa: "90%",
  },
];

export const workData = [
  {
    company: "Louisa AI",
    role: "Software Engineer I",
    duration: "Jun 2024 - Jun 2026",
    description: [
      "Owned the end-to-end migration from Frontegg to AWS Cognito, building JWT-based login, SSO, and passkey flows in-house to fully retire the paid vendor, and integrated Cookiebot in parallel to bring the app into compliance with client cookie consent requirements.",
      "Led a Webpack-to-Vite migration, cutting local build time 60% (38s to 15s) and Hot Module Replacement latency 99% (2,719ms to 13ms), while improving JS chunk splitting from 5 to about 88 output chunks.",
      "Built the UI and AI prompt engineering for Overlaps, a feature clients actively requested and prospects consistently called out during demos.",
      "Built Spring Boot features for second-degree connection detection, adding an Elasticsearch indexer field to surface connection counts, and an introduction-request endpoint with a custom HTML email template.",
      "Upgraded React 17 to 18 with concurrent package migrations and zero production regressions; decoupled the component library into a standalone npm package and built a unified VideoPlayer supporting Brightcove, YouTube, Vimeo, and Dailymotion.",
    ],
  },
  {
    company: "Louisa AI",
    role: "Software Engineering Intern",
    duration: "Jan 2024 - Jun 2024",
    description: [
      "Built a news intelligence pipeline (Python) processing 5,000+ articles a day: ingesting via the Crunchbase API, extracting full text with newspaper4k, and classifying and summarizing through a multi-model NLP chain (KeyBERT, BART-large-CNN); orchestrated via Airflow and surfaced in the product UI.",
    ],
  },
];

export const projectData = [
  {
    id: 1,
    name: "RecallAI",
    image: recallAi,
    details:
      "An AI-powered flashcard and spaced repetition app that uses RAG to generate contextual flashcards from your notes. Built with a Fastify/TypeScript backend, pgvector for semantic search, BullMQ for job queues, and LangChain.js with Gemini.",
    tech: "TypeScript, Fastify, PostgreSQL, pgvector, BullMQ, LangChain.js, React",
    link: null,
    live: null,
  },
  {
    id: 2,
    name: "Mutual Fund Tracker",
    image: mutualFund,
    details:
      "A fully autonomous mutual fund tracking system with a GitHub Actions pipeline, Groq LLM signals, Tavily news search, and a Recharts dashboard. Supports text-to-SQL querying for portfolio analysis.",
    tech: "TypeScript, Node.js, Groq, Tavily, Recharts, GitHub Actions",
    link: "https://github.com/cheemosa/mutual_fund_app",
    live: null,
  },
  {
    id: 3,
    name: "College Map",
    image: collegeMap,
    details:
      "Experience seamless navigation through NMAMIT Campus using the College Map - Classroom Finder project.",
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
    link: "https://github.com/al06/al06.github.io",
    live: "https://al06.github.io/",
  },
  {
    id: 4,
    name: "Image Editor",
    image: imageEditor,
    details:
      "A powerful online image editing tool with brightness, grayscale, and saturation adjustments, plus image resizing — all in the browser.",
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/al06/Image-Editor",
    live: "https://image-editor-umber.vercel.app/",
  },
  {
    id: 5,
    name: "Portfolio",
    image: portfolio,
    details:
      "A Windows XP-inspired portfolio website built with React and Vite. Features a nostalgic desktop UI with draggable windows, a working taskbar, and a contact form powered by EmailJS.",
    tech: "React, Vite, EmailJS, CSS",
    link: "https://github.com/cheemosa/portfolio",
    live: "https://jeevottambhat.vercel.app",
  },
];

export const skillCategories = [
  {
    id: 1,
    category: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      { name: "TanStack Query", icon: "https://tanstack.com/favicon.ico" },
      {
        name: "Webpack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "SCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "Context API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    id: 3,
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Fastify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      { name: "BullMQ", icon: "https://bullmq.io/favicon.ico" },
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
  },
  {
    id: 4,
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Elasticsearch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
    ],
  },
  {
    id: 5,
    category: "AI & ML",
    skills: [
      { name: "Hugging Face", icon: "https://huggingface.co/favicon.ico" },
      {
        name: "RAG",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "Prompt Eng.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Claude",
        icon: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4",
      },
      {
        name: "Copilot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
  {
    id: 6,
    category: "Cloud & Tools",
    skills: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "JWT",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "OAuth",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        name: "Swagger",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      },
      {
        name: "Terraform",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      {
        name: "GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
      {
        name: "Lambda",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
    ],
  },
  {
    id: 7,
    category: "Testing",
    skills: [
      {
        name: "Jest",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      },
      {
        name: "JUnit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    id: 8,
    category: "Practices",
    type: "tags",
    skills: [
      { name: "DSA" },
      { name: "Design Patterns" },
      { name: "OOP" },
      { name: "MVC" },
      { name: "SDLC" },
      { name: "Operating Systems" },
      { name: "Agile" },
      { name: "Microservices" },
    ],
  },
];

export const navigation = [
  {
    name: "About",
    img: about,
  },
  {
    name: "Skills",
    img: folder,
  },
  {
    name: "Project",
    img: folder,
  },
  {
    name: "Contact",
    img: mail,
  },
  {
    name: "Resume",
    img: resume,
  },
];
