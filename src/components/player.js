import React from 'react';
import ReactHowler from 'react-howler';

const Player = ( {src} ) => {

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