import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import HeroMosque from "../public/assets/images/hero-section-mosque.png";
import Logo from "../public/assets/images/al-muhkim-60x94.png";
import Programs from "../components/Home/Programs";

const programs = [
  {
    title: "Baitullah",
    desc: "Meningkatkan ketaqwaan masyarakat sekitar.",
    image: "/assets/images/program-1.jpg",
  },
  {
    title: "Baitul Quran",
    desc: "Memfasilitasi pendidikan Al - Qur’an untuk masyarakat sekitar.",
    image: "/assets/images/program-2.jpg",
  },
  {
    title: "Baitul Maal",
    desc: "Menjadi partner UMKM maysarakat sekitar.",
    image: "/assets/images/program-3.jpg",
  },
  {
    title: "Baitul Muamalah",
    desc: "Menjadikan masjid sebagai tempat muamalah kemaysarakatan 24 jam, baik online maupun offline.",
    image: "/assets/images/program-4.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar logo={Logo} />
      <Hero image={HeroMosque} />
      <Programs programs={programs} />
    </>
  );
}
