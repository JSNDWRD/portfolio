"use client";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useEffect } from "react";
import Image from "next/image";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";
import Link from "next/link";
import Stack from "./components/Stack";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    const bentoBoxes = document.querySelectorAll(".bentoBox");
    bentoBoxes.forEach((box) => {
      Draggable.create(box, {
        type: "x,y",
        edgeResistance: 1.1,
        bounds: window,
        inertia: true,
        dragResistance: 0.975,
        onDragEnd: function () {
          gsap.to(box, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
        },
      });
    });
  }, []);

  const socials = [
    { url: "https://www.instagram.com/jsndwrd", img: instagram },
    { url: "https://www.linkedin.com/in/jason-edward-salim", img: linkedin },
    { url: "https://www.github.com/JSNDWRD", img: github },
  ];
  return (
    <div>
      <div className="h-screen p-6 grid lg:grid-cols-8 lg:grid-rows-2 gap-4">
        <div className="lg:col-span-3 bentoBox ">
          <p className="lg:text-4xl xl:text-5xl font-medium">
            Hello! I am Jason Edward Salim, a web developer enthusiast based in
            Indonesia.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-rows-4 gap-4">
          <div className="bentoBox  row-span-3">
            <h2 className="lg:text-2xl xl:text-3xl font-medium mb-2">Skills</h2>
            <div>
              <ul className="*:font-medium">
                <li>Front End Engineering</li>
                <li>Basic Back End Engineering</li>
                <li>Programming</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
          <div className="bentoBox  row-span-1 flex items-center overflow-x-hidden overflow-y-hidden">
            <h2 className="absolute opacity-0 hover:opacity-100 transition-opacity lg:text-xl xl:text-2xl font-medium bg-light/20 backdrop-blur-sm z-10 h-full flex items-center justify-center w-full left-0">
              {`<Tech Stack />`}
            </h2>
            <Stack />
          </div>
        </div>
        <div className="lg:col-span-3 bentoBox ">
          <h2 className="lg:text-2xl xl:text-3xl mb-2 font-medium">
            Certifications
          </h2>
          <div>
            <ul className="*:font-medium">
              <li>
                <Link
                  href={
                    "https://www.freecodecamp.org/certification/jsndwrd/responsive-web-design"
                  }
                  target="_blank"
                  className="flex items-center gap-2 group hover:underline transition-transform"
                >
                  Responsive Web Design
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.freecodecamp.org/certification/jsndwrd/responsive-web-design"
                  }
                  target="_blank"
                  className="flex items-center gap-2 group hover:underline transition-transform"
                >
                  Javascript Algorithm and Data Structures
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 grid-rows-3 *:w-full gap-4">
          <div className="bentoBox  row-span-2 flex flex-col">
            <h2 className="lg:text-2xl xl:text-3xl font-medium mb-2">
              Education
            </h2>
            <p className="font-medium">Institut Teknologi Bandung, BSc</p>
            <p>2024 - now</p>
            <p className="font-medium">SMAS Sutomo 1 Medan</p>
            <p>2021 - 2024</p>
          </div>
          <div className="bentoBox  row-span-1 flex items-center gap-4">
            <div className="flex-1">
              <h2 className="lg:text-base xl:text-lg font-medium">
                Let's talk!
              </h2>
            </div>
            {socials.map((social, i) => (
              <Link
                key={i}
                href={social.url}
                target="_blank"
                className="border-2 border-dark/10 hover:border-dark transition-colors shadow-sm rounded-md p-0.5"
              >
                <Image src={social.img} width={36} alt="social-media-icon" />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 bentoBox "></div>
      </div>
    </div>
  );
}
