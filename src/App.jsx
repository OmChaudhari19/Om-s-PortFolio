// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";

export default function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}
