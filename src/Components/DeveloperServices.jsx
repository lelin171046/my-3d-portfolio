import React from "react";
import { Code2, Server, Zap, Plug, Cloud, Sparkles, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description: "Responsive, fast UIs with React.js, Tailwind CSS, animations, and routing.",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    description: "Secure APIs, authentication, and data management with Node.js + Express.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Full-Stack MERN Apps",
    description: "Complete end-to-end applications with MongoDB, Express, React, and Node.",
  },
  {
    icon: <Plug className="w-8 h-8" />,
    title: "API Integration",
    description: "Connect third-party APIs like Stripe, Google Maps, or OpenAI seamlessly.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Deployment & Maintenance",
    description: "Deploy apps to Vercel, Render, or AWS, and provide ongoing updates.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Specialized Projects",
    description: "Dashboards, blood donation systems, and 3D interactive websites.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Freelance Services",
    description: "Custom web apps, landing pages, or feature enhancements for clients.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const  DeveloperServices = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            What I Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack MERN developer services to build, deploy, and maintain modern web apps.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group"
            >
              <motion.div
                variants={cardVariants}
                className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100/30 transition-colors flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default DeveloperServices;