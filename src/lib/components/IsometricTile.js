import React, { Component } from "react";
import PropTypes from "prop-types";

import AnimatedTexture from "./AnimatedTexture";

import "./IsometricTile.scss";

class IsometricTile extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number,
    leftZ: PropTypes.oneOf([PropTypes.number, null]),
    rightZ: PropTypes.oneOf([PropTypes.number, null]),
    frames: PropTypes.arrayOf(
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
    ),
    delay: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    z: 0,
    leftZ: null,
    rightZ: null,
    delay: 0
  };

  renderTopAndBottomWalls(mapper, height, prefix) {
    const { frames, delay } = this.props;
    if (!frames) return;
    const results = [];
    const textures = frames.map(mapper);
    if (height > 0) {
      results.push(
        <AnimatedTexture
          key={`${prefix}-top`}
          frames={textures.map(i => i.top)}
          delay={delay}
          className={`textures top ${prefix}`}
          
        />,
        <AnimatedTexture
          key={`${prefix}-bottom`}
          frames={textures.map(i => i.bottom)}
          delay={delay}
          className={`textures bottom ${prefix}`}
        />
      );
    }
    return results;
  }

  renderMiddleWalls(mapper, height, prefix) {
    const { frames, delay } = this.props;
    if (!frames) return;
    const textures = frames.map(mapper);
    const result = [];
    for (let i = 1; i < height; ++i) {
      result.push(
        <AnimatedTexture
          key={`${prefix}-middle-wall-${i}`}
          frames={textures}
          delay={delay}
          className={`textures middle ${prefix}`}
          style={{ "--wall-index": i }}
        />
      );
    }
    return result;
  }

  render() {
    const { x, y, z, leftZ, rightZ, className, frames, delay, style } = this.props;
    const lz = leftZ === null ? z : leftZ;
    const rz = rightZ === null ? z : rightZ;
    const vars = {
      ...(style || {}),
      "--x": x,
      "--y": y,
      "--z": z,
      "--left-z": lz,
      "--right-z": rz
    };
    const classes = ["react-isometric-tile"];
    if (className) classes.push(className);
    return (
      <div className={classes.join(" ")} style={vars}>
        <div className="floor" />
        {lz > 0 ? <div className="wall left" /> : null}
        {rz > 0 ? <div className="wall right" /> : null}
        <div className="textures-group">
          {this.renderMiddleWalls((i => i.rightWall.middle), lz, "right")}
          {this.renderMiddleWalls((i => i.leftWall.middle), rz, "left")}        
          {this.renderTopAndBottomWalls((i => i.leftWall), lz, "left")}
          {this.renderTopAndBottomWalls((i => i.rightWall), rz, "right")}
          {frames ? (
            <AnimatedTexture
              frames={frames.map(i => i.floor)}  
              delay={delay} 
              className="textures floor" 
            />
          ) : null}          
        </div>
      </div>
    );
  }
}

export default IsometricTile;
