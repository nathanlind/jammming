import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
  }

  addTrack(track) {  // Checks to see if track is already in playlist before adding it.
    let inPlaylist = false;
    this.state.playlistTracks.forEach(currentTrack => {
      if (currentTrack.id === track.id) {
        inPlaylist = true;
      }
    })
    if (!inPlaylist) {
      let updatedTracks = this.state.playlistTracks;
      updatedTracks.push(track);
      this.setState({playlistTracks: updatedTracks});
    }
  }

  removeTrack(track) {
    let updatedTracks = this.state.playlistTracks;
    updatedTracks = updatedTracks.filter(tracks => tracks.id !== track.id);
    this.setState({ playlistTracks: updatedTracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    let trackURIs = [];
    for (let trackIndex = 0; trackIndex < this.state.playlistTracks.length; trackIndex++) {
      trackURIs.push(this.state.playlistTracks[trackIndex].URI);
    }
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({ playlistName: 'New Playlist', playlistTracks: [] });
  }

  search(term) {
    Spotify.getAccessToken();
    Spotify.search(term).then(tracks => {
      this.setState({searchResults: tracks});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search}/>
            <div className="App-playlist">
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack} />
              <PlayList
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
