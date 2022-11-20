interface ProgressProps {
  images: ImageProps[];
}

interface ImageProps {
  title: string;
  imageUrl: string;
}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Image from "next/image";

const Progress = (props: ProgressProps) => {
  const { images } = props;

  return (
    <section
      id="progress"
      className="container mx-auto px-4 xl:px-0 pt-20 md:pt-24 relative flex flex-col items-center"
    >
      <h2 className="text-primary-orange text-2xl sm:text-3xl md:text-4xl text-center">
        Progress Pembangunan
      </h2>
      <span className="w-[100px] min-[450px]:w-[300px] sm:w-[450px] lg:w-[600px] h-[4px] border-none bg-primary-green/80 rounded-md mt-2 md:mt-4" />
      <div className="my-16 h-full w-full">
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="container"
          spaceBetween={50}
          slidesPerView={"auto"}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            bulletClass: `swiper-pagination-bullet`,
          }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {images.map((data, index) => (
            <SwiperSlide key={data.imageUrl}>
              <div
                className="pb-full relative rounded-2xl"
                key={data.title.toString()}
              >
                <Image
                  alt={data.title}
                  src={data.imageUrl}
                  className="h-full w-full object-cover object-center rounded-md md:rounded-xl"
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Progress;
