import React, { Component } from 'react';
import './ImageGallery.css';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      images: [
        { id: 1, url: 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Nature' },
        { id: 2, url: 'https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Nature' },
        { id: 3, url: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Nature' },
        { id: 4, url: 'https://images.pexels.com/videos/3466611/free-video-3466611.jpg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1', category: 'Technology' },
        { id: 5, url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Technology' },
        { id: 6, url: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Technology' },
        { id: 7, url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Animals' },
        { id: 8, url: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=400', category: 'Animals' },
        { id: 9, url: 'https://images.pexels.com/photos/535431/pexels-photo-535431.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Animals' }
      ],
      categories: ['All', 'Nature', 'Technology', 'Animals']
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { selectedCategory, images, categories } = this.state;

    // Filter images based on the selected category
    const filteredImages = selectedCategory === 'All'? images
      : images.filter(image => image.category === selectedCategory);

    return (
      <div className="image-gallery">
        <h1>Image Gallery</h1>
        
        {/* Category Filter Menu */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => this.handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="image-item">
              <img src={image.url} alt={image.category} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
