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
    iconUrl: pricewise,   // your icon here
    theme: "btn-back-blue",
    name: "BongoIT Portfolio Website",
    description:
      "Developed a complete portfolio website for BongoIT, a digital IT service center that offers content creation, video editing, and YouTube management. Built with React and Tailwind CSS, featuring animations and responsive design.",
    link: "https://github.com/lelin171046/bongo-it-client",
  },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];