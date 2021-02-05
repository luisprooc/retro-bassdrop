import React from 'react';
import ReactHowler from 'react-howler';

const Player = ( source ) => {

    return(
        <ReactHowler 
            src={source.src}
            playing
            preload={true}
            html5
            volume={0.9}
        />

    )
};

export default Player;