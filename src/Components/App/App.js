import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import '../SearchBar/SearchBar';
import '../SearchResults/SearchResults';
import '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Gaucho'},
        {artist: 'Steely Dan'},
        {album: 'Gaucho'}
      ];
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} />
              <PlayList />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
