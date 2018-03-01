import React, { Component } from "react";
import PropTypes from "prop-types";

import AnimatedTexture from "./AnimatedTexture";

import IsometricMapEvent from "../events/IsometricMapEvent";

import "./IsometricObject.scss";

class IsometricObject extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    z: PropTypes.number,
    active: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    frames: PropTypes.arrayOf(PropTypes.string),
    delay: PropTypes.number,
    onClick: PropTypes.func,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
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
