import React from "react";
import Hero from "./components/Hero";
import Bar from "./components/Bar";
import Bot from "./components/Bot";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full w-full">
      <Bar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
