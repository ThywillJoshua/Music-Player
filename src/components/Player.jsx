import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player(props) {
  //Ref
  const audioRef = useRef(null);

  //Event Handlers
  function playSongHandler() {
    props.setIsPlaying(!props.isPlaying);

    if (props.isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  function timeUpdateHandler(e) {
    const { currentTime, duration } = e.target;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration });
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function dragHandler(e) {
    const { value } = e.target;
    audioRef.current.currentTime = value;
    setSongInfo({ ...songInfo, currentTime: value });
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
        />
        <p> {getTime(songInfo.duration)} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={props.isPlaying === true ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={props.currentSong.audio}
      ></audio>
    </div>
  );
}

export default Player;
