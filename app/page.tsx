import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 max-lg:pt-20">
      <Jumbotron />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
