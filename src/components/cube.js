import React from 'react';
import '../styles/cube.css';
import Sounds from './sound.json';
import Player from './player';

const Cube = () => {

    // When user clicks a cube, add class for animate cube
    const playSound = (e) => {

        // If cube play music, shutdowm music
        if(e.target.classList.contains("cube-play")){
            e.target.classList.remove("cube-play");
            return;
        }

        // Turn on music
        e.target.classList.add("cube-play");
    };

    // Destructuring to sounds from json 
    const {sounds} = Sounds;


    return(
        <div className="d-flex justify-content-center flex-column align-items-center cube-container">
            <div className="row justify-content-center">

                {
                    sounds.map((s,index) => {

                        const {id,src,play} = s;
                        
                        // map cube and generate it depends its index
                        return(
                            <div key={id} className={`col-8 ${index!==0 && index % 2 !== 0?"cube-w":"cube"}`}  onClick={(e)=>playSound(e)}>
                                <Player src={src}/>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default Cube;

