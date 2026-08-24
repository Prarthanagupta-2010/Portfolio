import { Project, SkillCategory, Certificate, Achievement, StatItem } from '../types';

export const personalData = {
  fullName: "Prarthana Gupta",
  initials: "PG",
  designationList: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Enthusiast"
  ],
  designations: "Software Engineer · Full Stack Developer · AI/ML Enthusiast",
  github: "https://github.com/Prarthanagupta-2010",
  linkedin: "https://linkedin.com/in/prarthana-gupta-a1568625a/",
  email: "prarthanagupta14@gmail.com",
  phone: "+91 9236702080",
  location: "Gorakhpur, Uttar Pradesh, India",
  profilePhoto: "/assets/profile.jpeg",
  heroIntroduction: `I am a Software Engineer focused on building scalable, reliable, and intelligent software systems across full-stack development and AI-driven applications. With hands-on experience in modern web technologies, backend engineering, databases, LLM-powered systems, and cloud/DevOps workflows, I enjoy turning complex problems into efficient and maintainable solutions. My foundation in Electronics and Communication Engineering is complemented by strong skills in programming, data structures and algorithms, system design, databases, operating systems, and computer networks. I have built applications ranging from real-time communication platforms to AI-powered desktop and conversational systems, always focusing on performance, usability, and engineering quality. I am continuously learning, solving challenging problems, and looking for opportunities to build technology that creates meaningful impact.`,
  aboutBio: `I am a Software Engineer with a strong foundation in computer science fundamentals and hands-on experience developing full-stack and AI-powered applications. I earned my Bachelor of Technology in Electronics and Communication Engineering from Madan Mohan Malaviya University of Technology with a CGPA of 8.24. My technical expertise spans Python, C++, C#, Java, React.js, Next.js, Node.js, Express.js, FastAPI, SQL, MongoDB, REST APIs, and modern software engineering practices. I have also worked extensively with Generative AI, Large Language Models, LangChain, LangGraph, AI agents, Whisper, Docker, CI/CD pipelines, and vector databases. During my internship as a Full Stack Developer at Qlikwise, I gained practical experience with software development lifecycles, debugging, code reviews, Git/GitHub, and Agile collaboration. What differentiates me is the combination of strong problem-solving ability, hands-on engineering experience, continuous learning, and a passion for creating scalable solutions that bridge software engineering and intelligent systems.`,
  mission: "Build reliable, scalable, and intelligent software solutions that turn complex problems into meaningful real-world impact.",
  vision: "Grow into a highly capable software engineer who combines strong engineering fundamentals with AI and emerging technologies to build the next generation of intelligent digital systems.",
  tagline: "Building scalable software. Exploring intelligent systems. Solving meaningful problems."
};

export const experienceData = {
  company: "Qlikwise",
  role: "Full Stack Developer Intern",
  type: "Internship",
  duration: "October 2025 – April 2026",
  location: "India",
  responsibilities: [
    "Developed, maintained, and troubleshot software applications using modern web technologies while ensuring solutions met customer requirements.",
    "Applied software design principles and SDLC methodologies throughout the development lifecycle.",
    "Performed systematic troubleshooting and debugging to optimize application performance and resolve technical issues.",
    "Conducted code reviews, followed coding standards, and collaborated with team members in an Agile environment.",
    "Used Git and GitHub for version control and feature development."
  ],
  achievements: [
    "Improved software reliability and maintainability through systematic debugging, code reviews, coding standards, and structured development practices.",
    "Contributed effectively within an Agile development environment while maintaining collaborative Git/GitHub-based workflows."
  ]
};

export const educationData = {
  institution: "Madan Mohan Malaviya University of Technology",
  degree: "Bachelor of Technology — Electronics and Communication Engineering",
  duration: "November 2022 – May 2026",
  mode: "Full-time",
  cgpa: "8.24",
  highlights: [
    "Specialized in Electronics and Communication Engineering with a strong foundation in engineering and technology.",
    "Developed strong foundations in programming, data structures and algorithms, databases, operating systems, and computer networks.",
    "Combined engineering education with practical software development, AI/ML projects, and full-stack application development."
  ]
};

export const projectsData: Project[] = [
  {
    id: "smartattend",
    number: "01",
    title: "SmartAttend",
    type: "Full-Stack Web Application",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    description: "SmartAttend is an attendance tracking system designed to efficiently manage and record user attendance. The application uses structured data handling and modular software practices to maintain accurate attendance records and improve maintainability.",
    keyOutcomes: [
      "Designed and developed an attendance management system.",
      "Implemented structured application logic for accurate attendance records.",
      "Focused on consistency and reliable data handling.",
      "Applied modular coding practices to improve maintainability.",
      "Used Git for collaborative development and version control."
    ],
    featured: true
  },
  {
    id: "vybechat",
    number: "02",
    title: "VybeChat",
    type: "Real-Time Full-Stack Chat Application",
    technologies: ["ReactJS", "Express.js", "Node.js", "MongoDB", "Tailwind", "DaisyUI", "Redux", "Socket.io", "Axios"],
    description: "VybeChat is a responsive real-time communication application built with the MERN ecosystem. It combines Socket.io-based real-time communication with Redux state management and a responsive React interface.",
    keyOutcomes: [
      "Developed a responsive and mobile-friendly chat interface.",
      "Implemented real-time communication using Socket.io.",
      "Optimized frontend rendering and component performance.",
      "Reduced UI lag by 30% through performance optimization and minimizing unnecessary re-renders.",
      "Used Redux for efficient application state management."
    ],
    featured: true
  },
  {
    id: "substream-ai",
    number: "03",
    title: "Substream AI",
    type: "AI-Powered Desktop Media Application",
    technologies: ["C#", ".NET 9", "Whisper", "Local LLMs", "FlyleafLib", "DeepL API", "DirectX", "FFmpeg", "OCR"],
    description: "Substream AI is an AI-powered desktop media application focused on real-time subtitle generation, automated transcription, OCR, and multilingual translation. The system combines local AI models, media pipelines, and scalable software architecture.",
    keyOutcomes: [
      "Developed real-time subtitle generation and automated transcription pipelines.",
      "Integrated Whisper and OCR capabilities.",
      "Integrated Local LLMs and DeepL APIs for context-aware multilingual translation.",
      "Supported multilingual translation across 10+ languages.",
      "Architected an MVVM-based system with DirectX rendering, FFmpeg media pipelines, and plugin extensibility.",
      "Improved maintainability, performance, and software reliability through scalable architecture."
    ],
    featured: true
  },
  {
    id: "clerkly",
    number: "04",
    title: "Clerkly",
    type: "AI-Powered Conversational Application",
    technologies: ["Next.js", "FastAPI", "Python", "Gemini", "Docker", "SQL", "SQLite", "SQLAlchemy", "LangChain", "LangGraph"],
    description: "Clerkly is an AI-powered application combining modern web development with LLM-based workflows. The system uses containerized backend services, persistent conversation management, and AI-powered automation.",
    keyOutcomes: [
      "Designed, developed, tested, and deployed containerized backend services.",
      "Used Docker and CI/CD pipelines to improve deployment consistency and maintainability.",
      "Implemented persistent conversation management using SQLite and SQLAlchemy.",
      "Built LLM-powered title generation and workflow automation.",
      "Reduced manual user actions through intelligent conversation organization.",
      "Used LangChain and LangGraph for AI workflow orchestration."
    ],
    featured: true
  },
  {
    id: "library-management",
    number: "05",
    title: "Library Management System",
    type: "Full-Stack Web Application / Enterprise Management System",
    githubUrl: "https://github.com/Prarthanagupta-2010/Library-Management-System",
    technologies: ["ASP.NET Core MVC", ".NET 8", "C#", "Entity Framework Core", "SQL Server", "Bootstrap 5", "Razor Views", "ASP.NET Core Identity", "Postman", "REST APIs"],
    description: "Library Management System is a web-based application developed using ASP.NET Core MVC (.NET 8), C#, Entity Framework Core, and Microsoft SQL Server to digitize and streamline public library operations. The system provides comprehensive management workflows for books, members, authors, genres, departments, events, and book circulation while supporting secure role-based access.",
    keyOutcomes: [
      "Developed end-to-end CRUD workflows for books, members, authors, genres, departments, and events using Entity Framework Core Code-First architecture.",
      "Implemented SQL queries, joins, stored procedures, and database scripts in Microsoft SQL Server for efficient data retrieval and transaction management.",
      "Built complete book circulation workflows covering borrowing, returning, renewals, fine calculation, and payment tracking.",
      "Implemented secure authentication and role-based authorization using ASP.NET Core Identity.",
      "Created responsive Razor Views using Bootstrap 5 with pagination for efficient management of large datasets.",
      "Implemented differentiated access and functionality for Admin, Librarian, and Member roles.",
      "Tested and validated backend/API functionality using Postman."
    ],
    featured: true
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Programming & Core CS",
    iconName: "Code2",
    skills: [
      { name: "Python", percentage: 90 },
      { name: "C++", percentage: 88 },
      { name: "C#", percentage: 84 },
      { name: "Java", percentage: 78 },
      { name: "Object-Oriented Programming", percentage: 90 },
      { name: "Data Structures & Algorithms", percentage: 92 },
      { name: "Operating Systems", percentage: 82 },
      { name: "DBMS", percentage: 84 },
      { name: "Computer Networks", percentage: 82 },
      { name: "Performance Optimization", percentage: 84 }
    ]
  },
  {
    title: "Full-Stack Development",
    iconName: "Layout",
    skills: [
      { name: "React.js", percentage: 90 },
      { name: "Next.js", percentage: 86 },
      { name: "Node.js", percentage: 88 },
      { name: "Express.js", percentage: 88 },
      { name: "FastAPI", percentage: 84 },
      { name: "REST APIs", percentage: 90 },
      { name: "Socket.io", percentage: 82 },
      { name: "Tailwind CSS", percentage: 86 },
      { name: "JWT Authentication", percentage: 86 }
    ]
  },
  {
    title: "Databases & APIs",
    iconName: "Database",
    skills: [
      { name: "SQL", percentage: 84 },
      { name: "MongoDB", percentage: 88 },
      { name: "REST APIs", percentage: 90 },
      { name: "SQLAlchemy", percentage: 78 },
      { name: "SQLite", percentage: 82 },
      { name: "Axios", percentage: 82 }
    ]
  },
  {
    title: "AI / ML & LLM Engineering",
    iconName: "Cpu",
    skills: [
      { name: "Generative AI", percentage: 86 },
      { name: "Large Language Models", percentage: 84 },
      { name: "LangChain", percentage: 82 },
      { name: "LangGraph", percentage: 80 },
      { name: "AI Agents", percentage: 80 },
      { name: "Prompt Engineering", percentage: 84 },
      { name: "Whisper", percentage: 82 },
      { name: "Vector Databases", percentage: 75 }
    ]
  },
  {
    title: "Cloud & DevOps",
    iconName: "Cloud",
    skills: [
      { name: "Docker", percentage: 82 },
      { name: "Git", percentage: 92 },
      { name: "GitHub", percentage: 92 },
      { name: "CI/CD Pipelines", percentage: 80 }
    ]
  },
  {
    title: "Software Engineering",
    iconName: "Layers",
    skills: [
      { name: "Software Design Principles", percentage: 88 },
      { name: "SDLC", percentage: 86 },
      { name: "Code Reviews", percentage: 86 },
      { name: "Debugging", percentage: 90 },
      { name: "Agile Development", percentage: 84 },
      { name: "Problem Solving", percentage: 94 }
    ]
  }
];

export const certificationsData: Certificate[] = [
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Machine Learning / AI",
    imagePath: "/assets/certificates/MachineLearning.png",
    description: "Comprehensive foundational mastery in machine learning algorithms, model evaluation, predictive modeling, and feature engineering."
  },
  {
    id: "google-cloud-genai",
    title: "Google Cloud and Generative AI",
    category: "Generative AI / Cloud",
    imagePath: "/assets/certificates/GoogleCloudandGenerativeAI.png",
    description: "Practical expertise in deploying generative AI applications, cloud infrastructure, foundation models, and scalable architectures on Google Cloud."
  },
  {
    id: "microsoft-fabric",
    title: "Microsoft Certified: Fabric Data Engineer Associate",
    provider: "Microsoft",
    category: "Data Engineering",
    imagePath: "/assets/certificates/MicrosoftCertifiedDataEngineerAssosciate.png",
    description: "Official Microsoft certification validating expertise in enterprise data ingestion, lakehouse architecture, transformation pipelines, and analytics with Microsoft Fabric."
  }
];

export const statsData: StatItem[] = [
  {
    value: 600,
    suffix: "+",
    label: "DSA Problems Solved",
    sublabel: "Across LeetCode, GFG & Code360"
  },
  {
    value: 3,
    suffix: "+",
    label: "Industry Certifications",
    sublabel: "ML, GenAI, Cloud & Data Engineering"
  },
  {
    value: 5,
    suffix: "",
    label: "Major Projects",
    sublabel: "Full-Stack, AI & Desktop Systems"
  },
  {
    value: 10,
    suffix: "+",
    label: "Languages Supported",
    sublabel: "Real-time AI in Substream AI"
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "dsa-problems",
    title: "600+ DSA Problems Solved",
    category: "Professional / Technical",
    description: "Solved 600+ Data Structures and Algorithms problems across LeetCode, GeeksforGeeks, and Code360, strengthening algorithmic thinking, problem-solving ability, and coding fundamentals.",
    imagePath: "/assets/achievements/lc200days_badge.png",
    badge: "Algorithmic Problem Solving"
  },
  {
    id: "multilingual-ai",
    title: "Multilingual AI Application",
    category: "Technical Achievement",
    description: "Built Substream AI with multilingual translation capabilities spanning 10+ languages, combining Local LLMs, Whisper, OCR, DirectX, media pipelines, and translation APIs.",
    badge: "AI Media Architecture"
  },
  {
    id: "realtime-perf",
    title: "Real-Time Application Performance",
    category: "Technical Achievement",
    description: "Optimized VybeChat's frontend rendering and component performance, reducing UI lag by 30% through improved state management and minimized unnecessary re-renders.",
    badge: "30% UI Lag Reduction"
  }
];
