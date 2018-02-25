import React, { Component } from "react";

class IsometricTile extends Component {
  render() {
    return (
      <div className="isometric-react-tile">
        <div className="floor" />
        <div className="left-wall" />
        <div className="right-wall" />
      </div>
    );
  }
}

export default IsometricTile;
