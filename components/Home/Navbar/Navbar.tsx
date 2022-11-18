import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  logo: StaticImageData;
}

const Navbar = (props: NavbarProps) => {
  const { logo } = props;

  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="fixed w-full h-20 z-[100] ease-in-out duration-300">
      <div className="flex justify-between items-center w-full h-full px-2 md:px-5 xl:px-16">
        <Link href={"/#home"}>
          <div className="relative h-[60px] md:h-[60px] w-[56px] md:w-[35px]">
            <Image
              className="object-contain"
              src={logo}
              fill
              alt="Masjid Al Muhkim Logo"
            />
          </div>
        </Link>
        <div>
          <ul className="hidden md:flex text-white tracking-wide">
            <li className="ml-8 lg:ml-10 text-sm uppercase hover:border-0">
              <Link href={"/#home"}>Home</Link>
            </li>
            <li className="ml-8 lg:ml-10 text-sm uppercase hover:border-0">
              <Link href={"/#program"}>Program</Link>
            </li>
            <li className="ml-8 lg:ml-10 text-sm uppercase hover:border-0">
              <Link href={"/#dukungan"}>Dukungan</Link>
            </li>
            <li className="ml-8 lg:ml-10 text-sm uppercase hover:border-0">
              <Link href={"/#dukungan"}>Progres Pembangunan</Link>
            </li>
            <li className="ml-8 lg:ml-10 text-sm uppercase hover:border-0">
              <Link href={"/#infaq"}>Infaq Sekarang!</Link>
            </li>
          </ul>

          {/* Humberger Icon Mobile */}
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu color="white" size={30} />
          </div>

          {/* Mobile Menu and Overlay */}
          <div
            className={`md:hidden fixed top-0 w-full h-screen bg-black/90 duration-300 ${
              showNav ? "left-0" : "left-[-100%]"
            }`}
          >
            {/* Drawer Menu */}
            <div
              className={`fixed top-0 w-full h-screen p-10 ease-in-out duration-500 ${
                showNav ? "left-0" : "left-[-100%]"
              }`}
            >
              <div className="flex flex-col items-center">
                <Link href={"/#home"}>
                  <div className="relative h-[80px] md:h-[60px] w-[80px] md:w-[35px]">
                    <Image
                      className="object-contain"
                      src={logo}
                      fill
                      alt="Masjid Al Muhkim Logo"
                      color="black"
                    />
                  </div>
                </Link>

                <ul className="flex flex-col items-center md:hidden text-white tracking-wide mt-12">
                  <li className="my-8 text-lg uppercase font-semibold ease-in-out duration-700">
                    <Link href={"/#home"}>Home</Link>
                  </li>
                  <li className="my-8 text-lg uppercase font-semibold ease-in-out duration-700">
                    <Link href={"/#program"}>Program</Link>
                  </li>
                  <li className="my-8 text-lg uppercase font-semibold ease-in-out duration-700">
                    <Link href={"/#dukungan"}>Dukungan</Link>
                  </li>
                  <li className="my-8 text-lg uppercase font-semibold ease-in-out duration-700">
                    <Link href={"/#dukungan"}>Progres Pembangunan</Link>
                  </li>
                  <li className="my-8 text-lg uppercase font-semibold ease-in-out duration-700">
                    <Link href={"/#infaq"}>Infaq Sekarang!</Link>
                  </li>
                </ul>
                <div
                  onClick={handleNav}
                  className="cursor-pointer my-8 rounded-full bg-white p-2"
                >
                  <AiOutlineClose color="black" size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;