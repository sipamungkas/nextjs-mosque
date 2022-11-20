import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

interface InfaqProps {
  detail: {
    waNumber: string;
    waText: string;
    image: {
      title: string;
      url: string | StaticImageData;
    };
  };
}

const text = "";

const Infaq = (props: InfaqProps) => {
  const { detail } = props;
  return (
    <section id="infaq" className="relative bg-black">
      <div className="py-16 md:py-20 min-h-[calc(1024px+6rem)] md:min-h-[100vh+1rem] xl:min-h-[80vh]">
        <Image
          className="object-cover absolute"
          src={detail.image.url}
          fill
          alt={detail.image.title}
          placeholder="blur"
          priority
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-70 bg-black" />
        <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col w-full px-4 xl:px-0 items-center justify-center">
          <div className="container mx-auto items-center justify-center tracking-wider">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl text-center w-full opacity-100 font-bold">
              Jangan Sia-siakan Kesempatan Cemerlang Ini
            </h1>
            <h3 className="text-white text-base sm:text-lg md:text-xl font-[400] mt-12 md:mt-20 mb-16 md:mb-12 lg:my-12 text-center">
              Mari berkontribusi untuk membangun Peradaban Islam di tempat ini
              yang Insya Allah menjadi{" "}
              <strong>amal jariyah untuk bekal ke akhirat kelak.</strong>
            </h3>
            <h3 className="text-white text-sm sm:text-base md:text-lg font-[400] mt-12 md:mt-20 mb-16 md:mb-12 lg:my-12 text-center l">
              <em>
                <strong>
                  “Dan infakkanlah sebagian dari apa yang telah Kami berikan
                  kepadamu sebelum kematian datang kepada salah seorang di
                  antara kamu; lalu dia berkata (menyesali),“Ya Tuhanku,
                  sekiranya Engkau berkenan menunda (kematian)ku sedikit waktu
                  lagi, maka aku dapat bersedekah dan aku akan termasuk
                  orang-orang yang saleh.”
                </strong>
              </em>
              <br /> QS. Al-Munafiqun (63) : 10
            </h3>
            <Link
              href={`https://wa.me/${detail.waNumber}?text=${detail.waText}`}
            >
              <button className="mx-auto bg-[#25D366] text-white font-medium py-3 px-5 md:py-2 md:px-4 rounded flex items-center justify-center">
                Berinfaq Sekarang{" "}
                <AiOutlineWhatsApp className="ml-2" size={20} />
              </button>
            </Link>
            <h3 className="text-white text-sm sm:text-base md:text-lg font-normal leading-loose mt-12 md:mt-20 md:mb-12 lg:my-12 text-center">
              Alhamdulillah
              <br />
              Jazakumullah Khoiran Jazaa atas support, do’a dan infaq bantuan
              jama’ah sekalian, baiklah Allah Subhanahu Wa Ta’ala memberi
              ganjaran atas semua kebaikan dan keikhlasan jamaa’ah sekalian,
              Barakallahu fiikum
              <br />
              <br />
              Catatan : <br />
              <strong>
                Program Jariyah Cerdas ini juga akan dialokasikan untuk
                Operasional Masjid Al Muhkim dan Program Sosial Dakwah Quran
                Lainnya.
              </strong>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infaq;
