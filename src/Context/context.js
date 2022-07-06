import React, { createContext, useState } from 'react';



export const Context = createContext();

export const ContextProvider = (props) => {
    const [songs, setSongs] = useState([]);
    const [song, setSong] = useState({});

    return (
        <Context.Provider value={[songs, setSongs, song, setSong]}>
            {props.children}
        </Context.Provider>
    )
}

