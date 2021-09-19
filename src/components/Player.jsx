import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player(props) {
  useEffect(() => {
    const newSongs = props.songs.map((song) => {
      if (song.id === props.currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return { ...song, active: false };
      }
    });

    props.setSongs(newSongs);
  }, [props.currentSong]);

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

    //Check if song is playing
    if (props.isPlaying) {
      const playPromise = props.audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          props.audioRef.current.play();
        });
      }
    }
  }

  //Add animation styles
  const trackAnim = {
    transform: `translateX(${props.songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(props.songInfo.currentTime)}</p>

        <div
          style={{
            background: `linear-gradient(to right, ${props.currentSong.color[0]}, ${props.currentSong.color[1]} )`,
          }}
          className="track"
        >
          <input
            onChange={dragHandler}
            min={0}
            max={props.songInfo.duration || 0}
            value={props.songInfo.currentTime}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>
          {" "}
          {props.songInfo.duration
            ? getTime(props.songInfo.duration)
            : "0:00"}{" "}
        </p>
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
