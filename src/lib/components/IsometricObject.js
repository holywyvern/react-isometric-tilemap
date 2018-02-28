import React, { Component } from "react";
import PropTypes from "prop-types";

import "./IsometricObject.scss";

class IsometricObject extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    z: PropTypes.number,
    active: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    z: 0,
    active: false
  };

  render() {
    const { x, y, z, width, height, active, className } = this.props;
    const vars = {
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
        <div className={classes.join(" ")} />
      </div>
    );
  }
}

export default IsometricObject;
