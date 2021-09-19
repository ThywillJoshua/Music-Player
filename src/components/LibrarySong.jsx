import React from "react";

function LibrarySong(props) {
  function songSelectHandler() {
    props.setCurrentSong(props.song);

    //Add active state

    const newSongs = props.songs.map((song) => {
      if (song.id === props.song.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return { ...song, active: false };
      }
    });

    props.setSongs(newSongs);

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

  return (
    <div
      onClick={songSelectHandler}
      className={props.song.active ? "library-song selected" : "library-song"}
    >
      <img src={props.song.cover} alt={props.song.name}></img>
      <div className="song-description">
        <h3>{props.song.name}</h3>
        <h4>{props.song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
