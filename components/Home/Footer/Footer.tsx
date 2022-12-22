interface FooterProps {
  copyright: string;
}

import Link from "next/link";

const Footer = (props: any) => {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4 md:px-0 flex flex-col items-center py-4 lg:py-8">
        <h6 className="text-sm font-light">
          © Masjid Al Muhkim {new Date().getFullYear()}. All Rights Reserved
        </h6>
        <h6 className="text-sm font-light">
          Sample By{" "}
          <Link
            className="text-primary-orange font-normal"
            href={"https://sipamungkas.com"}
          >
            Sipamungkas
          </Link>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
