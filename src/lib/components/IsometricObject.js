import React, { Component } from "react";
import PropTypes from "prop-types";

import AnimatedTexture from "./AnimatedTexture";

import IsometricMapEvent from "../events/IsometricMapEvent";

import "./IsometricObject.scss";

/**
 * An isometric object is everything than is not  a tile or a character.
 * They can be animated and over any tile.
 * They are used for decorations than don't look like a floor pice, like trees, rocks
 * or buildings.
 *
 * @version 1.0.0
 * @since 2.0.0
 * @author [Ramiro Rojo](https://github.com/holywyvern)
 */
class IsometricObject extends Component {
  static propTypes = {
    /** The x position of the map (from 0 to map width - 1) */
    x: PropTypes.number.isRequired,
    /** The y position of the map (from 0 to map height - 1) */
    y: PropTypes.number.isRequired,
    /** The width of the object */
    width: PropTypes.number.isRequired,
    /** The height of the object */
    height: PropTypes.number.isRequired,
    /** The height of the object it will be lifted off the ground as z * map slab size */
    z: PropTypes.number,
    /** If the object is active, it will catch events, also have less transparency */
    active: PropTypes.bool,
    /** Extra css classes you want to add into the object */
    className: PropTypes.string,
    /** extra style you wish to apply into te object */
    style: PropTypes.object,
    /** A list of strings, each string having an uri of each frame */
    frames: PropTypes.arrayOf(PropTypes.string),
    /** An interval between each frame */
    delay: PropTypes.number,
    /** An even triggered when the user clicks on the object */
    onClick: PropTypes.func,
    /** An event triggered when the user moves the mouse over the object */
    onEnter: PropTypes.func,
    /** An event triggered when the user moves the mouse out of the object */
    onLeave: PropTypes.func,
    /** Callback for any mouse event */
    onMouseAction: PropTypes.func
  };

  static defaultProps = {
    z: 0,
    delay: 0,
    active: false
  };

  onClick = e => {
    const { x, y, onClick, onMouseAction, active } = this.props;
    if (!active) return;
    const event = new IsometricMapEvent(this, x, y, "click", "object");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  onMouseEnter = e => {
    const { x, y, onEnter, onMouseAction, active } = this.props;
    if (!active) return;
    const event = new IsometricMapEvent(this, x, y, "enter", "object");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onEnter === "function") {
      onEnter(event);
    }
  };

  onMouseLeave = e => {
    const { x, y, onLeave, onMouseAction, active } = this.props;
    if (!active) return;
    const event = new IsometricMapEvent(this, x, y, "leave", "object");
    e.stopPropagation();
    if (typeof onMouseAction === "function") {
      onMouseAction(event);
    }
    if (typeof onLeave === "function") {
      onLeave(event);
    }
  };

  render() {
    const {
      x,
      y,
      z,
      width,
      height,
      active,
      className,
      style,
      frames,
      delay
    } = this.props;
    const vars = {
      ...(style || {}),
      "--x": x,
      "--y": y,
      "--z": z,
      "--object-width": width,
      "--object-height": height
    };
    const classes = ["react-isometric-object"];
    if (className) classes.push(className);
    if (active) {
      classes.push("active");
    }
    return (
      <div className="react-isometric-object-wrapper" style={vars}>
        <div className={classes.join(" ")} onClick={this.onClick}>
          {frames ? <AnimatedTexture frames={frames} delay={delay} /> : null}
        </div>
      </div>
    );
  }
}

export default IsometricObject;
