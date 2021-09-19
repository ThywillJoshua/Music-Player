import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player(props) {
  //Event Handlers
  function playSongHandler() {
    props.setIsPlaying(!props.isPlaying);

    if (props.isPlaying) {
      props.audioRef.current.pause();
    } else {
      props.audioRef.current.play();
    }
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function dragHandler(e) {
    const { value } = e.target;
    props.audioRef.current.currentTime = value;
    props.setSongInfo({ ...props.songInfo, currentTime: value });
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(props.songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={props.songInfo.duration}
          value={props.songInfo.currentTime}
          type="range"
        />
        <p> {getTime(props.songInfo.duration)} </p>
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
    </div>
  );
}

export default Player;
