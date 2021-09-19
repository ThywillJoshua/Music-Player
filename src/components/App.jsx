import React, { useState } from "react";

//Import Styles
import "../styles/app.scss";

//Add Components
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";

//Import Songs
import chillHop from "./Util";

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        key={songs}
        id={songs}
      />
    </div>
  );
}

export default App;
