import React, { useState } from "react";
import Modal from "react-modal";
import { CircleUserRound, ChevronLeft } from "lucide-react";

const Card = (props) => {
  const [Open, setOpen] = useState(false);
  const [Source, setSource] = useState(0);

  const handleopen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleclose = () => {
    setOpen(false);
    document.body.style.overflow = "";

  };

  const downloadprocess = () => {
    const link = document.createElement("a");
    link.href = `${props.download_data}/download?force=true`;
    link.click();
    document.body.removeChild(link);

    if (!link.ok) {
      console.log("empty");
    }
  };

  return (
    <>
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={handleopen}
      >
        <img
          src={props.Url}
          alt=""
          className="h-60 w-full object-cover rounded-2xl 
        lg:h-80 md:h-80 sm:h-70"
        />

        <div className="w-full absolute top-0 flex justify-between p-2 bg-black/20 rounded-t-2xl">
          <CircleUserRound
            strokeWidth={1}
            size={34}
            color="lightgray"
            className="bg-white rounded-4xl "
          />
          <p
            className="text-white font-medium text-right text-md text-balance 
        lg:text-xl md:text-xl sm:text-xl"
          >
            {props.Name}
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={Open}
        onRequestClose={handleclose}
        className=" px-2 w-full absolute bottom-0 h-[95%] flex flex-col bg-white rounded-2xl gap-4 focus:outline-none bg-fixed
        lg:h-screen"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center"
      >
        <div className="flex py-2 items-center justify-start">
          <ChevronLeft
            size={36}
            strokeWidth={1}
            color="gray"
            className="bg-gray-100 rounded-4xl w-10 h-10 cursor-pointer"
            onClick={handleclose}
          />
        </div>

        <div className=" h-full flex flex-col  gap-2 lg:flex-row">
          <img
            src={props.Url}
            alt=""
            className="w-full rounded-xl object-fill
          lg:w-[80%] lg:h-150
          md:h-130"
          />

          <div className="flex  justify-between px-2 lg:flex-col lg:justify-end lg:gap-6 lg:pb-14 l">
            <div className="flex items-center gap-6">
              <CircleUserRound
                strokeWidth={1}
                size={40}
                color="lightgray"
                className="bg-white rounded-4xl "
              />

              <p
                className="text-blask font-bold text-right text-md text-balance 
                            lg:text-xl"
              >
                {props.Name}
              </p>
            </div>

            <button
              onClick={downloadprocess}
              className=" rounded-xl cursor-pointer px-4 py-2 font-medium text-white  text-sm lg:py-4 lg:text-lg
              md:px-6 md:text-lg
              bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-base  text-center leading-5"
            >
              Download
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
