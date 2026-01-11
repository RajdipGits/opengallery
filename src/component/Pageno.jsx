import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pageno = ({ Number, setData }) => {
  const [Index, setIndex] = useState(1);

  useEffect(() => {
    Number(Index);
  }, [Index, Number]);

  return (
    <div className="w-full flex justify-center items-center gap-6">
      <div
        style={{ visibility: Index == 1 ? "hidden" : "" }}
        id="prev"
        className=" text-white px-6 py-2 rounded-xl text-md font-medium active:bg-green-300 cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-base text-sm text-center leading-5"
        onClick={() => {
          if (Index > 1) {
            setIndex(Index - 1);
            setData([]);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        Prev
      </div>

      <div className="text-lg font-medium ">Page {Index}</div>
      <div
        className=" text-white px-6 py-2 rounded-xl text-md font-medium active:bg-green-300 cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-base text-sm text-center leading-5"
        onClick={() => {
          setIndex(Index + 1);
          setData([]);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Pageno;
