import React, { Component } from 'react';
import './Gallery.css';
import ButtonSlider from './Button';
import ThumbSlider from './Thumbnail';

class ViewComponent extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
        };
    }

  prevImg = () => {
      let { currentIndex } = this.state;
      if (currentIndex > 0) {
          this.setState({ currentIndex: currentIndex - 1 });
      }
  };

  nextImg = () => {
      let { currentIndex } = this.state;
      if (currentIndex < this.props.pictures.length) {
          this.setState({ currentIndex: currentIndex + 1 });
      }
  };

  thumbClic = id => {
      this.setState({
          currentIndex: id,
      });
  };

  render() {
      let { pictures } = this.props;
      let { currentIndex } = this.state;
      return (
          <div>
              <div className="contentImg">
                  <ButtonSlider name={'Prev'} actionBtn={this.prevImg} classBtn={`sliderPrev ${currentIndex === 0 && 'disable'}`} />
                  <div className="slider">{pictures[currentIndex]}</div>
                  <ButtonSlider classBtn={`sliderNext ${currentIndex === pictures.length - 1 && 'disable'}`} name="Next" actionBtn={this.nextImg}  />
              </div>
              <div className="contentThumbs">
                  {pictures.map((pic, i) => (
                      <ThumbSlider key={i} classThumb={`${currentIndex === i && 'active'} thumbnail`} pic={pic} actionThumb={() => this.thumbClic(i)} />
                  ))}
              </div>
          </div>
      );
  }
}

export default ViewComponent;
