import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-bluePrim pt-[56px] pb-[20px]">
      <div className="max-w-7xl mx-auto">
        <div className="md:text-[20px]">
          <Link href="/">
            <span className="flex items-center gap-1">
              <Image src={Logo} alt="logo" />
              <span className="font-b-600">Event-go</span>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
