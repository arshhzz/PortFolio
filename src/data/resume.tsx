import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arsh deep Singh",
  initials: "AS",
  url: "https://arshdeep-singh.vercel.app",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/search/Bangalore%2C+Karnataka%2C+Bengaluru+400051%2C+India/?hl=en",
  description:
    "Software Engineer. I love building, contributing and learning new things.",
  summary:
    "Results-driven Software Engineer with hands-on experience in full-stack development and AI-driven systems. Proficient in building scalable SaaS solutions using Node.js, React, TypeScript, and modern databases such as MongoDB and PostgreSQL. Demonstrated technical depth through an internship at Philips, advanced performance in national coding competitions (TCS CodeVita Rank 668, top 15% on LeetCode), and active participation in open-source programs like GSSoC and Smart India Hackathon. Skilled in Data Structures, Algorithms, and system-level programming with a strong foundation in software design and architecture. Adept at delivering production-grade applications integrating cloud, CI/CD, and generative AI technologies.",
  avatarUrl: "/1.JPG",
    skills: [
    "C++", "Python", "CSS", "HTML", "TAILWIND", "JavaScript", "Java", "PostgreSQL", "AWS", "RAG Pipelines", "Vector Databases", "Data Structures & Algorithms", "MongoDB", "Express.js", "React", "Node.js", "SQL", "Git", "Linux", "Agile"
  ],
  codingProfiles: [
    {
      name: "LeetCode",
      username: "My primary coding profile.",
      href: "https://leetcode.com/u/arsh_ds/",
      logoUrl: "/Letetcode.webp",
    },
    {
      name: "CodeChef",
      username: "I sometimes compete here. (I am not very active here though)",
      href: "https://www.codechef.com/users/arshh_ds",
      logoUrl: "/CodeChef.jpg",
    },
    {
      name: "GeeksForGeeks",
      username: "I practice problems here too :)",
      href: "https://www.geeksforgeeks.org/profile/arsh_ds",
      logoUrl: "/GFG.jpg"
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arshdeepkhalsa60@gmail.com",
    tel: "+91-8492916021",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/arshhzz",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arshdeepsingh09/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Arshdeep0907",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Philips",
      href: "https://www.philips.com/global",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/philips_2013_logo.png",
      start: "October 2025",
      end: "Present",
      description:
        "I specialize in building high-performance, cloud-native architectures for complex data environments. I have extensive experience designing distributed preprocessing pipelines using AWS S3 and Lambda, specifically optimized for high-volume medical imaging and clinical datasets. My work focuses on scalability and precision, having successfully scaled microservice-style workflows to process over 10,000 X-ray records daily while maintaining strict data integrity in regulated environments. Beyond infrastructure, I’ve enhanced system intelligence by building backend workflows for RAG-based retrieval systems and optimizing PostgreSQL architectures to achieve a 25% increase in query performance. I thrive in cross-functional settings, bridging the gap between robust system resilience and efficient, data-driven insights.",
    }
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree: "B.Tech in Computer Science Engineering. CGPA : 8.2 / 10",
      logoUrl: "/Lovely_Professional_University_04_37bc70298e.png",
      start: "2022",
      end: "2026"
    },
    {
      school: "Himalayan Education Mission Higher Secondary School Rajouri",
      href: "https://himalayancampus.in/",
      degree: "Higher Secondary Education. Class XII. Percentage: 95.3%",
      logoUrl: "/logo_.jpg",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "CompForge",
      href: "https://comp-forge-kappa.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "CompForge is a modern web application that uses AI to generate React components with TypeScript and Tailwind CSS. Built with Next.js frontend and Node.js backend, it provides an intuitive interface for creating, customizing, and managing React components through natural language conversations.",
      technologies: [
        "Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "Axios", "Framer Motion", "Radix UI", "Lucide React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs", "CORS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ananyasrivastava01/CompForge",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://comp-forge-kappa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Screenshot (67).png",
    },
    {
      title: "CashManager",
      href: "https://cashmanager-1.onrender.com/",
      dates: "June 2024",
      active: true,
      description:
        "CashManager is a secure, full-stack digital wallet application that enables users to register, manage their accounts, and perform real-time money transfers. Designed using modern web technologies and security-first architecture, this project demonstrates robust authentication, API validation, and testing workflows.",
      technologies: [
        "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Zod", "Helmet", "CORS", "Express-Rate-Limit", "Jest", "React.js", "Vite", "React Router", "Context API", "Tailwind CSS", "Axios", "ESLint"
      ],
      links: [
        {
          type: "Website",
          href: "https://cashmanager-1.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/arshhzz/cashmanager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Screenshot (68).png",
    },
    {
      title: "Inspector UI",
      href: "",
      dates: "2025",
      active: true,
      description:
        "A comprehensive Windows UI automation tool that generates test automation assets from live application exploration.Convert any Windows application's UI structure from Inspector JSON to structured XML and Page Object Models for test automation.",
      technologies: [
        "Python", 
        "Windows UI Automation",
        "JSON Parsing",
        "XML Generation",
        "Pydantic"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/arshhzz/Inspector-Agent-for-Windows",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Automation_Inspector.png",
    },
    {
      title: "CPU Scheduler Simulator",
      href: "",
      dates: "2025",
      active: true,
      description:
        "This project simulates classic CPU scheduling algorithms (FCFS, RR, SPN, SRT, HRRN, FB-1, FB-2i, Aging) and outputs either a timeline (Gantt chart) or statistics for each process..",
      technologies: [
        "C++",
        "Data Structures",
        "Operating Systems Concepts"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/arshhzz/CPU-Scheduling-Simulator",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/Cpu.png",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "November, 2023",
      location: "Jalandhar, Punjab, India",
      description:
        "Developed a application that use to detect cows species from their appearence, which can widely affect the local husbandry",
      image:
        "/maxresdefault.jpg",
      links: [],
    },
    {
      title: "CODE-A-HAUNT",
      dates: "February, 2025",
      location: "Jalandhar, Punjab, India",
      description:"Developed an application that helps people create playlists based on weather and activity they are indulge into.",
      image:"/Code-A-Thon.jpg",
      links: [],
    },
    {
      title: "GirlScript Summer of Code' 25",
      dates: "Summer, 2025",
      location: "Remote",
      description:"Worked and Merged 2 PRs in the open-source projects, containing bug fixes and new features.",
      image:
        "/gssoc.jpg",
      links: [],
    },
    {
      title: "HackToberfest",
      dates: "October, 2025",
      location: "Remote",
      description:"Worked and Merged 2 PRs in the open-source projects. Upgraded features and tweaked the code to improve performance.",
      image:
        "/hacktoberfest.png",
      links: [],
    },
    
  ],
} as const;
