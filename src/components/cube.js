import React, { useState } from 'react';
import '../styles/cube.css';
import Sounds from './sound';
import Player from './player';

const Cube = () => {
    const [playSounds,setPlaySounds] = useState([]);

    // When user clicks a cube, add class for animate cube
    const playSound = (e,src) => {

        // If cube play music, shutdowm music
        if(e.target.classList.contains("cube-play")){
            e.target.classList.remove("cube-play");

            // Delete sound from state
            const sounds = playSounds.filter(p => p!== src);
            setPlaySounds(sounds);
            return;
        }

        // Turn on music
        setPlaySounds([...playSounds,src]);

        // Turn animation
        e.target.classList.add("cube-play");
    };


    return(
        <div className="d-flex justify-content-center flex-column align-items-center cube-container">
            <div className="row justify-content-center">

                {
                    Sounds.map((s,index) => {

                        const {id,src} = s;
                        
                        // map cube and generate it depends its index
                        return(
                            <div key={id} className={`col-8 ${index!==0 && index % 2 !== 0?"cube-w":"cube"}`}  onClick={(e)=>playSound(e,src)}>
                                {playSounds.length > 0?<Player src={src}/>:null}
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default Cube;

