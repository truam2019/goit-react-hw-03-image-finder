import React, { Component } from 'react';
import { ImageGalleryItemContainer, ImageGalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
    handleClick = () => {
        const { url, openModal } = this.props;
        openModal(url);
    };

    render() {
        const { url } = this.props;

        return (
            <ImageGalleryItemContainer className="image-gallery-item">
                <ImageGalleryItemImage src={url} alt="" onClick={this.handleClick} />
            </ImageGalleryItemContainer>
        );
    }
}

export default ImageGalleryItem;
