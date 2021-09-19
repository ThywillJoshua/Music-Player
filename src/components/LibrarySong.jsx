import React from "react";

function LibrarySong(props) {
  function songSelectHandler() {
    props.setCurrentSong(props.song);
  }

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={props.song.cover} alt={props.song.name}></img>
      <div className="song-description">
        <h3>{props.song.name}</h3>
        <h4>{props.song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
