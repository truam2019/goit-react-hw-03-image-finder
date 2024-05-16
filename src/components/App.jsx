import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { fetchImages } from '../api';

import { AppContainer } from './App.styled';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      images: [],
      page: 1,
      loading: false,
      modalOpen: false,
      selectedImageUrl: '',
      selectedImageAlt: '',
    };
  }

  handleSearch = async (term) => {
    this.setState({ searchTerm: term, page: 1, loading: true });
    const newImages = await fetchImages(term);
    this.setState({ images: newImages, loading: false });
  };

  loadMoreImages = async () => {
    const { searchTerm, page, images } = this.state;
    this.setState({ page: page + 1, loading: true });
    const newImages = await fetchImages(searchTerm, page + 1);
    this.setState({ images: [...images, ...newImages], loading: false });
  };

  openModal = (imageUrl, altText) => {
    this.setState({ selectedImageUrl: imageUrl, selectedImageAlt: altText, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, selectedImageUrl: '', selectedImageAlt: '' });
  };

  render() {
    const { images, loading, modalOpen, selectedImageUrl, selectedImageAlt } = this.state;

    return (
      <AppContainer className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {loading ? (
          <Loader />
        ) : (
          <>
            <ImageGallery images={images} openModal={this.openModal} />
            <Button onClick={this.loadMoreImages} hasImages={images.length > 0} />
            <Modal isOpen={modalOpen} imageUrl={selectedImageUrl} altText={selectedImageAlt} onClose={this.closeModal} />
          </>
        )}
      </AppContainer>
    );
  }
}

export default App;

