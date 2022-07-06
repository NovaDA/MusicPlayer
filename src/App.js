import React, {useState} from 'react';
import './App.css'
import {Playlist, Home} from './Pages';
import {default as Layout } from './layouts'
import {Routes, Route } from 'react-router-dom'
import {Outlet, useNavigate} from 'react-router-dom';
import { ContextProvider } from './Context/context';

function App() {
  let navigate = useNavigate();
  return (
    <>
    <ContextProvider>
        <button onClick={ () => navigate("/")}><h1>Home</h1></button><Outlet />
        <button onClick={ () => navigate("/Playlist")}><h1>Playlist</h1></button>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Playlist" element={<Playlist />} />
      </Routes>
    </ContextProvider>
     
    </> 
  );
}

export default App;


 /* <ArtistForm artistName={artistName} piecesPlayed={piecesPlayed} />
        <Composition compositionNames={compositionNames} setCompositionNames={setCompositionNames}/> */


        // <Route path="/" element={<Home compositionNames={compositionNames} setCompositionNames={setCompositionNames} />} />
                // <Route path="playlist" element={<Playlist  compositionNames={compositionNames} setCompositionNames={setCompositionNames}/>} />
