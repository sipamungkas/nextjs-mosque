import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  image: string | StaticImageData;
}

const Hero = (props: HeroProps) => {
  const { image } = props;

  return (
    <section id="hero-section" className="relative">
      <div className="absolute h-[1200px] w-[800px] md:h-screen md:max-h-[500px] md:w-screen">
        <Image
          className="object-cover"
          src={image}
          fill
          alt="Hero Section Mosque Background"
          placeholder="blur"
          priority
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-70 bg-black" />
        <div className="absolute top-0 right-0 left-0 bottom-0 py-12 flex justify-center items-center w-full ">
          <div className="max-w-[80%] md:max-w-[90%] 2xl:max-w-[80%]">
            <h1 className="text-white text-4xl md:text-[1.75em] xl:text-[2.3em] xl:leading-[2.75rem] text-center lg:text-left w-full opacity-100 font-bold lg:max-w-[60%] 2xl:max-w-[70%]">
              GAMPANG BANGET TERNYATA MEMBANGUNKAN RUMAH UNTUK ORANG TUAMU DI
              SURGA
            </h1>
            <h3 className="text-white font-[400] text-[1.5rem] md:text-[1.175rem] xl:text-[2.1rem] mt-20 mb-20 md:mb-12 lg:my-12 text-center lg:text-left lg:max-w-[60%] 2xl:max-w-[70%]">
              Caranya gampang lho, dengan klik tombol dibawah ini dan mari ikut
              berkontribusi membangun Masjid dan Pondok Quran Al Muhkim
            </h3>
            <button className="bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-5 md:py-2 md:px-4 rounded flex mx-auto lg:mx-0">
              Berinfaq Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
