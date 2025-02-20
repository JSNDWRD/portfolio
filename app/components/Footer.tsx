"use client";
import footer from "@/public/footer.png";
import Image from "next/image";
import { links, social } from "../utils/data";
import Link from "next/link";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.substring(0, 6) !== "/blog/") {
    return (
      <footer className="relative mt-36">
        <Image
          src={footer}
          alt="footer"
          className="h-72 object-cover object-top max-md:blur-sm"
        />
        <motion.div
          className="absolute top-0 z-20 flex h-full w-full gap-6 p-6 text-xl md:gap-24"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <div>
            <h2>Quick Links</h2>
            <ul className="flex flex-col gap-2 py-2">
              {links.map((link, i) => (
                <li
                  key={i}
                  className={`transition-colors hover:text-secondary`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Social Media</h2>
            <ul className="flex flex-col gap-2 py-2">
              {social.map((link, i) => (
                <li
                  key={i}
                  className={`transition-colors hover:text-secondary`}
                >
                  <Link href={link.href} target="_blank">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </footer>
    );
  }
}
