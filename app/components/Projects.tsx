import Image from "next/image";
import Link from "next/link";
import { projects } from "../utils/data";

import * as motion from "motion/react-client";

export default function Projects() {
  return (
    <motion.div
      className="min-h-[100dvh]"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h1 className="text-center">
        Recent <span className="text-secondary">Projects</span>
      </h1>
      <div className="mx-auto grid w-fit gap-6 px-6 py-16 *:mx-auto md:grid-cols-2">
        {projects.map((project, i) => (
          <Link
            key={i}
            href={project.link}
            target="_blank"
            className="group flex flex-col items-center rounded-lg border border-gray-200 bg-light shadow-sm hover:bg-gray-100 max-lg:max-w-96 lg:h-64 lg:max-w-xl lg:flex-row"
          >
            <Image
              className="h-48 w-full rounded-t-lg object-cover lg:h-full lg:w-48 lg:rounded-none lg:rounded-s-lg"
              src={project.src}
              alt=""
            />
            <div className="flex flex-col justify-start gap-4 p-4 leading-normal lg:h-full">
              <div className="relative self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 text-dark transition-transform duration-300 group-hover:-rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div>
                <h2 className="mb-2 border-b pb-2 text-2xl font-bold tracking-tight text-dark">
                  {project.title}
                </h2>
                <p className="mb-3 font-normal text-gray-700">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
