import React, { useState } from 'react';
import '../styles/cube.css';
import Sounds from './sound';
import Player from './player';
import Panel from './panel';

const Cube = () => {
    const [playSounds,setPlaySounds] = useState([]);
    const [nameSound, setNameSound] = useState("");

    // When user clicks a cube, add class for animate cube
    const playSound = (e,src,name) => {

        // If cube play music, shutdowm music

        if(e.target.classList.contains("cube-play")){

            e.target.classList.remove("cube-play");

            // Delete sound from state
        
            setPlaySounds(playSounds.filter(p => p!== src));
            return;
        }

        // Turn on music
        setPlaySounds([src]);
        setNameSound(name);

        // Turn animation
        e.target.classList.add("cube-play");

    };


    return(
        <div className="d-flex justify-content-center flex-column align-items-center cube-container">
            <div className="row justify-content-center">

                {
                    Sounds.map((s,index) => {

                        const {id,src, name} = s;
                        
                        // map cube and generate it depends its index
                        return(
                            <div key={id} className={`col-8 ${index!==0 && index % 2 !== 0?"cube-w":"cube"}`}  onClick={ (e)=>playSound(e,src,name) }>
                                <div><p>{name}</p></div>
                                {playSound && playSounds.map((item,i) => <Player key={i} src={item}/>)}
                            </div>
                        );
                    })
                }
                
                {/* Show the last sound*/}
                { nameSound && <Panel nameSound={nameSound}/> }
            </div>
        </div>
    );
};

export default Cube;
