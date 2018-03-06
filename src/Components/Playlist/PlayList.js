import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

export class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange($input.val());
  }

  render() {
    return (
      <div className="Playlist">
        <input
          defaultValue={'New Playlist'}
          onChange={this.handleNameChange} />
          <TrackList
            playlistTracks={this.props.playlistTracks}
            onRemove={this.props.onRemove} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
