import About from "@/components/landingpage/About";
import Gallery from "@/components/landingpage/gallery";
import Hero from "@/components/landingpage/Hero";
import Menu from "@/components/landingpage/Menu";
import SpecialFlavors from "@/components/landingpage/SpecialFlavors";
import Specials from "@/components/landingpage/Specials";
import Why from "@/components/landingpage/Why";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Specials />
      <Menu />
      {/* <SpecialFlavors /> */}
      <Gallery />
      <Why />
    </div>
  );
};

export default page;
