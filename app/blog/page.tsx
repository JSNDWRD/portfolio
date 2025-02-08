import Image from "next/image";
import background from "@/public/card.png";

export default function page() {
  return (
    <div className="flex h-[100dvh] justify-center">
      <Image
        src={background}
        alt="background"
        className="h-[100dvh] max-h-[100dvh] object-cover object-center"
      />
      <h1 className="absolute top-1/2 -translate-y-1/2 self-center">
        Developing...
      </h1>
    </div>
  );
}
