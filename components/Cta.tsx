import React from "react";
import Image from "next/image";
import Picture from "../public/event2.svg";
import ButtonComponent from "./Button";
import Link from "next/link";

type Props = {};

const Cta = (props: Props) => {
  return (
    <div className="bg-[#EEE1FF] flex items-center justify-center p-[16px] md:p-0">
      <div className="flex items-center max-w-7xl mx-auto flex-col-reverse md:flex-row">
        <div className="flex-1 relative">
          <Image src={Picture} alt="picture" className="md:mt-[-40px] mt-4" />
        </div>
        <div className="flex flex-1 flex-col gap-2 md:gap-4">
          <h3 className="font-b-700 text-[24px] leading-[30px] md:text-[34px] md:leading-[44px] text-black">
            Make your own Event
          </h3>
          <span className="text-[14px] leading-[23px] text-black">
            Make your own event here by clicking the button below
          </span>
          <Link href="create-event">
            <ButtonComponent text="Create Event" bg={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
