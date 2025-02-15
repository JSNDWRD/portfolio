"use client";
import { links } from "../utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`${path.substring(0, 6) == "/blog/" ? "top-0 rounded-none border-b-dark/60 bg-light text-dark lg:w-full lg:border-b" : "bg-accent lg:top-10 lg:w-1/2 lg:rounded-full lg:border lg:bg-accent/95"} fixed left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-between border-b border-light/60 px-6 py-3 text-lg backdrop-blur-sm transition-all max-lg:h-14`}
    >
      <Link href={"/"}>
        <h2>jsndwrd</h2>
      </Link>
      <ul className="flex gap-2 *:px-4 *:py-2 max-lg:hidden">
        {links.map((link, i) => (
          <li
            key={i}
            className={`${path === link.href ? "rounded-full bg-secondary/20" : ""}`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/contact"} className="max-lg:hidden">
        Contact
      </Link>
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <div
          className={`fixed left-0 top-14 h-[100dvh] w-full bg-accent ${open ? "opacity-100" : "hidden opacity-0"} p-6 transition-all lg:hidden`}
        >
          <ul className="flex flex-col gap-2 *:px-4 *:py-2">
            {links.map((link, i) => (
              <li
                onClick={() => {
                  setOpen(false);
                }}
                key={i}
                className={`${path === link.href ? "rounded-full bg-secondary/20" : ""}`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li
              onClick={() => {
                setOpen(false);
              }}
              className={`${path === "/contact" ? "rounded-full bg-secondary/20" : ""} px-4 py-2`}
            >
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
