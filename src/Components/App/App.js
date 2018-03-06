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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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

  addTrack(track) {
    if (this.state.playlistTracks.includes(track.id)) {
      let updatedTracks = this.state.playlistTracks.concat(track);
      this.setState({ playlistTracks: updatedTracks});
    }
  }

  removeTrack(track) {
    let updatedTracks = this.state.playlistTracks.filter(track);
    this.setState({ playlistTrack: updatedTracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
              <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
