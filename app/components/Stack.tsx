"use client";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export default function Stack() {
  const stacks = [
    RiHtml5Fill,
    RiCss3Fill,
    RiJavascriptFill,
    RiReactjsFill,
    RiNextjsFill,
    RiTailwindCssFill,
    FaPython,
    SiCplusplus,
  ];
  return (
    <div className="flex items-center gap-4 *:rounded-md *:p-2 *:aspect-square animate-scroll">
      {[...stacks, ...stacks].map((Stack, i) => (
        <div key={i}>
          <Stack size={32} />
        </div>
      ))}
    </div>
  );
}
