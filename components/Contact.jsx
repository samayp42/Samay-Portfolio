import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

import { slideIn } from "../utils/motion";
import { Toaster, toast } from 'react-hot-toast';

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    setForm({ ...form, [name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Log form data for debugging (without exposing sensitive info)
      console.log('Submitting form data...');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      // Check if response has content before parsing
      const text = await response.text();
      const data = text.length > 0 ? JSON.parse(text) : {}; // Handle empty responses

      if (!response.ok) {
        console.error('Server response error:', data);
        throw new Error(data.detail || data.message || 'Something went wrong');
      }

      setForm({
        name: '',
        email: '',
        message: '',
      });
      
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(`Failed to send message: ${error.message || 'Please check if the server is configured correctly'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
        id="contact"
      >
        <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
        <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-ctnPrimaryDark font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What is your good name?"
              className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-ctnPrimaryDark  font-medium mb-4">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What is your email address?"
              className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-ctnPrimaryDark  font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What do you want to say?"
              className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
            />
          </label>

          <button
            type="submit"
            className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </>
  );
}

export default Contact;
