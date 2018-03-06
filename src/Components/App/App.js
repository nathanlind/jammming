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
    this.state = {
      searchResults: [{
        name: 'Peg',
        artist: 'Steely Dan',
        album: 'Aja',
      }],
      playlistName: 'Steely Dan Test Playlist',
      playlistTracks: [{
        name: 'Peg',
        artist: 'Steely Dan',
        album: 'Aja',
      }]
    };
  }

// Half way works.  Still allowing dupes.
  addTrack(track) {
    if (!this.state.playlistTracks.includes(track.id)) {
      this.setState({ playlistTracks: this.state.playlistTracks.concat(track)});
    }
  }

// Not yet working.
  removeTrack(track) {
    const updatedTracks = this.state.playlistTracks.filter(tracks => {
      return tracks !== track});
    this.setState({ playlistTrack: updatedTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack} />
              <PlayList
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
