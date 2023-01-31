import React, { useState } from "react";
import "./App.css";
import Song from "./components/Song";
import SongList from "./components/SongList";
import PlayerControl from "./components/PlayerControl";
import data from "./data/data.json";

export const Music = React.createContext();

function App() {
  const [song, setSong] = useState(data[0]);
  const handleSong = (id) => {
    const findSong = data.find((item) => item.id === id);
    if (!findSong) setSong(data[0]);
    else setSong(findSong);
  };
  return (
    <Music.Provider value={{ data, song, handleSong }}>
      <div>
        <div className="grid lg:grid-cols-3 h-screen-content">
          <Song />
          <SongList />
        </div>
        <PlayerControl />
      </div>
    </Music.Provider>
  );
}

export default App;
