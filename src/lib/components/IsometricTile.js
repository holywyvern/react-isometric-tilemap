import React, { Component } from "react";
import PropTypes from "prop-types";

import AnimatedTexture from "./AnimatedTexture";

import IsometricMapEvent from "../events/IsometricMapEvent";

import "./IsometricTile.scss";

/**
 * A tile is a square on the map. It is composed of a floor and optionally
 * a right and a left walls.
 * The tiles are the floor of your map, so it can be grass, dirt or water, for example.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author [Ramiro Rojo](https://github.com/holywyvern)
 */
class IsometricTile extends Component {
  static propTypes = {
    /** The x position of the tile, from 0 to width - 1 */
    x: PropTypes.number.isRequired,
    /** The y position of the tile, from 0 to height - 1 */
    y: PropTypes.number.isRequired,
    /** The height of the tile, it will be "lifted" as map slab size * z */
    z: PropTypes.number,
    /** The height of the left wall, by default it is the same as the z value */
    leftZ: PropTypes.oneOf([PropTypes.number, null]),
    /* The height of the right wall, by default it is the same as the z value */
    rightZ: PropTypes.oneOf([PropTypes.number, null]),
    /** A list of frames for each part of the tile */
    frames: PropTypes.arrayOf(
      PropTypes.shape({
        /** The floor texture name */
        floor: PropTypes.string.isRequired,
        /** The left wall textures */
        leftWall: PropTypes.shape({
          /** The top part of the wall */
          top: PropTypes.string.isRequired,
          /** The middle part of the texture (repeats vertically) */
          middle: PropTypes.string.isRequired,
          /** The bottom part of the texture */
          bottom: PropTypes.string.isRequired
        }).isRequired,
        /** The right wall textures */
        rightWall: PropTypes.shape({
          /** The top part of the wall */
          top: PropTypes.string.isRequired,
          /** The middle part of the texture (repeats vertically) */
          middle: PropTypes.string.isRequired,
          /** The bottom part of the texture */
          bottom: PropTypes.string.isRequired
        }).isRequired
      })
    ),
    /** An intervall in milliseconds on wich each frame changes */
    delay: PropTypes.number,
    /** Extra css classes added into the object */
    className: PropTypes.string,
    /** An style object of CSS propertyes */
    style: PropTypes.object,
    /** Event used to catch all mouse events */
    onMouseAction: PropTypes.func,
    /** Click event for the entire tile */
    onClick: PropTypes.func,
    /** Click event for only the floor */
    onFloorClick: PropTypes.func,
    /** Click event for any wall */
    onWallClick: PropTypes.func,
    /** Click event for left wall */
    onLeftWallClick: PropTypes.func,
    /** Click event for right wall */
    onRigthWallClick: PropTypes.func,
    /** Callback called when the mouse enters any part of the tile */
    onEnter: PropTypes.func,
    /** Callback called when the mouse enters the floor of the tile */
    onFloorEnter: PropTypes.func,
    /** Callback called when the mouse enters any wall of the tile */
    onWallEnter: PropTypes.func,
    /** Callback called when the mouse enters the left wall of the tile */
    onLeftWallEnter: PropTypes.func,
    /** Callback called when the mouse enters the right of the tile */
    onRigthWallEnter: PropTypes.func,
    /** Callback called when the mouse exits any part of the tile */
    onLeave: PropTypes.func,
    /** Callback called when the mouse exits the floor of the tile */
    onFloorLeave: PropTypes.func,
    /** Callback called when the mouse exits any wall of the tile */
    onWallLeave: PropTypes.func,
    /** Callback called when the mouse exits the left wall of the tile */
    onLeftWallLeave: PropTypes.func,
    /** Callback called when the mouse exits the right of the tile */
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
