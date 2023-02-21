import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import chillhop from "./data";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongs={setSongs}
      />
      <Library
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
