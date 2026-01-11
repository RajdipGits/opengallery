import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./component/Nav";
import Card from "./component/Card";
import Pageno from "./component/Pageno";
import Loader from "./component/Loader";
import { Skeleton } from "@mui/material";
import BottomNav from "./component/BottomNav";

const App = (porps) => {
  const [Data, setData] = useState([]);
  const [Index, setIndex] = useState(null);
  const loading=16;

  const Fetch = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=${loading}`
    );

    setData(response.data);
    // console.log(response.data);
  };

  let Userinfo = [...Array(loading)].map((elm, idx) => {
    return <Loader key={idx} />;
  });

  if (Data.length > 0) {
    Userinfo = Data.map((Elm, idx) => {
      return (
        <Card
          key={idx}
          Url={Elm.download_url}
          Name={Elm.author}
          download_data={Elm.url}
        />
      );
    });
  }

  useEffect(() => {
    Fetch();
  }, [Index,]);

  return (
    <div className="h-screen w-full bg-white lg:bg-white gap-5 flex flex-col">
      <Nav />

      <div className=" p-2 relative grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 lg:px-6 md:grid-cols-3">
        {Userinfo}
      </div>
      <Pageno Number={setIndex} setData={setData} />
      <BottomNav/>
    </div>
  );
};

export default App;
