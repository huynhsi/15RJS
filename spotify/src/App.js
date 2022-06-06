
import { useState } from 'react';
import './App.css';
import { DetailSong } from './components/DetailSong';
import { ListSong } from './components/ListSong';
import Navbar from './components/Navbar';
import { Playing } from './components/Playing';
import { Songs } from './Context';
import DataSongs from './data/songs.json';

function App() {
  const [song,setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song) 
      setSong(DataSongs[0])
    else
      setSong(song)
  }

  return (
    <div >
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navber-player overflow-hidden'>
          {/* {span 1} */}
          <DetailSong/>
          {/* {span 2} */}
          <ListSong />
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
