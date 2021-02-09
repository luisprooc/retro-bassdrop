import React from 'react';
import ReactHowler from 'react-howler';

const Player = ( {src} ) => (

    <ReactHowler 
        src={src}
        playing
        preload
        html5
        volume={0.2}
    />

);

export default Player;