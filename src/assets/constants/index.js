import project1 from "../projects/project1.png"
import project2 from "../projects/project2.png"
import project3 from "../projects/project3.png"
import project4 from "../projects/project4.png"
import project6 from "../projects/project6.png"
import project7 from "../projects/project7.png"
import project8 from "../projects/project8.png"
import project9 from "../projects/project9.png"
import project10 from "../projects/project10.png"

export const HERO_CONTENT = `Software Engineer and Data Engineer with professional experience at BRI Danareksa Sekuritas and Panda Teknologi Digital, currently studying Information System Technology at ITB. 2× National Champion in AI & Blockchain and Web Development competitions. I build scalable systems, enterprise integrations, and data-driven solutions that deliver measurable impact, from platforms serving 415K+ users to systems generating IDR 50M+ in revenue.`

export const DESCRIPTION = `I am an Information System Technology student at ITB with hands-on professional experience as a Software Engineer and Data Engineer. At BRI Danareksa Sekuritas, I architected e-IPO platform integrations for 415,000 active investment customers and built reporting automation systems supporting a 25K-member WhatsApp community and 84K Instagram followers. At Panda Teknologi Digital, I led a 5-person cross-functional engineering team delivering data solutions for enterprise clients including PLN and Zakat institutions, generating over IDR 50 million in revenue.

I bring strong experience in IT project management and system architecture, having led technical solution design for clients including Pertamina and Bank Indonesia at Inkubator IT, and managing end-to-end project delivery for 6 brands at Abbey Creative, reducing review cycles by 15%.

As a 2× national competition champion (AI & Blockchain Hackathon and Web Development), I combine deep technical proficiency with strategic thinking and leadership, building solutions that bridge technology and real-world impact at scale.`

export const EXPERIENCES = [
  {
    year: "Jun 2026 - Sep 2026",
    role: "Software Engineer",
    company: "BRI Danareksa Sekuritas",
    description: `Designed the end-to-end technical architecture for e-IPO integration across BRIGHTS, OMS, OneStop, and IDX, covering technology stack evaluation, database schema design, data flow architecture, API integration, and fund validation mechanisms for an investment platform serving 415K customers. Developed a Python-based data processing and reporting automation system using SQL, Jinja2, Playwright/Chromium, and SMTP/TLS, integrating database querying, financial market data transformation, dynamic HTML report generation, automated image rendering, and email distribution to support reporting across a 25K-member WhatsApp community and an 84K-follower Instagram audience.`,
    skills: ["Python", "SQL", "System Architecture", "API Integration", "Jinja2", "Playwright", "SMTP/TLS", "Database Design"],
  },
  {
    year: "Okt 2025 - Sep 2026",
    role: "Data Engineer",
    company: "Panda Teknologi Digital",
    description: `Developed and implemented data-driven solutions for enterprise projects involving PLN and Zakat Institutions, working hands-on across data processing, database development, backend integration, and application implementation to support business and operational requirements. Led a 5-person cross-functional engineering team while contributing to technical development and overseeing project delivery, resource allocation, and business operations, generating over IDR 50 million in revenue.`,
    skills: ["Data Engineering", "Database Design", "Backend Integration", "SQL", "Team Leadership", "Project Management"],
  },
  {
    year: "Jul 2025 - Sep 2025",
    role: "Project Officer Intern",
    company: "Abbey Creative",
    description: `Managed project requirements and delivery for 6 client brands across multiple industries, translating stakeholder needs into structured project scopes and coordinating cross-functional execution. Designed and implemented a project tracking and workflow management system to centralize project documentation, monitor task progress, and streamline approval workflows, reducing review cycles by 15%.`,
    skills: ["Project Management", "Workflow Automation", "Stakeholder Management", "Cross-Functional Coordination"],
  },
  {
    year: "Dec 2024 - Aug 2025",
    role: "IT Project Manager",
    company: "Inkubator IT",
    description: `Led IT solution design and architecture for technology projects involving Pertamina and Bank Indonesia, defining system components, technical architecture, and integration approaches aligned with business requirements. Designed end-to-end system workflows, process flows, and functional specifications, translating client requirements into technical solutions while coordinating cross-functional teams to ensure architectural feasibility and alignment with project objectives.`,
    skills: ["IT Architecture", "System Design", "Enterprise Solutions", "Project Management", "Team Leadership"],
  },
  {
    year: "Jan 2024 - Mar 2025",
    role: "Project & Product Manager Douce Dame",
    company: "Inkubator IT",
    description: `Led product strategy, team coordination, and frontend development of interactive Augmented Reality features for an AR web application using Next.js, TypeScript, and Tailwind CSS. Implemented responsive UI components and integrated AR libraries to deliver a seamless user experience across devices, focusing on reusable components for scalable development.`,
    skills: ["Product Management", "AR Development", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
]

export const PROJECTS = [
  {
    title: "AR Douce Dame",
    image: project10,
    link: "https://douce-dame-ar.vercel.app/",
    description: `Developing an AR project for client marketing purposes that displays AR pop ups from QR code scans`,
    technologies:["AR Development" , "Next.Js","TypeScript","Tailwind CSS","Shadcn UI"],
  },
   {
    title: "Stressdew Valley",
    image: project8,
    //link: "https://github.com/LeonArif/Stressdew-Valley.git",
    description: `Project Simulator is a Stardew Valley-inspired farming game that features comprehensive systems for crop management, NPC interactions, time-based gameplay mechanics, and employs 15+ design patterns to create a maintainable, extensible architecture in Java.`,
    technologies: ["Game Development", "Java","Object-Oriented Design","Design Patterns"],
  },
  {
    title: "Data Analysis Converter to Graph",
    image: project9,
    //link: "https://github.com/fliegenhaan/IF2150-2024-K03-G07-HalalHub",
    description: `Developing projects for clients creating python scripts that analyze data and convert it into proper graphs`,
    technologies: ["Python" ,"Data Visualization", "Web Development"],
  },
 
  {
    title: "STEI KLINIK for SPARTA 2023",
    image: project7,
    //link: "https://pemilu.hmif.dev/",
    description: `Stei Klinik is a centralized web platform designed to provide ITB students with easy access to various health services and medical information. The website streamlines appointment scheduling and supports student health management in one user-friendly interface.`,
    technologies: ["Next.Js","TypeScript","Firebase","Firestore","REST API","Tailwind CSS","Shadcn UI"],
  },
  {
    title: "Pakansuper Marketplace",
    image: project6,
    //link: "https://paradewisok2024.com/",
    description: `Pakansuper Marketplace is an online platform that connects farmers who produce animal feed with livestock owners who need quality feed products. The marketplace streamlines the supply chain by enabling direct transactions between producers and consumers in the animal husbandry sector.`,
    technologies: ["WordPress","Web Development"],
  },
  // {
  //   title: "HaloPIPS! (on-maintenance)",
  //   image: project4,
  //   link: "https://halo-pips-nzdt.vercel.app/",
  //   description: `SPARTA 2023 Milestone project, which is a website for ITB students to consult with their seniors via the chatroom on this website.`,
  //   technologies: ["Next.Js","TypeScript","Firebase","Firestore","REST API","Tailwind CSS","Shadcn UI"],
  // },
  // {
  //   title: "Tenki no Haan",
  //   image: project1,
  //   description: `A solo project in the form of an anime-themed weather app website inspired by the anime 'Tenki no Ko'.
  //    This weather app website provide not just accurate weather forecasts but also an engaging and visually appealing experience.`,
  //   link: "https://tenki-no-haan.vercel.app/",
  //   technologies:["HTML","CSS","JavaScript"],
  // },
  // {
  //   title: "To Do List",
  //   image: project2,
  //   link: "https://to-do-list-gamma-black.vercel.app/",
  //   description: `A solo project in the form of a to do list website that allows you to record what you do, mark it as complete, and delete it.
  //    Everything on the list is stored on your device's local storage so your to-do list will not be lost or replaced.`,
  //   technologies:["ReactJs","CSS","JavaScript"],
  // },
  // {
  //   title: "GameGoDino1vs1",
  //   image: project3,
  //   link: "https://github.com/fliegenhaan/GameGoDino-1vs1-.git",
  //   description: `The final project for the "Dasar Pemrograman" course in the form of Terminal-based game created in groups (5 people) using the Python programming language.`,
  //   technologies:["Python"],
  // },
]
