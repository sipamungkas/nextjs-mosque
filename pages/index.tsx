import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import HeroMosque from "../public/assets/images/hero-section-mosque.png";
import Logo from "../public/assets/images/al-muhkim-60x94.png";
import Programs from "../components/Home/Programs";
import Support from "../components/Home/Support";
import Progress from "../components/Home/Progress";
import Infaq from "../components/Home/Infaq";
import Footer from "../components/Home/Footer";

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

const supportData = [
  {
    title: "Muzammil Hasballah",
    desc: "Qori' Ammar TV.",
    thumbnail: "/assets/images/support-muzammil.png",
    videoUrl:
      "https://masjidalmuhkim.id/wp-content/uploads/2022/11/R-Muzammil.mp4",
  },
  {
    title: "Dewa Eka Prayoga",
    desc: "Dewa Selling, Business Owner dengan lebih dari 60 Brand, Best Seller Author",
    thumbnail: "/assets/images/support-dewa-eka-prayoga.png",
    videoUrl:
      "https://masjidalmuhkim.id/wp-content/uploads/2022/11/R-Dewa-Eka.mp4",
  },
  {
    title: "Ustadz H. Kiki Supardi",
    desc: "Pimpinan Masjid Ismuhu Yahya",
    thumbnail: "/assets/images/support-ustadz-h-kiki-supardi.png",
    videoUrl:
      "https://masjidalmuhkim.id/wp-content/uploads/2022/11/R-Ustadz-H.Kiki-Supardi.mp4",
  },
  {
    title: "Ridwan Abadi",
    desc: "Pengasuh Masjid Utsman bin Affan, Founder Sukses Besar Community",
    thumbnail: "/assets/images/support-ridwan-abadi.png",
    videoUrl:
      "https://masjidalmuhkim.id/wp-content/uploads/2022/11/R-Uts-Ridwan-Abadi1.mp4",
  },
  {
    title: "Ustadz Rendy Saputra",
    desc: "Pengasuh Jejaring Masjid Abdurrahman bin Auf, Pengusaha Muhsinin Club, Co Founder DeEp-F",
    thumbnail: "/assets/images/support-ustadz-rendy-saputra.png",
    videoUrl:
      "https://masjidalmuhkim.id/wp-content/uploads/2022/11/R-Ust-Rendy1.mp4",
  },
  {
    title: "Irfa Rizki Haas, M.Ag",
    desc: "Founder dan Pembina Kajian Haas",
    thumbnail: "/assets/images/support-ustadz-irfan-rizki.png",
    videoUrl:
      "https://masjidalmuhkim.id/wp-content/uploads/2022/11/R-Ustadz-Irfan.mp4",
  },
];

const progresImages = [
  { title: "Progress Image 1", imageUrl: "/assets/images/progress-1.jpg" },
  { title: "Progress Image 1", imageUrl: "/assets/images/progress-2.jpg" },
  { title: "Progress Image 1", imageUrl: "/assets/images/progress-3.jpg" },
  { title: "Progress Image 1", imageUrl: "/assets/images/progress-4.jpg" },
  { title: "Progress Image 1", imageUrl: "/assets/images/progress-5.jpg" },
  { title: "Progress Image 1", imageUrl: "/assets/images/progress-6.jpg" },
  { title: "Progress Image 1", imageUrl: "/assets/images/progress-7.jpg" },
];

const InfaqData = {
  waNumber: "6285172421278",
  waText:
    "Assalamu%27alaikum%20Warahmatullahi%20Wabarakaatuh.Kak%2C%20saya%20mau%20donasi%2C%20bagaimana%20yah%20caranya%3F",
  image: {
    title: "Infaq Mosque Background",
    url: HeroMosque,
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Masjid Al Muhkim | sample by sipamungkas.dev</title>
      </Head>
      <Navbar logo={Logo} />
      <Hero image={HeroMosque} />
      <Programs programs={programs} />
      <Support data={supportData} />
      <Progress images={progresImages} />
      <Infaq detail={InfaqData} />
      <Footer />
    </>
  );
}
