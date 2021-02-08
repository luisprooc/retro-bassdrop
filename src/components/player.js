import React from 'react';
import ReactHowler from 'react-howler';

const Player = ( {src} ) => (

    <ReactHowler 
        src={src}
        playing
        preload
        html5
    />

);

export default Player;