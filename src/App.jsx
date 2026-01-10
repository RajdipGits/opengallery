import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./component/Nav";
import Card from "./component/Card";
import Pageno from "./component/Pageno";

const App = (porps) => {
  const [Data, setData] = useState([]);
  const [Index, setIndex] = useState(null);

  const Fetch = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=20`
    );

    setData(response.data);
    console.log(response.data);
  };

  let Userinfo = "loading...";

  if (Data.length > 0) {
    Userinfo = Data.map((Elm, idx) => {
      return <Card idx Url={Elm.download_url} Name={Elm.author} download_data={Elm.url}/>;
    });
  }

  useEffect(() => {
    Fetch();
  }, [Index]);



  return (
    <div className="h-screen w-full bg-white lg:bg-white md:bg-sky-500 sm:bg-green-500 gap-5 flex flex-col">
      <Nav />
      <div className="p-2 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 lg:px-6">
        {Userinfo}
      </div>
      <div className="text-red-600">{porps.Pageno}</div>
      <Pageno Number={setIndex}/>
    </div>
  );
};

export default App;
