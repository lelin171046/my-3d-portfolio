import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_jjx4f0g",       // ✔ Your Service ID
        "template_wvw2j3u",     // ✔ Your Template ID
        formRef.current,
        "xcAnw4LBrBbG7N21T" // ✔ Your Private Key (use Public Key normally)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded h-32"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {sent && (
        <p className="mt-4 text-green-600 text-center font-medium">
          ✔ Message sent successfully!
        </p>
      )}
    </div>
  );
};

export default ContactForm;
