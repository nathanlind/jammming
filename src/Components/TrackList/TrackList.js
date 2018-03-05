import React from 'react';
import './TrackList.css';
import '../Track/Track';

export class TrackList extends React.Component {
  render () {
    return (
      <div className="TrackList">
          this.props.tracks.map(<Track key={track.id} />)
      </div>

    )
  }
}
