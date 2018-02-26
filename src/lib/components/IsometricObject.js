import React, { Component } from "react";
import PropTypes from "prop-types";

import "./IsometricObject.scss";

class IsometricObject extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    z: PropTypes.number
  };

  static defaultProps = {
    z: 0
  };

  render() {
    const { x, y, z, width, height } = this.props;
    const vars = {
      "--x": x,
      "--y": y,
      "--z": z,
      "--object-width": width,
      "--object-height": height
    };
    return (
      <div className="react-isometric-object-wrapper" style={vars}>
        <div className="react-isometric-object" />
      </div>
    );
  }
}

export default IsometricObject;
