import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import ButtonComponent from "./Button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-bluePrim pt-[56px] pb-[20px] px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex items-start flex-col md:flex-row">
        <div className="flex items-start flex-col gap-[17px] md:w-[333px]">
          <div className="md:text-[20px]">
            <Link href="/">
              <span className="flex items-center gap-1">
                <Image src={Logo} alt="logo" />
                <span className="font-b-600">Event-go</span>
              </span>
            </Link>
          </div>
          <span className="text-[14px] leading-[22px] text-[#F3F3F3]">
            Event-go is a global self-service blockchain ticketing platform for
            live experiences that allows anyone to create, share, find and
            attend events that fuel their passions and enrich their lives.
          </span>
          <div className="flex items-center gap-2 text-[14px]">
            <SocialIcon
              url="https://twitter.com/"
              bgColor="#fff"
              style={{ height: "24px", width: "24px" }}
            />
            <SocialIcon
              url="https://www.facebook.com/"
              bgColor="#fff"
              style={{ height: "24px", width: "24px" }}
            />
            <SocialIcon
              url="https://www.linkedin.com/"
              bgColor="#fff"
              style={{ height: "24px", width: "24px" }}
            />
          </div>
        </div>
        <div className="md:ml-[140px] mt-[20px] md:mt-0 flex items-start gap-6 flex-col md:w-[141px]">
          <h4 className="text-[18px] leading-[21px] font-b-700">Plan Events</h4>
          <div className="flex items-start text-[14px] leading-[28px] font-b-500 text-[#F3F3F3] flex-col">
            <span>Sell Tickets</span>
            <span>Online Events</span>
          </div>
        </div>
        <div className="md:ml-[84px] mt-[20px] md:mt-0 flex items-start gap-6 flex-col md:w-[100px]">
          <h4 className="text-[18px] leading-[21px] font-b-700">Event-go</h4>
          <div className="flex items-start text-[14px] leading-[28px] font-b-500 text-[#F3F3F3] flex-col">
            <span className="text-[14px]">Home</span>
            <span>About</span>
            <span>Help Center</span>
            <span>Privacy</span>
          </div>
        </div>
        <div className="md:ml-[111px] mt-[20px] md:mt-0 flex items-start gap-6 flex-col md:w-[363px]">
          <h4 className="text-[18px] leading-[21px] font-b-700">
            Stay in the loop
          </h4>
          <div className="flex items-start text-[14px] leading-[28px] font-b-500 text-[#F3F3F3] flex-col gap-6">
            <span className="text-[14px]">
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </span>
            <div className="flex items-start relative w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="rounded-[45px] w-full h-[60px] border-[2px] border-[#F1F1F1] pl-[20px] placeholder:text-[12px] placeholder:text-[#959595]"
              />
              <div className="absolute right-[5px] top-[5px]">
                <ButtonComponent text="Subscribe Now" bg={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
