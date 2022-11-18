import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import HeroMosque from "../public/assets/images/hero-section-mosque.png";
import Logo from "../public/assets/images/al-muhkim-60x94.png";
import Programs from "../components/Home/Programs";

export default function Home() {
  return (
    <>
      <Navbar logo={Logo} />
      <Hero image={HeroMosque} />
      <Programs />
    </>
  );
}
