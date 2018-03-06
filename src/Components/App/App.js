import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Gaucho'},
        {artist: 'Steely Dan'},
        {album: 'Gaucho'}
      ],
      playlistName: 'Steely Dan Test Playlist',
      playlistTracks: [
        {name: 'Gaucho'},
        {artist: 'Steely Dan'},
        {album: 'Gaucho'}
      ]
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
              <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
