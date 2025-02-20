import profile from "@/public/profile.jpg";
import Image from "next/image";
import * as motion from "motion/react-client";

function Jumbotron() {
  const transition = { ease: "easeInOut", duration: 0.8, delay: 0.5 };
  return (
    <div className="mx-auto flex h-[100dvh] items-center gap-8 max-md:min-h-[100dvh] max-md:flex-col max-md:justify-center max-md:pt-4">
      <motion.div
        className="px-4 md:h-[150dvh] md:w-1/3 md:py-24"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}
      >
        <Image
          src={profile}
          alt="profile"
          className="h-36 object-cover md:sticky md:top-1/2 md:h-72 md:-translate-y-1/2"
        />
      </motion.div>
      <motion.div
        className="flex h-full flex-1 flex-col justify-center gap-2 pe-6 text-lg font-medium max-md:w-full max-md:justify-start max-md:px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <p className="max-md:text-center">Hello world, I am</p>
        <h1>Jason Edward Salim</h1>
        <p className="text-light/70 max-md:text-center max-md:text-sm">
          a freshman majoring in computer science at Bandung Institute of
          Technology. I&apos;m currently interested in full-stack development,
          where I create both frontend and backend of web applications using
          various tech-stack. In addition to my studies, I am passionate about
          problem-solving and coding, which help me sharpen my programming
          skills. I also love collaborating with peers on projects, as I believe
          teamwork fosters creativity and innovation. Outside of academics, I
          enjoy exploring new technologies and keeping up with industry trends,
          which inspires me to continuously learn and grow in the field of
          software development.
        </p>
      </motion.div>
    </div>
  );
}

export default Jumbotron;
