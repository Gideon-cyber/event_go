import React from "react";
import ButtonComponent from "./Button";
import Card from "./Card";

type Props = {};

const UpcomingEvents = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center py-[50px] md:py-[147px] px-[16px] lg:px-0">
      <div className="flex items-start flex-col w-full gap-[30px] md:gap-[80px]">
        <div className="flex items-start md:items-center flex-col md:flex-row gap-4 justify-between w-full">
          <h2 className="text-[30px] md:text-[40px] md:leading-[48px] font-b-700 text-bluePrim">
            Upcoming Events
          </h2>
          <ButtonComponent text="Load More" bg={false} blue={true} />
        </div>
        <div className="flex items-center justify-center w-full flex-wrap gap-[28px]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
