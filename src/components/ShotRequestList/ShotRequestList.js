import React, { Component } from 'react';
import './ShotRequestList.css';
import ShotRequest from '../ShotRequest/ShotRequest';


class ShotRequestList extends Component {



  render() {
    return (
      <div className="ShotRequestList">
        {this.props.shots.map(shot =>
          <ShotRequest
            key={shot.id}
            shot={shot}
          />
        )}
      </div>
    );
  }
}

export default ShotRequestList;
