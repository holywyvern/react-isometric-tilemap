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
    rightZ: null,
    textures: null
  };

  getMiddleWalls(textures, height, prefix) {
    const result = [];
    for (let i = 1; i < height; ++i) {
      result.push(
        <img
          key={`${prefix}-middle-wall`}
          src={textures.middle}
          alt=""
          style={{ "--wall-index": i }}
        />
      );
    }
    return result;
  }

  render() {
    const { x, y, z, leftZ, rightZ, textures } = this.props;
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
        <div className="textures">
          {textures && textures.floor ? (
            <img src={textures.floor} alt="" className="floor" />
          ) : null}
          {textures && textures.leftWall && lz > 0
            ? [
                <img key="l-top" alt="" src={textures.leftWall.top} />,
                <img key="l-bottom" alt="" src={textures.leftWall.bottom} />
              ]
            : null}
          {textures && textures.rightWall && lz > 0
            ? [
                <img key="r-top" alt="" src={textures.rightWall.top} />,
                <img key="r-bottom" alt="" src={textures.rightWall.bottom} />
              ]
            : null}
          {this.getMiddleWalls(textures && textures.rightWall, lz, "l")}
          {this.getMiddleWalls(textures && textures.leftWall, rz, "l")}
        </div>
      </div>
    );
  }
}

export default IsometricTile;
