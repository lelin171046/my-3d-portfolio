import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// Phone Input Component (Framer)
import { CountryPhoneInputField } from "https://framer.com/m/CountryPhoneInputField-ELI8.js@eLDetAGf4vSLdghevlIn";

// Icon Cloud Animation
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
} from "react-icon-cloud";

const slugs = [
  "amazonaws",
  "android",
  "androidstudio",
  "antdesign",
  "typescript",
  "vercel",
  "visualstudiocode",
];

const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState();

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (!icons) return <p className="text-white">Loading...</p>;

  return Object.values(icons.simpleIcons).map((icon) =>
    renderSimpleIcon({
      icon,
      size: 40,
      aProps: {
        onClick: (e) => e.preventDefault(),
      },
    })
  );
};

const Contact = () => {
  const formRef = useRef();
  const [phone, setPhone] = useState("");
  const icons = useIcons(slugs);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjx4f0g",
        "template_wvw2j3u",
        formRef.current,
        {
          publicKey: "mLv6pCC_gZaVdJ9Yv5SyJ",
        }
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 bg-gray-900">

      {/* ICON ANIMATION */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-72 h-72 md:w-96 md:h-96">
          <Cloud>{icons}</Cloud>
        </div>
      </motion.div>

      {/* CONTACT FORM */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl space-y-5 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Contact Me
        </h2>

        {/* Name */}
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email */}
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Phone Input Styled */}
        <div className="w-full bg-white/20 border border-white/30 p-3 rounded-lg">
          <CountryPhoneInputField
            value={phone}
            onValueChange={(v) => setPhone(v)}
          />
          <input type="hidden" name="phone_number" value={phone} />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
