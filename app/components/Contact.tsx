"use client";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  return (
    <motion.div
      className="min-h-[100dvh]"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl tracking-tight">Contact Us</h2>
        <p className="mb-8 text-center font-light sm:text-xl lg:mb-16 dark:text-gray-400">
          Get in touch with me in case you want to do something.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label className="mb-2 block text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-dark shadow-sm"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-dark shadow-sm"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-dark shadow-sm"
              placeholder="Leave a message"
            ></textarea>
          </div>
          <button
            onClick={() => {
              setEmail("");
              setSubject("");
              setDescription("");
            }}
            className="bg-secondary hover:bg-secondary/80 rounded-lg px-5 py-3 text-center text-sm font-medium focus:outline-none focus:ring-4 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </motion.div>
  );
}
