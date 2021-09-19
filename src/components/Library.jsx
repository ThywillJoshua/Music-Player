import React from "react";
import LibrarySong from "./LibrarySong";

function Library(props) {
  return (
    <div className={`library ${props.libraryStatus ? "active-library" : null}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {props.songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              songs={props.songs}
              setCurrentSong={props.setCurrentSong}
              setSongs={props.setSongs}
              id={song.id}
              key={song.id}
              audioRef={props.audioRef}
              isPlaying={props.isPlaying}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
