import Image from "next/image";
import { useState } from "react";

import { AiOutlinePlayCircle, AiFillCloseCircle } from "react-icons/ai";

interface SupportProps {
  data: SupportItem[];
}

interface SupportItem {
  title: string;
  desc: string;
  videoUrl: string;
  thumbnail: string;
}

const Support = (props: SupportProps) => {
  const { data } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [video, setVideo] = useState<string>("");

  const handleModal = (videoUrl: string) => {
    setModal(!modal);
    setTimeout(() => setVideo(videoUrl), 250);
  };

  return (
    <>
      <section
        id="support"
        className="container mx-auto px-4 xl:px-0 pt-20 md:pt24 relative flex flex-col items-center"
      >
        <h2 className="text-primary-orange text-2xl sm:text-3xl md:text-4xl text-center">
          Dukungan Mereka ke Al Muhkim
        </h2>
        <span className="w-[100px] min-[450px]:w-[300px] sm:w-[450px] lg:w-[600px] h-[4px] border-none bg-primary-green/80 rounded-md mt-2 md:mt-4" />

        <div className="h-full w-full mt-10">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-14">
            {data.map((item) => (
              <li className="group" key={item.title.toString()}>
                <div
                  onClick={() => handleModal(item.videoUrl)}
                  className="relative rounded-2xl h-80 cursor-pointer"
                >
                  <Image
                    alt={item.title}
                    src={item.thumbnail}
                    className="h-full w-full object-cover object-center rounded-md md:rounded-xl"
                    fill
                  />
                  <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                    <AiOutlinePlayCircle
                      className="group-hover:transform group-hover:scale-125 duration-150 opacity-80"
                      size={50}
                      color={"white"}
                    />
                  </div>
                </div>
                <h4 className="font-medium text-lg my-2 md:mt-6 text-center text-primary-green">
                  {item.title}
                </h4>
                <p className="font-normal text-base text-center">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {modal && !!video && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[101] bg-black/60 flex items-center justify-center"
            onClick={() => handleModal("")}
          >
            <video controls className="cursor-pointer h-[80%] w-auto relative">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="h-[80%]">
              <div className="absolute translate-y-4 sm:translate-y-2 -translate-x-16">
                <AiFillCloseCircle
                  color="white"
                  size={50}
                  className="opacity-75"
                />
              </div>
            </div>
          </div>
        )}
      </section>
      <div className="py-16 md:pt24 bg-primary-orange">
        <h4 className="container mx-auto px-4 xl:px-52 font-normal text-xl text-white text-center">
          Seperti yang kita tahu, pembangunan sebuah masjid memerlukan biaya
          yang tak sedikit. Namun, ini tak menghentikan niat kita untuk memulai
          langkah kecil yang bermanfaat seperti membangun Masjid Al Muhkim.
          Masjid ini juga akan menjadi fasilitas Para Santri Penghafal
          Al-Qur&apost;an dikader menjadi da&apost;i di bidangnya masing-masing.
          <br /> <br />{" "}
          <b>
            Tantangannya adalah, tentu Kita sama-sama paham bahwa membangun
            peradaban seperti itu butuh biaya yang tidak sedikit.{" "}
          </b>
          <br /> <br />
          Maka izinkan Kami menawarkan peluang kebaikan ini ke pada{" "}
          <b>#OrangBaik</b> seperti Anda untuk turut mendukung dan
          berkontribusi.
        </h4>
      </div>
    </>
  );
};

export default Support;
