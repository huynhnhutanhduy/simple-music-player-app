import React, { useContext, useEffect, useState } from "react";
import { Music } from "../App";

const SongList = () => {
  const { data, handleSong, song } = useContext(Music);
  const [idSong, setIdSong] = useState(0);
  const handlePlay = (id) => {
    setIdSong(id);
    handleSong(id);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll bg-song-list">
      <table className="table-auto w-full">
        <thead className="text-white h-[50px] font-bold">
          <tr>
            <th className="w-[10%] text-center">#</th>
            <th className="text-left">Title</th>
            <th className="w-[20%] text-left">Author</th>
            <th className="w-[10%] text-center">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`hover:bg-song hover:text-song-name h-[50px] cursor-pointer text-white ${
                idSong === item.id ? "bg-song text-song-name" : ""
              }`}
              onClick={() => handlePlay(item.id)}
            >
              <td className="text-center">{item.id + 1}</td>
              <td className="text-left">{item.name}</td>
              <td className="text-left">{item.author}</td>
              <td className="text-center">
                <a href="url">
                  <i className="fa-solid fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
