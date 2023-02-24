import React, { useState, useEffect } from "react";
import { getAllEvents } from "../Blockchain/ticketing";
import ButtonComponent from "./Button";
import Card from "./Card";
import Modal from "./Modal";

type Props = {};
let Arr: [] = [];
const UpcomingEvents = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const response = getAllEvents().then((res) => {
      let Arr = res;
    });
  }, []);
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
          <div
            className="cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            {Arr.map(
              (
                campaign: {
                  name: any;
                  proposer: any;
                  description: any;
                  length: number;
                  deadline: any;
                  goalAmount: any;
                  projectCID: any;
                  raisedAmount: any;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <Card
                    title={campaign.name}
                    walletAdd={campaign.proposer}
                    description={campaign.description}
                  />

                  {index === campaign.length - 1 && showModal && (
                    <Modal
                      setShowModal={setShowModal}
                      title={campaign.name}
                      deadline={campaign.deadline}
                      targetAmount={campaign.goalAmount}
                      projectCID={campaign.projectCID}
                      proposer={campaign.proposer}
                      AmountRaised={campaign.raisedAmount}
                    />
                  )}
                </div>
              )
            )}
            {/* <Card /> */}
          </div>

          {showModal && <Modal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
