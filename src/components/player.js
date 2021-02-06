import React, { useEffect } from 'react';
import ReactHowler from 'react-howler';

const Player = ( {src} ) => {

    useEffect(()=>{

    },[src])

    return(
        <ReactHowler 
            src={src}
            playing
            preload
            loop
        />

    )
};

export default Player;