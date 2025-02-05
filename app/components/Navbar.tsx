"use client";
import { links } from "../utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="bg-accent/95 fixed left-1/2 top-10 z-50 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-full border border-light/60 px-6 py-3 text-lg backdrop-blur-sm transition-all max-md:hidden md:w-2/3 lg:w-1/2">
      <Link href={"/"}>
        <h2>jsndwrd</h2>
      </Link>
      <ul className="flex gap-2 *:px-4 *:py-2">
        {links.map((link, i) => (
          <li
            key={i}
            className={`${path === link.href ? "bg-secondary/20 rounded-full" : ""}`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  );
}
