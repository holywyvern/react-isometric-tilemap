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
      }),
      null
    ])
  };

  static defaultProps = {
    z: 0,
    leftZ: null,
    rightZ: null,
    textures: null
  };

  renderTopAndBottomWalls(textures, height, prefix) {
    if (!textures) return null;
    const results = [];
    if (height > 0) {
      results.push(
        <img
          key={`${prefix}-top`}
          alt=""
          src={textures.top}
          className={`textures top ${prefix}`}
        />,
        <img
          key={`${prefix}-bottom`}
          alt=""
          src={textures.bottom}
          className={`textures bottom ${prefix}`}
        />
      );
    }
    return results;
  }

  renderMiddleWalls(textures, height, prefix) {
    if (!textures) return null;
    const result = [];
    for (let i = 1; i < height; ++i) {
      result.push(
        <img
          key={`${prefix}-middle-wall-${i}`}
          src={textures.middle}
          alt=""
          className={`textures middle ${prefix}`}
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
        <div className="textures-group">
          {this.renderMiddleWalls(textures && textures.rightWall, lz, "right")}
          {this.renderMiddleWalls(textures && textures.leftWall, rz, "left")}        
          {this.renderTopAndBottomWalls(textures && textures.leftWall, lz, "left")}
          {this.renderTopAndBottomWalls(textures && textures.rightWall, rz, "right")}
          {textures && textures.floor ? (
            <img src={textures.floor} alt="" className="textures floor" />
          ) : null}          
        </div>
      </div>
    );
  }
}

export default IsometricTile;
