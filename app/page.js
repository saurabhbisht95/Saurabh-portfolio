import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Career";

export default function Home() {
  return (
    <div className="flex flex-col">
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
