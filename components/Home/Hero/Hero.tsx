import React from "react";
import Image, { StaticImageData } from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";

interface HeroProps {
  image: string | StaticImageData;
}

const Hero = (props: HeroProps) => {
  const { image } = props;

  return (
    <section id="hero-section" className="relative">
      <div className="absolute h-screen w-full md:h-screen md:max-h-[662px] md:w-screen">
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
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center lg:text-left w-full opacity-100 font-bold lg:max-w-[60%] 2xl:max-w-[70%]">
              GAMPANG BANGET TERNYATA MEMBANGUNKAN RUMAH UNTUK ORANG TUAMU DI
              SURGA
            </h1>
            <h3 className="text-white text-base sm:text-xl md:text-2xl font-[400] mt-20 mb-20 md:mb-12 lg:my-12 text-center lg:text-left lg:max-w-[60%] 2xl:max-w-[70%]">
              Caranya gampang lho, dengan klik tombol dibawah ini dan mari ikut
              berkontribusi membangun Masjid dan Pondok Quran Al Muhkim
            </h3>
            <button className="bg-primary-orange hover:bg-green-900 text-white font-medium py-3 px-5 md:py-2 md:px-4 rounded flex mx-auto lg:mx-0 items-center justify-center">
              Berinfaq Sekarang{" "}
              <AiOutlineArrowDown className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
