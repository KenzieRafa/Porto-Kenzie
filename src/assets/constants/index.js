import project1 from "../projects/project1.png";
import project2 from "../projects/project2.png";
import project3 from "../projects/project3.png";
import project4 from "../projects/project4.png";
import project6 from "../projects/project6.png";
import project7 from "../projects/project7.png";
import project8 from "../projects/project8.png";
import project9 from "../projects/project9.png";
import project10 from "../projects/project10.png";

export const HERO_CONTENT = `I am an Information System Technology student at ITB with a strong interest in leadership, project management, and digital innovation. I am passionate about developing impactful solutions by combining technology, business, and creative problem solving. My journey has given me experience in leading multidisciplinary teams for digital product development, managing effective marketing campaigns, and founding as well as growing online businesses. I enjoy working with diverse people, facing real-world challenges, and continuously enhancing my skills in technology, communication, and strategy. `

export const DESCRIPTION = `I am an Information System Technology student at ITB with a strong enthusiasm for technology, leadership, and digital innovation. My academic and organizational journey has allowed me to develop a diverse skill set, particularly in software and web development. I have hands-on experience working with HTML, CSS, Java, Python, SQL, PostgreSQL, Jira, and Wordpress which enables me to design, build, and manage efficient digital solutions across various platforms.

My passion for building impactful projects is reflected in my experience leading multidisciplinary teams, managing digital business initiatives, and executing marketing strategies that reach a wide audience. I thrive in dynamic environments that challenge me to combine technical knowledge, creative problem-solving, and strategic thinking.

Beyond technical skills, I have actively participated in business development, project management, and digital marketing, allowing me to collaborate effectively with diverse teams and deliver real-world solutions. I am committed to continuous growth, always seeking new challenges and opportunities to broaden my expertise and make a meaningful impact in the field of information technology.`

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Mar 2025",
    role: "Project & product Manager Douce Dame",
    company: "Inkubator IT",
    description: `Currently leading and developing interactive Augmented Reality features for a web application. Responsible for product strategy, team coordination, and frontend development using Next.js, TypeScript, and Tailwind CSS. Implemented responsive UI components and integrated AR libraries to deliver smooth user experience across devices. Focused on building reusable components for efficient and scalable development.`,
    skills: [ "Product & Project Management", "AR Development" , "Next.Js","TypeScript","Tailwind CSS","Shadcn UI"],
  },
  {
    year: "Mei 2025 - Agt 2025",
    role: "Project Manager & Developer Stressdew Valley",
    company: "Stressdew Valley for ITB Project",
    description: `Managed and led the development of a comprehensive Farm Life Simulator game, a Stardew Valley-inspired farming simulation built with Java. Oversaw project architecture, team coordination with 4 programmers, and feature development including complex farming mechanics, NPC interactions, and time-based game systems. Implemented 15+ design patterns including Factory Method, Strategy, Observer, and Command patterns to ensure maintainable, extensible code architecture. Actively contributed to core gameplay systems and UI integration, successfully creating a robust foundation for an educational game development project.`,
    skills: ["Project & Product Management","Game Development", "Java","Object-Oriented Design","Design Patterns"],
  },
  {
    year: "Dec 2024 - Jan 2024",
    role: "Project & product Manager Inkubator IT",
    company: "Inkubator IT",
    description: `Led the entire product lifecycle for a Python-based web tool that converts raw data into interactive graphical visualizations. Managed requirement gathering, planning, and implementation phases. As developer, designed and optimized data processing and visualization features, ensuring a user-friendly interface and clear, informative charts to support effective data analysis.`,
    skills: ["Python" , "Product & Project Management", "Data Visualization", "Web Development"],
  },
  {
    year: "Sept 2024 -Okt 2024",
    role: "Project & Product Manager SPARTA 2023",
    company: "STEI KLINIK for SPARTA 2023",
    description: `Led the development of Stei Klinik, a centralized web platform designed to serve all students at ITB for managing their health needs. Responsible for end-to-end product management including requirement analysis, planning, and team coordination. Guided a multidisciplinary team to build a user-friendly, accessible, and secure website that integrates various health services, appointment scheduling, and medical information. Ensured project delivery aligned with stakeholders’ expectations and improved student access to healthcare resources.`,
    skills: ["Project Management", "Team Leadership", "Next.Js","TypeScript","Firebase","Firestore","REST API","Tailwind CSS","Shadcn UI"],
  },
  {
    year: "Agt 2023 - Dec 2023",
    role: "Project Manager & Frontend Developer Pakansuper Marketplace",
    company: "Pakansuper",
    description: `Managed and developed the Pakansuper Marketplace, an online marketplace for animal feed products built with WordPress. Oversaw project planning, team coordination with 2 programmers and 2 designers, and feature development such as product listings and secure transaction integration. Actively contributed to frontend customization and plugin integration, successfully leading the team to represent the campus in a national competition.`,
    skills: ["WordPress", "Project Management", "Team Leadership", "Web Development"],
  },
  
  
  // {
  //   year: "Jul 2024 - Present",
  //   role: "Human Resources Management Officer",
  //   company: "IEEE ITB Student Branch",
  //   description: `Managing human resources in the organization. Ensure that team members feel valued, motivated, and have everything they need to contribute effectively. Primary duties include recruiting, member development, and team welfare management.`,
  //   skills: ["Communication","Problem Solving","Time Management","Interpersonal"],
  // },
  // {
  //   year: "Dec 2023 - Jul 2024",
  //   role: "Staff of Finance",
  //   company: "BPA STEI-K 2023",
  //   description: `Manage fundraising activities to meet the needs of the STEI-K 2023. Primary responsibilities include budget planning, transaction recording, fundraising management, and financial reporting.`,
  //   skills: ["Accounting", "Finance Management", "Marketing", "Analytical Thinking"],
  // },
  // {
  //   year: "Oct 2023 - Jun 2024",
  //   role: "Member",
  //   company: "GDSC ITB",
  //   description: `Get training in the chosen field (Web Development, Mobile Development, Data Science, UI/UX, etc) then work on the final project to get a graduation certificate according to the field.`,
  //   skills: ["HTML","CSS","JavaScript","React"],
  // },
  // {
  //   year: "March 2024 - May 2024",
  //   role: "Staff of Sponsorship for STEI-Kesyen",
  //   company: "STEI-K 2023",
  //   description: `Managing and developing relationships with sponsors, as well as ensuring sponsor support is achieved properly, obtaining financial and material support necessary for the success of the STEI-Kesyen Event.`,
  //   skills: ["Negotiation","Interpersonal Skills","Communication","Accounting"],
  // },
];

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
    description: `Project Simulator is a Stardew Valley-inspired farming game that features comprehensive systems for crop management, NPC interactions, time-based gameplay mechanics, and employs 15+ design patterns to create a maintainable, extensible architecture in Java.RetryClaude can make mistakes. Please double-check responses.`,
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
];
