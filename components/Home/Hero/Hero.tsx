import React from "react";
import Image, { StaticImageData } from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";

interface HeroProps {
  image: string | StaticImageData;
}

const Hero = (props: HeroProps) => {
  const { image } = props;

  return (
    <section id="home" className="relative bg-black">
      <div className="h-screen w-full md:h-screen md:max-h-[662px] md:w-[100%]">
        <Image
          className="object-cover absolute"
          src={image}
          fill
          alt="Hero Section Mosque Background"
          placeholder="blur"
          priority
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-70 bg-black" />
        <div className="absolute top-0 right-0 left-0 bottom-0 py-12 flex justify-center items-center w-full px-4 xl:px-0">
          <div className="container mx-auto">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl text-center lg:text-left w-full opacity-100 font-bold lg:max-w-[60%] 2xl:max-w-[70%]">
              GAMPANG BANGET TERNYATA MEMBANGUNKAN RUMAH UNTUK ORANG TUAMU DI
              SURGA
            </h1>
            <h3 className="text-white text-base sm:text-lg md:text-xl font-[400] mt-12 md:mt-20 mb-16 md:mb-12 lg:my-12 text-center lg:text-left lg:max-w-[60%] 2xl:max-w-[70%]">
              Caranya gampang lho, dengan klik tombol dibawah ini dan mari ikut
              berkontribusi membangun Masjid dan Pondok Quran Al Muhkim
            </h3>
            <Link href="#infaq">
              <button className="bg-primary-orange text-white font-medium py-3 px-5 md:py-2 md:px-4 lg:py-3 rounded-lg flex mx-auto lg:mx-0 items-center justify-center">
                Berinfaq Sekarang{" "}
                <AiOutlineArrowDown className="ml-2" size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
