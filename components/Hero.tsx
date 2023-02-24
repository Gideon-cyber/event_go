import Image from "next/image";
import React from "react";
import Header from "./Header";
import Picture from "../public/kpop.svg";
import ButtonComponent from "./Button";

type Props = {};

const Hero = (props: Props) => {
  
  return (
    <div className="py-[16px] px-[16px] md:py-[20px] md:px-[60px] h-screen w-full relative animate-ChangeBg sm:bg-cover bg-center bg-bg-hero">
      <Header />
      <div className="h-full max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[20px]">
          <div className="flex-1">
            <Image src={Picture} alt="hero-Image" />
          </div>
          <div className="flex items-start flex-col gap-[26px] flex-1">
            <h1 className="text-[30px] md:text-[40px] md:leading-[49px] font-b-700">
              SBS MTV The Kpop Show Ticket Package
            </h1>
            <p className="text-[14px] md:text-[18px] md:leading-[130%]">
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </p>
            <div className="flex items-center gap-4">
              <ButtonComponent bg={true} text="Get Ticket" />
              <ButtonComponent bg={false} text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
