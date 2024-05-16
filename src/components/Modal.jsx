import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Overlay, ModalContainer, CloseButton, Image } from './Modal.styled';

class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        const { isOpen, onClose } = this.props;
        if (event.keyCode === 27 && isOpen) {
            onClose();
        }
    };

    handleOverlayClick = () => {
        const { onClose } = this.props;
        onClose();
    };

    handleModalClick = (e) => {
        e.stopPropagation();
    };

    render() {
        const { isOpen, imageUrl, altText, onClose } = this.props;

        return (
            <>
                {isOpen && (
                    <Overlay className="overlay" onClick={this.handleOverlayClick}>
                        <ModalContainer className="modal" onClick={this.handleModalClick}>
                            <Image src={imageUrl} alt={altText} />
                            <CloseButton onClick={onClose}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                            </CloseButton>
                        </ModalContainer>
                    </Overlay>
                )}
            </>
        );
    }
}

export default Modal;
