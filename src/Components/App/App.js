import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [{
        name: 'Peg',
        artist: 'Steely Dan',
        album: 'Aja',
        id: 12345
      }],
      playlistName: 'Steely Dan Test Playlist',
      playlistTracks: [{
        name: 'Peg',
        artist: 'Steely Dan',
        album: 'Aja',
        id: 12345
      }]
    };
  }

// Half way works.  Still allowing dupes.
  addTrack(track) {
    if (track.name !== this.state.playlistTracks.name) {
      this.setState({ playlistTracks: this.state.playlistTracks.concat(track)});
    }
  }

// Not yet working.
  removeTrack(track) {
    const updatedTracks = this.state.playlistTracks.filter(tracks => tracks !== track);
    this.setState({ playlistTrack: updatedTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

// Step 63
  savePlaylist() {
    for (let trackIndex = 0; trackIndex < this.state.playlistTracks.length; trackIndex++) {
      let trackURIs = this.state.playlistTrack.uri.push();
    }
  }

  search(searchTerm) {
    console.log(searchTerm);
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
                playlistName={this.state.playlistName}
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
