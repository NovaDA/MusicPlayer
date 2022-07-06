import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import {Playlist} from '../Playlist';
import {Outlet, useNavigate} from 'react-router-dom';
import { Context } from '../../Context/context';

const Home = () => {
    const [songs, setSongs] = useContext(Context);
    const [song, setSong] = useContext(Context);

      var accessToken= "?access_token=CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx";
      var APISong = "https://api.genius.com/songs/";
      var songID = "2471960";
      var maxSong= 2471960; 

      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const renderRows = () => {
        return <tr><td>{song.name}</td><td><img src={song.img} /></td><td>{song.releasedDate}</td><td><button onClick={ () => addSong}>Add</button></td></tr>
      }

    // const renderRows = () => {
    //     if(songs.length > 0)
    //     return songs.map(p => <tr><td>{p.name}</td><td><img src={p.img} /></td><td>{p.releasedDate}</td><td><button onClick={ () => setSongs(p)}>Played</button></td></tr>)
    // }

   
      function addSong(){
            setSongs([ ...songs, {name : song.response.song.artist_names, img : song.response.song.header_image_thumbnail_url}])
      }


      //var song = json['response']['song'];
      async function getaSong(){
        try{
          songID = getRandomInt(0, maxSong);
          console.log(APISong+songID+accessToken)
           await fetch(APISong+songID+accessToken)
           .then(response => response.json())
           .then(data => {
            if (data.meta.status === 200){
                console.log('HELLOOOOO 1')
                 //setSongs([ ...songs, {name : data.response.song.artist_names, img : data.response.song.header_image_thumbnail_url}])
                setSong({name : data.response.song.artist_names, img : data.response.song.header_image_thumbnail_url})
                console.log(song);
           }})

        }catch(err){
          console.log(err);
        }
        
      }

      useEffect(() => {
        console.log(' firing when change happens');
        console.log(song);
          renderRows();
      }, [song])


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
          <button onClick={getaSong}>Get Songs</button>
        </>
    );

};

    export default Home;

    // <button onClick={ () => navigate("/")}><h1>Home</h1></button><Outlet />
    // <button onClick={ () => navigate("/playlist")}><h1>Playlist</h1></button><Outlet />