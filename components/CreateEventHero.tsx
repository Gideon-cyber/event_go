import Image from "next/image";
import React from "react";
import Header from "./Header";

type Props = {};

const CreateEventHero = (props: Props) => {
  return (
    <div className="py-[16px] px-[16px] md:py-[20px] md:px-[60px] h-[50vh] md:h-[60vh] w-full relative animate-ChangeBg sm:bg-cover bg-center bg-bg-hero">
      <Header />
      <div className="h-full max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[20px]">
          <div className="flex items-start flex-col gap-[26px] flex-1">
            <h1 className="text-[30px] md:text-[50px] md:leading-[69px] font-b-700 text-center">
              Create the next biggest event here
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventHero;
