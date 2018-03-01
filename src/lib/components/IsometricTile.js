import React, { Component } from "react";
import PropTypes from "prop-types";

import AnimatedTexture from "./AnimatedTexture";

import IsometricMapEvent from "./IsometricMapEvent";

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
    style: PropTypes.object,
    // Catch all events
    onMouseAction: PropTypes.func,
    // Click Events
    onClick: PropTypes.func,
    onFloorClick: PropTypes.func,
    onWallClick: PropTypes.func,
    onLeftWallClick: PropTypes.func,
    onRigthWallClick: PropTypes.func,
    // Mouse enter events
    onEnter: PropTypes.func,
    onFloorEnter: PropTypes.func,
    onWallEnter: PropTypes.func,
    onLeftWallEnter: PropTypes.func,
    onRigthWallEnter: PropTypes.func,
    // Mouse exit events
    onLeave: PropTypes.func,
    onFloorLeave: PropTypes.func,
    onWallLeave: PropTypes.func,
    onLeftWallLeave: PropTypes.func,
    onRigthWallLeave: PropTypes.func
  };

  static defaultProps = {
    z: 0,
    leftZ: null,
    rightZ: null,
    delay: 0
  };

  onFloorClick = e => {
    const { onMouseAction, onClick, onFloorClick, x, y } = this.props;
    const event = new IsometricMapEvent(this, x, y, "click", "floor");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onClick === "function") {
      onClick(event);
    }
    if (typeof onFloorClick === "function") {
      onFloorClick(event);
    }
  };

  onLeftWallClick = e => {
    const {
      onMouseAction,
      onClick,
      onWallClick,
      onLeftWallClick,
      x,
      y
    } = this.props;
    const event = new IsometricMapEvent(this, x, y, "click", "left-wall");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onClick === "function") {
      onClick(event);
    }
    if (typeof onWallClick === "function") {
      onWallClick(event);
    }
    if (typeof onLeftWallClick === "function") {
      onLeftWallClick(event);
    }
  };

  onRigthWallClick = e => {
    const {
      onMouseAction,
      onClick,
      onWallClick,
      onRigthWallClick,
      x,
      y
    } = this.props;
    const event = new IsometricMapEvent(this, x, y, "click", "right-wall");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onClick === "function") {
      onClick(event);
    }
    if (typeof onWallClick === "function") {
      onWallClick(event);
    }
    if (typeof onRigthWallClick === "function") {
      onRigthWallClick(event);
    }
  };

  onFloorMouseEnter = e => {
    const { onMouseAction, onEnter, onFloorEnter, x, y } = this.props;
    const event = new IsometricMapEvent(this, x, y, "enter", "floor");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onEnter === "function") {
      onEnter(event);
    }
    if (typeof onFloorEnter === "function") {
      onFloorEnter(event);
    }
  };

  onFloorMouseLeave = e => {
    const { onMouseAction, onLeave, onFloorLeave, x, y } = this.props;
    const event = new IsometricMapEvent(this, x, y, "leave", "floor");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onLeave === "function") {
      onLeave(event);
    }
    if (typeof onFloorLeave === "function") {
      onFloorLeave(event);
    }
  };

  onLeftWallEnter = e => {
    const {
      onMouseAction,
      onEnter,
      onWallEnter,
      onLeftWallEnter,
      x,
      y
    } = this.props;
    const event = new IsometricMapEvent(this, x, y, "enter", "left-wall");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onEnter === "function") {
      onEnter(event);
    }
    if (typeof onWallEnter === "function") {
      onWallEnter(event);
    }
    if (typeof onLeftWallEnter === "function") {
      onLeftWallEnter(event);
    }
  };

  onLeftWallLeave = e => {
    const {
      onMouseAction,
      onLeave,
      onWallLeave,
      onLeftWallLeave,
      x,
      y
    } = this.props;
    const event = new IsometricMapEvent(this, x, y, "leave", "left-wall");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onLeave === "function") {
      onLeave(event);
    }
    if (typeof onWallLeave === "function") {
      onWallLeave(event);
    }
    if (typeof onLeftWallLeave === "function") {
      onLeftWallLeave(event);
    }
  };

  onRightWallEnter = e => {
    const {
      onMouseAction,
      onEnter,
      onWallEnter,
      onRightWallEnter,
      x,
      y
    } = this.props;
    const event = new IsometricMapEvent(this, x, y, "enter", "right-wall");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onEnter === "function") {
      onEnter(event);
    }
    if (typeof onWallEnter === "function") {
      onWallEnter(event);
    }
    if (typeof onRightWallEnter === "function") {
      onRightWallEnter(event);
    }
  };

  onRightWallLeave = e => {
    const {
      onMouseAction,
      onLeave,
      onWallLeave,
      onRightWallLeave,
      x,
      y
    } = this.props;
    const event = new IsometricMapEvent(this, x, y, "leave", "right-wall");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onLeave === "function") {
      onLeave(event);
    }
    if (typeof onWallLeave === "function") {
      onWallLeave(event);
    }
    if (typeof onRightWallLeave === "function") {
      onRightWallLeave(event);
    }
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
    const h = height;
    for (let i = 1; i < h; ++i) {
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
    const {
      x,
      y,
      z,
      leftZ,
      rightZ,
      className,
      frames,
      delay,
      style
    } = this.props;
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
        <div
          className="floor"
          onClick={this.onFloorClick}
          onMouseEnter={this.onFloorMouseEnter}
          onMouseLeave={this.onFloorMouseLeave}
        />
        {lz > 0 ? (
          <div
            className="wall left"
            onClick={this.onLeftWallClick}
            onMouseEnter={this.onLeftWallEnter}
            onMouseLeave={this.onLeftWallLeave}
          />
        ) : null}
        {rz > 0 ? (
          <div
            className="wall right"
            onClick={this.onRigthWallClick}
            onMouseEnter={this.onRightWallEnter}
            onMouseLeave={this.onRightWallLeave}
          />
        ) : null}
        <div className="textures-group">
          {this.renderMiddleWalls(i => i.rightWall.middle, lz, "right")}
          {this.renderMiddleWalls(i => i.leftWall.middle, rz, "left")}
          {this.renderTopAndBottomWalls(i => i.leftWall, lz, "left")}
          {this.renderTopAndBottomWalls(i => i.rightWall, rz, "right")}
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
