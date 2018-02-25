import React, { Component } from "react";
import PropTypes from "prop-types";

import SizeProp from "../props/SizeProp";
import MapProp from "../props/MapProp";

import "./IsometricLayer.scss";

class IsometricLayer extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    map: MapProp,
    sizes: SizeProp
  };

  render() {
    const { children, type } = this.props;
    return <div className={`isometric-tileset-layer ${type}`}>{children}</div>;
  }
}

export default IsometricLayer;
