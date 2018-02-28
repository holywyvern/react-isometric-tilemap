import React, { Component } from "react";
import PropTypes from "prop-types";

import AnimatedTexture from "./AnimatedTexture";

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
    delay: PropTypes.number
  };

  static defaultProps = {
    z: 0,
    delay: 0,
    active: false
  };

  render() {
    const { x, y, z, width, height, active, className, style, frames, delay } = this.props;
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
        <div className={classes.join(" ")}>
          {frames ? <AnimatedTexture frames={frames} delay={delay}/> : null}
        </div>
      </div>
    );
  }
}

export default IsometricObject;
