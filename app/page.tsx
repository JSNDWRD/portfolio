import Certifications from "./components/Certifications";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Jumbotron />
      <Projects />
      <Certifications />
    </div>
  );
}
