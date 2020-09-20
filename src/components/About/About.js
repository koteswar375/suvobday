import React from 'react';
import './About.css';
import ProfilePic from '../../photos/Profile.jpg';

const AboutMe = (props) => {

    return (
        <div className="aboutme white">
                <img className="profilePic" src={ProfilePic} height="250px" />
        </div>
    )
}

export default AboutMe;