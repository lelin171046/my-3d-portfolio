import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import { File, Webcam } from "lucide-react";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "BongoIT – Digital IT Service Center",
    icon: react,      // Replace with BongoIT logo if available
    iconBg: "#d1e8ff",
    date: "2024 - Present",
    points: [
      "Developed the official portfolio website for BongoIT, a digital service center specializing in content creation, video editing, and YouTube channel management.",
      "Built a fully responsive and modern UI using React, Tailwind CSS, and Framer Motion animations.",
      "Integrated dynamic sections to showcase BongoIT’s services, completed projects, and client workflow.",
      "Optimized the site for SEO, performance, and smooth user experience across all devices.",
      "Collaborated with the BongoIT team to refine design, branding, and content presentation.",
    ],
  },
  {
    title: "Full Stack Developer (Freelancer)",
    company_name: "Self-Employed",
    icon: nodejs,
    iconBg: "#ffe6cc",
    date: "2023 - 2024",
    points: [
      "Developed complete MERN stack applications including authentication, dashboards, and real-time features.",
      "Worked with REST APIs, MongoDB, and Firebase for secure and scalable backend systems.",
      "Delivered client-focused solutions with clean UI and optimized UX.",
      "Handled project deployment using platforms such as Vercel, Netlify, and Render.",
    ],
  },
  {
    title: "Frontend Developer (Intern)",
    company_name: "Creative IT Projects",
    icon: javascript,
    iconBg: "#f0d1ff",
    date: "2022 - 2023",
    points: [
      "Gained experience building real-world web interfaces using HTML, CSS, JavaScript, and React.",
      "Converted UI/UX designs into modern, responsive web pages.",
      "Worked collaboratively using Git and GitHub for project versioning.",
      "Supported senior developers in building features and debugging production issues.",
    ],
  },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
    iconUrl: estate,   // your icon here
    theme: "btn-back-blue",
    name: "BongoIT Portfolio Website",
    description:
      "Developed a complete portfolio website for BongoIT, a digital IT service center that offers content creation, video editing, and YouTube management. Built with React and Tailwind CSS, featuring animations and responsive design.",
    githubLink: "https://github.com/lelin171046/bongo-it-client",
    liveLink: "https://lovely-cassata-30993c.netlify.app/",
  },
   {
    iconUrl: estate,  
    theme: 'btn-back-red',
    name: 'Blood Donation Platform',
    description: 'A full-stack blood donation management system with user authentication, donation requests, donor matching, and an admin dashboard. Built for seamless blood request posting, status updates, and real-time interaction between donors and recipients.',
    liveLink: 'https://blood-donation-e5309.web.app/',
    githubLink: 'https://github.com/lelin171046/blood-donation.git',
}
,
   {
    iconUrl: meta,
    theme: 'btn-back-green',
    name: 'Image to PDF Converter',
    description: 'A simple and efficient web application that allows users to convert images into a single PDF file with just one click. Fully responsive and built for fast performance.',
    liveLink: 'https://image-to-pdf-just-1-click.netlify.app/',
    githubLink: 'https://image-to-pdf-just-1-click.netlify.app/',
},
   {
    iconUrl: threads,
    theme: 'btn-back-blue',
    name: 'SDATAMastery – Personal Learning Platform',
    description: 'A personalized education website designed for delivering courses on data structures, Microsoft Excel, and various tech tutorials. Built with a clean UI, smooth navigation, and responsive design to help students learn easily.',
    link: 'https://limon-sdatamastery.web.app/'
},
   {
    iconUrl: tesla,
    theme: 'btn-back-orange',
    name: 'ByteBlaze – Tech Learning Hub',
    description: 'ByteBlaze serves as a beginner-friendly platform that simplifies complex technology topics, making them easy to understand for curious learners.',
    liveLink: 'https://incomparable-elf-fd7e32.netlify.app/',
    githubLink: ''
},
   
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];