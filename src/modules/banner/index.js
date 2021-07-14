import React from 'react';
import "./index.css";

const Banner = (props) => {
    return (
        <div id="banner-section-1">
            <div class="banner container">
                <div class="content">
                    <h2>3D-Constructor's</h2>
                    <h1>Real Time 3-D Reconstruction of Environment </h1>
                    <p>A novel framework for real-time 3D scene reconstruction 
                        from a video. Using some neural methods that estimate 
                        single-view depth maps separately on each key-frame and
                         fuse them later,
                    </p>
                    <div class="say_hello">
                        <button class="hello-btn">Read More *</button>
                    </div>
                </div>
                <div class="image">

                    <video autoplay muted loop id="myVideo">
                        <source src="images/view_3.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>      
    )
}

export default Banner;
