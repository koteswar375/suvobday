import React from 'react';
import './About.scss';
import ProfilePic from '../../photos/ProfilePic/Profile.jpg';

const AboutMe = (props) => {

  

    return (
        <div className="aboutme">
                <img className="profilePic" alt="profilepic" src={ProfilePic} />
                <section>
                Based in Kolkata, I am an evolving and upcoming actor/model cum software engineer. I have done a variety of 
                modelling/acting work from model-oriented photo-shoot to commercial TV serials. 
                I am an outgoing and modest personality which makes me easy to work with. 
                I consider myself to be punctual and always on time. I am open for any kind of modelling work and acting.
                Please feel free to contact me.
                </section>
        </div>
        
    )
}

export default AboutMe;