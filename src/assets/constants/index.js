import project1 from "../projects/project1.png"
import project2 from "../projects/project2.png"
import project3 from "../projects/project3.png"
import project4 from "../projects/project4.png"
import project6 from "../projects/project6.png"
import project7 from "../projects/project7.png"
import project8 from "../projects/project8.png"
import project9 from "../projects/project9.png"
import project10 from "../projects/project10.png"
import projectSecte from "../projects/project-secte.png"
import projectPertamina from "../projects/project-pertamina.png"
import projectBiftadon from "../projects/project-biftadon.png"
import projectSesama from "../projects/project-sesama.png"
import projectDharma from "../projects/project-dharma.png"
import projectStringbox from "../projects/project-stringbox.png"
import projectStringboxApp from "../projects/project-stringbox-app.png"
import projectMpm from "../projects/project-mpm.jpg"
import projectBri from "../projects/project-bri.jpg"
import projectKkngo from "../projects/project-kkngo.jpg"
import projectMbg from "../projects/project-mbg.png"
import projectCerpenalyzer from "../projects/project-cerpenalyzer.png"

export const HERO_CONTENT = `**2x National Champion.** Software Engineer and Data Engineer who has shipped systems serving **415K+ users** and generated **IDR 50M+ in revenue.** Currently studying Information System Technology at ITB while building enterprise-grade solutions that make a measurable difference.`

export const DESCRIPTION = `I don't just write code. I build systems that move numbers. As a Software Engineer at BRI Danareksa Sekuritas, I architected the **e-IPO integration for 415,000 active investment customers** and engineered a fully automated market reporting pipeline that now delivers financial insights to a **25K-member WhatsApp community** and **84K Instagram followers** with zero manual effort every single day.

As a Data Engineer and Team Lead at Panda Teknologi Digital, I led a **5-person cross-functional team** delivering data solutions for enterprise clients including **PLN and national Zakat institutions**, directly generating **over IDR 50 million in revenue.** At Inkubator IT, I designed technical architectures for **Pertamina and Bank Indonesia.** At Abbey Creative, I overhauled project delivery across 6 brands and **cut review cycles by 15%.**

On top of professional work, I am a **2x National Champion: 1st Place in AI and Blockchain Hackathon, and 1st Place in Web Development.** I combine deep engineering expertise with strategic leadership to build solutions that scale, perform, and deliver real-world impact.`

export const EXPERIENCES = [
  {
    year: "Jun 2026 - Sep 2026",
    role: "Software Engineer",
    company: "BRI Danareksa Sekuritas",
    description: `Architected the **end-to-end e-IPO integration** across BRIGHTS, OMS, OneStop, and IDX for an investment platform serving **415,000 active customers**, covering full-stack technical design including database schema, data flow, API contracts, and fund validation. Independently engineered a **Python automation pipeline** that queries financial databases, transforms market data, renders dynamic HTML reports to images via headless browser, and distributes them via email daily, **eliminating all manual reporting effort** and reaching a **25K-member WhatsApp community** and **84K Instagram followers** at scale.`,
    skills: ["Python", "SQL", "System Architecture", "API Integration", "Jinja2", "Playwright", "SMTP/TLS", "Database Design"],
  },
  {
    year: "Okt 2025 - Sep 2026",
    role: "Data Engineer",
    company: "Panda Teknologi Digital",
    description: `Led a **5-person cross-functional engineering team** as the technical and operational lead, personally driving data engineering, database development, backend integration, and delivery execution for enterprise clients including **PLN and national Zakat institutions.** Oversaw resource allocation, project timelines, and client relationships end-to-end, generating **over IDR 50 million in revenue.** Operated simultaneously as a hands-on engineer and team leader, shipping production-grade data solutions that directly supported critical business operations at scale.`,
    skills: ["Data Engineering", "Database Design", "Backend Integration", "SQL", "Team Leadership", "Project Management"],
  },
  {
    year: "Jul 2025 - Sep 2025",
    role: "Project Officer Intern",
    company: "Abbey Creative",
    description: `Owned end-to-end project delivery for **6 client brands** across diverse industries, translating complex stakeholder requirements into structured scopes and driving cross-functional execution. Designed and deployed a custom project tracking and workflow management system that centralized documentation, surfaced blockers in real time, and streamlined approval chains, **cutting review cycles by 15%** and significantly improving delivery predictability.`,
    skills: ["Project Management", "Workflow Automation", "Stakeholder Management", "Cross-Functional Coordination"],
  },
  {
    year: "Dec 2024 - Aug 2025",
    role: "IT Project Manager",
    company: "Inkubator IT",
    description: `Spearheaded IT solution design for high-stakes technology projects with enterprise clients including **Pertamina and Bank Indonesia**, defining system architecture, component design, integration strategies, and functional specifications from the ground up. Translated ambiguous business requirements into **concrete technical roadmaps**, led cross-functional teams through design and feasibility reviews, and ensured every architectural decision aligned with client objectives and delivery timelines.`,
    skills: ["IT Architecture", "System Design", "Enterprise Solutions", "Project Management", "Team Leadership"],
  },
]

export const PROJECTS = [
  {
    title: "NutriChain - Makan Bergizi Ga Bocor",
    image: projectMbg,
    link: "https://makanbergizigabocor.vercel.app/",
    description: `Built a blockchain-powered accountability platform for Indonesia's national free meal program (MBG), using smart-contract escrow to publicly trace every rupiah from government disbursement to schools, eliminating fund leakage and enforcing full transparency at scale.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Blockchain", "Smart Contract"],
  },
  {
    title: "KKNGO",
    image: projectKkngo,
    description: `Engineered a national marketplace platform connecting KKN students across Indonesia to collaborate, share resources, and coordinate community programs. Recognized with the prestigious Ganesha Award and 1st Place in National Web Development Competition.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "BRI Market Recap Automation",
    image: projectBri,
    mobile: true,
    description: `Architected a full-stack Python automation pipeline at BRI Danareksa Sekuritas that transforms raw financial market data into branded HTML reports, renders them to images via headless browser, and distributes them automatically via email, supporting a 25K-member WhatsApp community and 84K Instagram followers with zero manual effort.`,
    technologies: ["Python", "SQL", "Jinja2", "Playwright", "SMTP/TLS"],
  },
  {
    title: "MPM UPN Veteran Jakarta",
    image: projectMpm,
    description: `Designed and delivered the official web presence for Majelis Permusyawaratan Mahasiswa (MPM) UPN "Veteran" Jakarta, the university's highest student legislative body, establishing a professional digital platform that represents thousands of students across all faculties.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Stringbox Web",
    image: projectStringbox,
    link: "https://stringbox.vercel.app/",
    description: `Developed a full-featured interactive learning platform for ITB's first-year students, bringing computational thinking to life with in-browser Python execution, drag-and-drop exercises, real-time leaderboards, and Google authentication, making programming education more accessible and engaging.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Python (Pyodide)", "Firebase"],
  },
  {
    title: "Stringbox App",
    image: projectStringboxApp,
    mobile: true,
    description: `Extended the Stringbox learning ecosystem to mobile, putting Python exercises, interactive modules, and progress tracking in students' pockets on both Android and iOS for anytime, anywhere learning.`,
    technologies: ["React Native", "TypeScript"],
  },
  {
    title: "SobatBantu (Sesama)",
    image: projectSesama,
    link: "https://sesama.vercel.app/",
    description: `Built a trusted crowdfunding and donation platform for Indonesia, featuring verified programs, real-time impact reporting, and multi-channel payment support, empowering individuals and organizations to create measurable social change.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "Cerpenalyzer",
    image: projectCerpenalyzer,
    link: "https://cerpenalyzer.vercel.app/latihan",
    description: `Created an AI-powered short story writing tool for Indonesian students, delivering structured exercises and guided feedback modules that make literary learning interactive and effective.`,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "EcoPedia Pertamina",
    image: projectPertamina,
    link: "https://ecopedia-pertamina.vercel.app/",
    description: `Delivered a biodiversity monitoring dashboard for PT Pertamina Patra Niaga's Tuban fuel terminal, digitizing environmental compliance data into an accessible catalogue of flora, fauna, and species status reports.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dharmapatha Mahidhara",
    image: projectDharma,
    link: "https://dharmapathamahidhara.vercel.app/",
    description: `Built the official web platform for Dharmapatha Mahidhara organization, featuring dynamic program pages, structured navigation across multiple programs (SPEAKUP, SKYWALK, SKYSALE, SKYRUN), and a cohesive organizational identity.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Secte Ayam Pop",
    image: projectSecte,
    link: "https://secte-ayam-pop.vercel.app/",
    description: `Crafted a high-converting restaurant landing page for Secte Ayam Pop at Blok M Hub Jakarta, integrating GoFood and GrabFood ordering, WhatsApp direct contact, and live Google Maps reviews to drive customer acquisition online.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Biftadon",
    image: projectBiftadon,
    link: "https://biftadon.vercel.app/",
    description: `Designed and built a sleek landing page for Biftadon, a halal Japanese donburi restaurant at Blok M Hub Jakarta, with an enticing menu display and seamless GoFood ordering integration to boost online orders.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "AR Douce Dame",
    image: project10,
    mobile: true,
    link: "https://douce-dame-ar.vercel.app/",
    description: `Developed an Augmented Reality web experience for a luxury fashion client, triggering immersive AR pop-ups directly from QR code scans to elevate brand storytelling and create memorable marketing touchpoints.`,
    technologies:["AR Development" , "Next.Js","TypeScript","Tailwind CSS","Shadcn UI"],
  },
  {
    title: "Stressdew Valley",
    image: project8,
    description: `Engineered a Stardew Valley-inspired farming simulation game in Java, implementing 15+ software design patterns across crop management, NPC dialogue, and time systems to produce a scalable, maintainable game architecture.`,
    technologies: ["Game Development", "Java","Object-Oriented Design","Design Patterns"],
  },
  {
    title: "Data Analysis Converter to Graph",
    image: project9,
    description: `Built client-commissioned Python data pipelines that automatically parse raw datasets and generate clean, insightful visualizations, turning complex data into clear business intelligence with minimal manual effort.`,
    technologies: ["Python" ,"Data Visualization", "Web Development"],
  },
  {
    title: "STEI KLINIK",
    image: project7,
    description: `Led the development of STEI Klinik, a centralized health services portal for ITB students, streamlining appointment scheduling and medical information access into a single intuitive interface during the SPARTA 2023 program.`,
    technologies: ["Next.Js","TypeScript","Firebase","Firestore","REST API","Tailwind CSS","Shadcn UI"],
  },
  {
    title: "Pakansuper Marketplace",
    image: project6,
    description: `Launched a B2B marketplace connecting animal feed producers directly with livestock owners, cutting out middlemen and streamlining the supply chain to deliver better prices and faster fulfillment across the animal husbandry sector.`,
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
