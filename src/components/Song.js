import React, { useContext } from "react";
import { Music } from "../App";

const Song = () => {
  const { song } = useContext(Music);
  return (
    <div className="bg-song col-span-1 flex flex-col justify-center items-center relative">
      <div className="text-white flex items-center justify-center text-4xl absolute top-5">
        <i className="fa-solid fa-music"></i>
        <h1 className="ml-5 font-bold">
          Music <span className="text-2xl">app</span>
        </h1>
      </div>
      <div className="w-[350px] text-center absolute top-28 grid gap-y-5">
        <h3 className="text-song-name font-bold text-2xl">{song.name}</h3>
      </div>
      <div className="w-[250px] h-[250px] ">
        <img
          src={song.links.images[0].url}
          alt=""
          className="w-full h-full object-cover mb-5"
        />
        <div className="w-full flex items-center justify-between">
          <div className="w-[50px]">
            <img
              src={song.links.images[1].url}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-white text-xl">{song.author}</span>
        </div>
      </div>
    </div>
  );
};

export default Song;
