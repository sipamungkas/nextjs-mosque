import Image from "next/image";

interface ProgramProps {
  programs: ProgramItemProps[];
}

interface ProgramItemProps {
  image: string;
  title: string;
  desc: string;
}

const Programs = (props: ProgramProps) => {
  const { programs } = props;
  return (
    <section
      id="program"
      className="container mx-auto text-black relative flex items-center flex-col px-4 xl:px-0 pt-20 md:pt-24"
    >
      <h2 className="text-primary-orange text-2xl sm:text-3xl md:text-4xl text-center">
        Program Jariyah Cerdas Al Muhkim
      </h2>
      <span className="w-[100px] min-[450px]:w-[300px] sm:w-[450px] h-[2.5px] border-none bg-primary-green/80 rounded-md mt-2 md:mt-4" />

      <h3 className="px-2 font-medium text-lg mt-6 text-center">
        Program Al Muhkim yang sedang ingin kami fokuskan adalah{" "}
        <b>Mencetak Para Pengasuh Al Quran. </b>Kami memberi nama program kami
        Jariyah Cerdas yang mana di sini kami ingin membangun sebuah Masjid
        Serta Kawasan Al Quran Mengapa Program Jariyah Cerdas ini menjadi salah
        satu fokus kami kedepannya? <br /> <br />
        Karena menurut data, terdapat 65% dari jumlah penduduk Indonesia masih
        buta huruf Al Quran atau masih tidak dapat membaca Al Quran, Subhanallah
        Ini merupakan tanggungjawab kita semua jama&apos;ah sekalian, maka dari
        itu, program ini merupakan sarana bagi jama&apos;ah seperti antum
        sekalian saat ini yang sedang Allah ridhoi untuk beramal sholih, yang
        ingin memberikan persembahan terbaik bagi ummat, terutama bagi para
        Penghafal Al Quran.
        <br />
        <br />
        <i>
          <b>
            &quot;Siapa yang membangun masjid karena Allah walaupun hanya
            selubang tempat burung bertelur atau lebih kecil, maka Allah
            bangunkan baginya (rumah) seperti itu pula di surga.&quot;
          </b>
        </i>{" "}
        (HR. Ibu Majah no. 738)
      </h3>
      <h3 className="px-2 font-medium text-lg my-10 text-center">
        Masjid Al Muhkim memiliki visi menjadi terapan peradaban dengan pondasi
        4 pilar.
      </h3>
      <div className="h-full w-full">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {programs.map((programs) => (
            <li key={programs.title.toString()}>
              <div className="pb-full relative rounded-2xl">
                <Image
                  alt="program-1"
                  src={programs.image}
                  className="h-full w-full object-cover object-center rounded-md md:rounded-xl"
                  fill
                />
              </div>
              <h4 className="font-medium text-lg my-2 md:mt-6 text-center text-primary-green">
                {programs.title}
              </h4>
              <p className="font-normal text-base text-center">
                {programs.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Programs;
