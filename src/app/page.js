import { AboutMe } from "@/components/AboutMe";
import { NavBar } from "../components/NavBar";
import { Introduction } from "@/components/Introduction";
import { Skills } from "@/components/Skills";
import {Experience} from "../components/Experience";
import { Work } from "@/components/Work";
import {Footer} from "../components/Footer";
export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <NavBar />
      <Introduction />
      <AboutMe />
      <Skills/>
      <Experience/>
      <Work/>
      <Footer/>

    </div>
  );
}
