import React from 'react';


const ImageCard = (props) => {

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} />
                <span className="card-title">Card Title</span>
            </div>
        </div>
    )
}

export default ImageCard;