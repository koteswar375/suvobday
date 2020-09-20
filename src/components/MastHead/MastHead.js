import React from 'react';
import './MastHead.css';

const MastHead = (props) => {

    return (
        <div className="masthead">
            <div className="name-box">
                <span style={{letterSpacing:'10px', fontSize:'2rem', display:'block'}} className="white-text center-align">SUVOJIT DHAR</span>
                <span style={{letterSpacing:'10px', fontSize:'2rem', display:'block'}} className="white-text center-align">CHOWDHURY</span>
            </div>
        </div>
    )
}

export default MastHead;