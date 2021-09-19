import React, { useState } from "react";

//Import Styles
import "../styles/app.scss";

//Add Components
import Player from "./Player";
import Song from "./Song";

//Import Songs
import chillHop from "./Util";

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
