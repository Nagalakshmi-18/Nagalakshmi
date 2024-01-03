import React from "react";
import'./Home.css';
import video from '../../assets/video.mp4';
import Bus from '../../assets/Bus.png';
import Search from "../Search/Search";

const Home = () =>
{
    return(
        <>
        <div className="home flex container">
            <div className="mainText">
                <h1>Create Ever-lasting Memories with Us</h1>
            </div>

            <div className="homeImages flex">
                <div className="videoDiv">
                    <video  src={video} autoPlay muted loop className="video"></video>
                </div>
                <img src={Bus} className="plane"/>
            </div>
        </div>
        <Search/>
        </>
    )
}
export default Home