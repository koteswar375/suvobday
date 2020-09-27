import React from 'react';
import './About.scss';
import ProfilePic from '../../photos/ProfilePic/Profile.jpg';

const AboutMe = (props) => {

    return (
        <div className="aboutme">
                <img className="profilePic" alt="profilepic" src={ProfilePic} />
        </div>
    )
}

export default AboutMe;