import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arsh deep Singh",
  initials: "AS",
  url: "https://dillion.io",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/search/Bangalore%2C+Karnataka%2C+Bengaluru+400051%2C+India/?hl=en",
  description:
    "Software Developer. I love building things and helping people.",
  summary:
    "Results-driven Software Engineer with hands-on experience in full-stack development and AI-driven systems. Proficient in building scalable SaaS solutions using Node.js, React, TypeScript, and modern databases such as MongoDB and PostgreSQL. Demonstrated technical depth through an internship at Philips, advanced performance in national coding competitions (TCS CodeVita Rank 668, top 15% on LeetCode), and active participation in open-source programs like GSSoC and Smart India Hackathon. Skilled in Data Structures, Algorithms, and system-level programming with a strong foundation in software design and architecture. Adept at delivering production-grade applications integrating cloud, CI/CD, and generative AI technologies.",
  avatarUrl: "/1.JPG",
    skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "Postgres",
    "Express", 

    "C++",
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
      degree: "B.Tech in Computer Science Engineering. CGPA : 8.1 / 10",
      logoUrl: "/Lovely_Professional_University_04_37bc70298e.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Himalayan Education Mission Higher Secondary School Rajouri",
      href: "https://himalayancampus.in/",
      degree: "Higher Secondary Education. Class XII. Percentage: 90.8%",
      logoUrl: "/logo_.jpg",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
