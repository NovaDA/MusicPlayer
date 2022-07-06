import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import { Context } from '../../Context/context';

const Playlist = () => {

    const [songs, setSongs] = useContext(Context);
    console.log(songs);

    const renderRows = () => {
        if(songs.length > 0)
        return songs.map(p => <tr><td>{p.name}</td><td><img src={p.img} /></td><td>{p.releasedDate}</td><td><button onClick={ () => playSong(p)}>Played</button></td></tr>)
    }

    function playSong(e){
        window.location.href = "https://www.youtube.com/watch?v=" + e.url;
      }

      useEffect(() => {
          renderRows();
      }, [])
    
    return (
        <>
       
          <table style={{ border: "none", width: "80vw", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              { renderRows() }
            </tbody>
          </table>

        </>
    );

};

    export default Playlist;