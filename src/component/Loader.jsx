import React from "react";
import Card from "./Card";
import { Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <>
      <div
        className="pointer-events-none rounded-2xl h-60 w-full object-cover  
        lg:h-80 md:h-80 sm:h-70"
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          className="overflow-hidden rounded-2xl"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default Loader;
