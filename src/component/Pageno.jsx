import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pageno = ({ Number }) => {
  const [Index, setIndex] = useState(1);

  useEffect(() => {
    Number(Index);
  }, [Index, Number]);

  return (
    <div className="w-full flex justify-center items-center gap-6">
      <div
        id="prev"
        className="bg-sky-400 px-4 py-2 rounded-xl text-sm font-medium active:bg-sky-300 cursor-pointer"
        onClick={() => {
          if (Index > 1) {
            setIndex(Index - 1);
          }
        }}
      >
        Prev
      </div>

      <div>{Index}</div>
      <div
        className="bg-sky-400 px-4 py-2 rounded-xl text-sm font-medium active:bg-sky-300 cursor-pointer"
        onClick={() => {
          setIndex(Index + 1);
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Pageno;
