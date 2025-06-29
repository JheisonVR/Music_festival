import React from "react";
//import Image from "next/image";
import { Hero, Navbar, Headers, ThemeButton } from "@/components/UX/UI";

export default function Home() {
  return (
    <React.Fragment>
      <ThemeButton/>
      <Navbar/>
      <Hero/>
      <Headers/>
    </React.Fragment>
  );
}
