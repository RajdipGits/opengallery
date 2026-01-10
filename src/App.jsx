import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";
import Modal from "react-modal";

const App = () => {
  const [Fullscreen, setFullscreen] = React.useState(true);

  const modaleopen = () => {
    setFullscreen(true);
  };
  const modalclose = () => {
    setFullscreen(false);
  };

  return (
    <div className="h-screen w-full bg-white lg:bg-yellow-400 md:bg-sky-500 sm:bg-green-500 gap-5 flex flex-col">
      {/* nav */}
      <div className="w-full p-4 flex justify-center items-center border-b-gray-300 border-b-2">
        <h1 className="font-bold tracking-widest text-xl text-orange-300">
          OpenGallery
        </h1>
      </div>

      <div className="p-2 grid grid-cols-2 gap-2">
        {/* image card */}
        <div className="relative overflow-hidden" onClick={modaleopen}>
          <img
            src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="h-50 w-full object-cover rounded-2xl"
          />

          <div className="w-full absolute top-0 flex justify-between p-2 bg-black/20 rounded-t-2xl">
            <CircleUserRound
              strokeWidth={1}
              color="lightgray"
              className="bg-white rounded-4xl"
            />
            <p className="text-white font-medium text-right text-xs text-balance">
              username itsomething
            </p>
          </div>
        </div>
        {/* <Modal isOpen={Fullscreen} onRequestClose={modalclose} className="w-full h-[80%] absolute bottom-0 justify-center">
          <img src="" alt="" />
        </Modal> */}
      </div>
    </div>
  );
};

export default App;
