import React from "react";
import Image from "next/image";
import Picture from "../public/event2.svg";
import ButtonComponent from "./Button";

type Props = {};

const Cta = (props: Props) => {
  return (
    <div className="bg-[#EEE1FF] flex items-center justify-center">
      <div className="flex items-center max-w-7xl mx-auto flex-col-reverse md:flex-row">
        <div className="flex-1 relative">
          <Image src={Picture} alt="picture" className="mt-[-40px]" />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="font-b-700 text-[34px] leading-[44px] text-black">
            Make your own Event
          </h3>
          <span className="text-[14px] leading-[23px] text-black">
            Make your own event here by clicking the button below
          </span>
          <ButtonComponent text="Create Event" bg={true} />
        </div>
      </div>
    </div>
  );
};

export default Cta;
