import * as motion from "motion/react-client";
import Link from "next/link";
import { certifications, stack } from "../utils/data";
export default function Certifications() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h1 className="text-center">
        Skills & <span className="text-secondary">Certifications</span>
      </h1>
      <div className="grid grid-cols-1 *:p-6 md:grid-cols-2 lg:place-items-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.2 }}
        >
          <h2 className="my-2 p-1">Certifications</h2>
          {certifications.map((link, i) => (
            <div key={i} className="group p-1 transition-all hover:bg-zinc-900">
              <Link
                href={link.href}
                target="_blank"
                className="group flex w-fit items-center gap-2 text-xl font-medium group-hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                {link.title}
              </Link>
              <p className="text-light/70">{link.desc}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.4 }}
        >
          <h2 className="my-2 p-1">Tech I use</h2>
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-6">
            {stack.map((item, i) => (
              <item.icon key={i} className="size-8 md:size-14 lg:size-16" />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
