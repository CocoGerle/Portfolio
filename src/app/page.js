"use client";
import { useState } from "react";
import {
  AboutMe,
  NavBar,
  Introduction,
  Skills,
  Experience,
  Work,
  Footer,
} from "@/components";
export default function Home(props) {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className={state ? "dark" : " "}>
      <div className="w-screen h-screen">
        <NavBar toggleDarkMode={handleClick} state={state} />
        <Introduction state={state} />
        <AboutMe />
        <Skills state={state} />
        <Experience />
        <Work state={state} />
        <Footer state={state} />
      </div>
    </div>
  );
}
