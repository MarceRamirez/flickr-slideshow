import React, { Component } from 'react';
import './Search.css';

class SearchComponent extends Component {
  inputChange = e => {
      const toSearch = e.target.value;
      if (!toSearch) return;
      setTimeout(() => {
          this.props.loadImages(toSearch);
      }, 1000);
  };

  render() {
      return (
          <div className="searchBar">
              <input
                  type="text"
                  className="textInput"
                  placeholder="Search for..."
                  onChange={this.inputChange}
              />
          </div>
      );
  }
}

export default SearchComponent;
