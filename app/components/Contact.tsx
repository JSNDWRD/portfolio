"use client";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          subject: subject,
          message: description,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setSubject("");
        setDescription("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="mb-2 block text-sm font-medium">Your email</label>
            <input
              name="email"
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
              name="subject"
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
              name="message"
              id="message"
              rows={6}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-dark shadow-sm"
              placeholder="Leave a message"
              required
            ></textarea>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              disabled={sending}
              className={`rounded-lg bg-secondary px-5 py-3 text-center text-sm font-medium hover:bg-secondary/80 focus:outline-none focus:ring-4 sm:w-fit ${sending ? "cursor-not-allowed" : ""}`}
            >
              Send message
            </button>
            <div role="status">
              <svg
                aria-hidden="true"
                className={`${sending ? "block" : "hidden"} h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600`}
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            {success && <p className="text-green-500">Success</p>}
            {error && <p className="text-red-600">Error</p>}
          </div>
        </form>
      </div>
    </motion.div>
  );
}
