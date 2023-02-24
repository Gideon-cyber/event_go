import { GetServerSideProps } from "next";
import Head from "next/head";
import Hero from "../../components/Hero";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer";
import CreateEventHero from "../../components/CreateEventHero";
import { useFormik } from "formik";
import InputFields from "../../components/InputFields";
import ButtonComponent from "../../components/Button";

export default function Home() {
  const { values, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      totalTickets: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
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

      <CreateEventHero />
      <div className="py-[4rem] md:py-[8rem] flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-[20px] w-full px-4"
        >
          <InputFields
            label="Event Name"
            name="name"
            placeholder="Enter event name here"
            handleBlur={handleBlur}
            handleChange={handleChange}
            value={values.name}
          />
          <InputFields
            label="Event Description"
            name="description"
            placeholder="Enter description here"
            handleBlur={handleBlur}
            handleChange={handleChange}
            value={values.description}
          />
          <InputFields
            label="Price"
            name="price"
            placeholder="Enter price here"
            handleBlur={handleBlur}
            handleChange={handleChange}
            value={values.price}
          />
          <InputFields
            label="Total Tickets Available"
            name="totalTickets"
            placeholder="Enter available ticket number here"
            handleBlur={handleBlur}
            handleChange={handleChange}
            value={values.totalTickets}
          />
          <button type="submit">
            <ButtonComponent text="Create Event" bg />
          </button>
        </form>
      </div>

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
