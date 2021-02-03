import React,{useState} from 'react';
import '../styles/cube.css';

const Cube = () => {

    const [play,setPlay] = useState(false);

    const playSound = (e) => {
        console.log(e.target.id);
        play?setPlay(false):setPlay(true);
    };
    

    return(
        <div className="d-flex justify-content-center flex-column align-items-center cube-container">
            <div className="row justify-content-center">
                <div className={`col-8 cube ${play?"cube-play":""}`} id={1} onClick={(e)=>playSound(e)}>
                    <br />
                </div>
                <div className="col-8 cube" id={2} onClick={(e)=>playSound(e)}>
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube-w">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
                <div className="col-8 cube">
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Cube;

