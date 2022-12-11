import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Music } from "../App";

const PlayerControl = () => {
  const { song, handleSong } = useContext(Music);
  const handlePre = () => {
    handleSong(song.id - 1);
  };
  const handleNext = () => {
    handleSong(song.id + 1);
  };
  return (
    <div>
      <AudioPlayer
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        className="player-control"
        onClickPrevious={handlePre}
        onClickNext={handleNext}
      />
    </div>
  );
};

export default PlayerControl;
