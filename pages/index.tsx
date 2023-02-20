import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";

import { useEffect } from "react";
import { Coin } from "../types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  setReceiveCoin,
  setSendCoin,
  setShowCoinsModal,
} from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpcomingEvents from "../components/UpcomingEvents";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-bluePrim lg:scrollbar-thumb-pinkPrim lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin bg-white text-white font-poppins`}
    >
      <Head>
        <title>Event-go</title>
        <meta
          name="description"
          content="DApp for creating and managing events"
        />
      </Head>

      {/* <Header /> */}
      <Hero />
      <UpcomingEvents />
      <Cta />

      <Footer />

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
