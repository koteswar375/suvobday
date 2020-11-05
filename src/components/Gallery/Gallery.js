import React from 'react';
import './Gallery.scss';
import ImageCard from './ImageCard';


function importAll(r) {
    let images = [];
    r.keys().forEach(key => images.push(key));
    return images
}
const images = importAll(require.context('../../photos', false, /\.(png|jpe?g|svg)$/));

const Gallery = (props) => {
    return (
        <div className="gallery ">
            <div className="image-list">
                {images.map((image,index) => {
                    image = image.replace('./', '');
                    return <ImageCard key={index+1} url={image}/>     
                })}
                           
            </div>
        </div>
    )
}


export default Gallery;