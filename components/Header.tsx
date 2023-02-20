import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Hamburger from "../public/icon-hamburger.svg";
import Close from "../public/icon-close.svg";
import ButtonComponent from "./Button";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="z-[100]">
      <nav className="flex justify-center items-center max-w-7xl mx-auto py-2 px-3 md:h-[63px] w-full">
        <div className="flex items-center flex-wrap justify-between w-full gap-1 transition-all duration-300">
          <div className="md:text-[20px]">
            <Link href="/">
              <span className="flex items-center gap-1">
                <Image src={Logo} alt="logo" />
                <span className="font-b-600">Event-go</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-1 md:hidden">
            {/* <div className="border rounded-[4px] border-blackTert p-[0.45rem] text-[1.4rem]">
              <Icon icon="bx:search" />
            </div> */}
            <div
              className="border rounded-[4px] border-greenPrim border-opacity-30 p-[0.45rem] text-[1.4rem]"
              onClick={() => {
                setOpen(true);
              }}
            >
              {/* <Icon icon="bx:menu-alt-right" /> */}
              <Image src={Hamburger} alt="hamburger" />
            </div>
          </div>
          <div
            className={`w-[200px] h-screen md:h-auto md:w-auto md:basis-0 border border-pinkPrim border-opacity-[0.3] bg-bluePrim md:bg-transparent md:border-none rounded-[4px] px-[1rem] md:mt-0 transition-all duration-500 ${
              open
                ? "absolute top-0 right-0"
                : "hidden md:block right-[-200px] py-[0.5rem]"
            }  `}
          >
            <ul
              className={`items-center flex flex-col md:flex-row gap-[10px] md:gap-4 bg-bluePrim md:bg-transparent text-[16px] md:h-[19px] w-auto md:pt-0 transition-all duration-500 relative py-[4rem] md:py-0
          `}
            >
              <div
                className="border rounded-[4px] border-bluePrim border-opacity-30 p-[0.45rem] text-[1.4rem] absolute right-4 top-4 md:hidden"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Image src={Close} alt="hamburger" className="" />
              </div>

              <li className="navItem">
                <Link href="/">Features</Link>
              </li>
              <li className="navItem">
                <Link href="/about" className="w-[90px] inline-block">
                  My Orders
                </Link>
              </li>
              <li className="navItem">
                <Link href="/services">FAQs</Link>
              </li>

              <ButtonComponent bg={false} text="Login" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
