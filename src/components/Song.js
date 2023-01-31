import React, { useContext } from "react";
import { Music } from "../App";

const Song = () => {
  const { song } = useContext(Music);
  return (
    <div className="bg-song lg:col-span-1 flex flex-col justify-center items-center relative h-[200px] lg:h-auto">
      <div className="text-white flex items-center justify-center text-4xl lg:absolute top-5">
        <i className="fa-solid fa-music"></i>
        <h1 className="mt-5 ml-5 font-bold">
          Music <span className="text-2xl">app</span>
        </h1>
      </div>
      <div className="flex my-3 lg:my-0">
        <div className="w-[300px] text-center lg:absolute top-28 lg:grid gap-y-5 lg:-ml-5">
          <h3 className="text-song-name font-bold text-[20px] lg:text-2xl">{song.name}</h3>
          <div className="lg:hidden flex items-center justify-center gap-5 mt-2">
            <div className="lg:w-[50px] w-[25px]">
              <img
                src={song.links.images[1].url}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-white text-xl">{song.author}</span>
          </div>
        </div>
        <div className="w-[70px] h-[70px] lg:w-[250px] lg:h-[250px]">
          <div className="hidden w-full lg:flex items-center justify-between mb-5">
            <div className="w-[50px]">
              <img
                src={song.links.images[1].url}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-white text-xl">{song.author}</span>
          </div>
          <img
            src={song.links.images[0].url}
            alt=""
            className="w-full h-full object-cover -ml-3 lg:ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Song;
