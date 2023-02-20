import React from "react";
import Image from "next/image";
import Event from "../public/event1.svg";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="w-full md:w-[343px] overflow-hidden rounded-[18px] flex items-center flex-col shadow-card">
      <div className="flex-1">
        <Image src={Event} alt="event-pic" />
      </div>
      <div className="flex-1 flex items-start gap-4 bg-white py-[20px] px-[30px]">
        <div className="flex items-center flex-col">
          <span className="text-[11.37px] leading-[14.81px] text-center font-b-700 text-blueSec">
            APR
          </span>
          <span className="text-[28px] leading-[37px] text-black font-b-700">
            14
          </span>
        </div>
        <div className="flex items-start gap-[10px] flex-col">
          <span className="text-[14px] leading-[150%] font-b-700 text-black">
            Wonder Girls 2010 Wonder Girls World Tour San Francisco
          </span>
          <span className="text-[#6A6A6A] text-[14px] leading-[21px]">
            We’ll get you directly seated and inside for you to enjoy the show.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
