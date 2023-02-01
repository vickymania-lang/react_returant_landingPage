import React from "react";
import aboutimage from '../images/about.png';


function About() {
    return (
        <div id='about'>
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>Hello, this is victor backend developer aka vickymania falling in love with react because of it functionality.....javascript to the world </p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt="hello" />

            </div>

        </div>
    )
}

export default About;
