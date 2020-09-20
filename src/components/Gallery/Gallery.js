import React from 'react';
import './Gallery.css';
import ImageCard from './ImageCard';

const Gallery = (props) => {

    return (
        <div className="gallery ">
            <h4 className="center-align white">GALLERY</h4>
            <div className="white" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h6>PHOTOS</h6>
                <h6>VIDEOS</h6>
            </div>
            <div className="cards-list row">
                <div className="col s12 m6 l3 card-item"></div>
                <div className="col s12 m6 l3 card-item"></div>
                <div className="col s12 m6 l3 card-item"></div>
                <div className="col s12 m6 l3 card-item"></div>
                <div className="col s12 m6 l3 card-item"></div>
                
            </div>
        </div>
    )
}


export default Gallery;