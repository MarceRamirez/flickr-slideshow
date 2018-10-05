import React, { Component } from 'react';
import './App.css';
import SearchComponent from './components/Search/Search';
import ViewComponent from './components/Gallery/Gallery';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        this.loadImages();
    }

  loadImages = (searching = 'scenic') => {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR}&tags=${searching}&per_page=4&page=1&format=json&nojsoncallback=1`)
          .then(response => response.json())
          .then(function (j) {
              let picArray = j.photos.photo.map(pic => {
                  let _url = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_z.jpg';
                  return <img alt={pic.title} src={_url} className="picture" />;
              });
              this.setState({ pictures: picArray });
          }.bind(this)
          ).catch(error => {
              throw error;
          });
  };

  render() {
      const { pictures } = this.state;
      return (
          <div className="App">
              <SearchComponent loadImages={this.loadImages} />
              <ViewComponent pictures = {pictures} />
          </div>
      );
  }
}

export default App;
