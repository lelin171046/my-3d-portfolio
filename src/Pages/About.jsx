import React from "react";
import profileImg from "../assets/images/monir.png"
import { Link } from "react-router-dom";
import { IconCloud } from "../Components/ui/icon-cloud";
import { Marquee } from "../Components/ui/marquee";
import DeveloperServices from "@/Components/DeveloperServices";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

const techs = [
  { name: "ReactJS", logo: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" },
  { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS3", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
];

const About = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h2 className="text-lg font-semibold text-blue-500 uppercase">Hi!</h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
          I am <span className="text-blue-600">Zaman Lelin</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          React.js Developer & MERN Stack Developer
        </p>
        <Link to={'/projects'}>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-blue-700 transition">
            Visit My Works
          </button>
        </Link>
      </div>

      {/* About Me Section */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-60 h-60 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        <div>
          <h3 className="text-blue-600 text-sm font-semibold uppercase mb-1">
            Who Am I?
          </h3>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            <span>Hi,</span>
            I’m a passionate <span className="font-semibold">React.js</span> and{" "}
            <span className="font-semibold">MERN Stack Developer</span> with a
            solid foundation in modern web technologies. I also have strong
            skills in <span className="font-semibold">HTML</span>,{" "}
            <span className="font-semibold">CSS</span>, and{" "}
            <span className="font-semibold">JavaScript</span>. I love building
            clean, efficient, and user-friendly web applications that make a
            real impact.
          </p>

        <a
  href="https://drive.google.com/file/d/1HazS1Yvo-SF-HsHjmUF9EvO-H3VoHScA/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-6 px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
    Download CV
  </button>
</a>

        </div>
      </div>

      {/* What I Do Section */}
      <div className="bg-blue-50 ">
       

        <section className=" text-white">
          <DeveloperServices></DeveloperServices>
        </section>
      </div>
    </section>
  );
};

export default About;
