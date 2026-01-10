import React, { useState } from "react";
import Modal from "react-modal";
import { CircleUserRound, ChevronLeft } from "lucide-react";

const Card = (props) => {
  const [Open, setOpen] = useState(false);
  const [Source, setSource] = useState(0);

  const handleopen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };

  const downloadprocess = () => {
    const link = document.createElement("a");
    link.href = `${props.download_data}/download?force=true`;
    link.click();
    document.body.removeChild(link);
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
          className="h-50 w-full object-cover rounded-2xl 
        lg:h-80"
        />

        <div className="w-full absolute top-0 flex justify-between p-2 bg-black/20 rounded-t-2xl">
          <CircleUserRound
            strokeWidth={1}
            size={34}
            color="lightgray"
            className="bg-white rounded-4xl "
          />
          <p
            className="text-white font-medium text-right text-xs text-balance 
        lg:text-xl"
          >
            {props.Name}
          </p>
        </div>
      </div>

{/* Modal */}
      <Modal
        isOpen={Open}
        onRequestClose={handleclose}
        className=" px-2 w-full absolute bottom-0 h-[95%] flex flex-col bg-white rounded-2xl gap-4 focus:outline-none bg-fixed"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center"
      >

        <div className="flex py-2 items-center justify-start">

          <ChevronLeft
            size={36}
            strokeWidth={1}
            color="gray"
            className="bg-gray-100 rounded-4xl w-10 h-10"
            onClick={handleclose}
          />

        </div>

        <div className=" h-full flex flex-col  gap-2 ">
          <img src={props.Url} alt="" className="w-full rounded-xl " />

          <div className="flex  justify-between px-2">

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
              className="bg-green-400 rounded-xl cursor-pointer px-4 py-2 font-medium text-white active:bg-green-300 text-sm"
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
