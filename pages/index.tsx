import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Home/Hero";
import HeroMosque from "../public/assets/images/hero-section-mosque.png";

export default function Home() {
  return <Hero image={HeroMosque} />;
}
