import About from "@/components/landingpage/About";
import Hero from "@/components/landingpage/Hero";
import Menu from "@/components/landingpage/Menu";
import Specials from "@/components/landingpage/Specials";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Specials />
      <Menu />
    </div>
  );
};

export default page;
