import React from "react";
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

  function skipTrackHandler(direction) {
    let currentIndex = props.songs.findIndex(
      (song) => song.id === props.currentSong.id
    );

    if (direction === "skip-forward") {
      props.setCurrentSong(
        props.songs[(currentIndex + 1) % props.songs.length]
      );
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % props.songs.length === -1) {
        props.setCurrentSong(props.songs[props.songs.length - 1]);
        return;
      }
      props.setCurrentSong(
        props.songs[(currentIndex - 1) % props.songs.length]
      );
    }
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(props.songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={props.songInfo.duration || 0}
          value={props.songInfo.currentTime}
          type="range"
        />
        <p> {getTime(props.songInfo.duration)} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={props.isPlaying === true ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
