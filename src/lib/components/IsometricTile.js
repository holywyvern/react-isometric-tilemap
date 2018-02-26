import React, { Component } from "react";
import PropTypes from "prop-types";

import "./IsometricTile.scss";

class IsometricTile extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number,
    leftZ: PropTypes.oneOf([PropTypes.number, null]),
    rightZ: PropTypes.oneOf([PropTypes.number, null]),
    textures: PropTypes.oneOf([
      null,
      PropTypes.shape({
        floor: PropTypes.string.isRequired,
        leftWall: PropTypes.shape({
          top: PropTypes.string.isRequired,
          middle: PropTypes.string.isRequired,
          bottom: PropTypes.string.isRequired
        }).isRequired,
        rightWall: PropTypes.shape({
          top: PropTypes.string.isRequired,
          middle: PropTypes.string.isRequired,
          bottom: PropTypes.string.isRequired
        }).isRequired
      })
    ])
  };

  static defaultProps = {
    z: 0,
    leftZ: null,
    rightZ: null
  };

  render() {
    const { x, y, z, leftZ, rightZ } = this.props;
    const lz = leftZ === null ? z : leftZ;
    const rz = rightZ === null ? z : rightZ;
    const vars = {
      "--x": x,
      "--y": y,
      "--z": z,
      "--left-z": lz,
      "--right-z": rz
    };
    return (
      <div className="react-isometric-tile" style={vars}>
        <div className="floor" />
        {lz > 0 ? <div className="wall left" /> : null}
        {rz > 0 ? <div className="wall right" /> : null}
      </div>
    );
  }
}

export default IsometricTile;
