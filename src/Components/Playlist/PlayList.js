import React from 'react';
import './Components/TrackList/TrackList';

export class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        //<TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}