import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  renderAction() {
    if (isRemoval) {
      return <a className="Track-action">'-'</a>
    } else {
      return <a className="track-action">'+'</a>
    }
  }

  render () {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction}
      </div>
    )
  }
}
