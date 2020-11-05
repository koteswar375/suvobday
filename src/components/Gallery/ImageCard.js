import React, { Component, createRef } from 'react';
import './ImageCard.scss';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {spans:0};
        this.imageRef = createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const h = this.imageRef.current.clientHeight;
         this.setState({spans: Math.ceil(h / 10)})
     }

    render() {
    const url = this.props.url;
    const imageUrl = require(`../../photos/${url}`);
    return (
            <div className="imageCard" style = {{gridRowEnd: `span ${this.state.spans + 1}`}}>
                <img ref={this.imageRef} alt="galleryPic" src={imageUrl} />
            </div>
    )
}
}

export default ImageCard;