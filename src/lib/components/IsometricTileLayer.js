import React, { Component } from "react";

import SizeProp from "../props/SizeProp";
import MapProp from "../props/MapProp";

import IsometricLayer from "./IsometricLayer";

class IsometricTileLayer extends Component {
  static propTypes = {
    map: MapProp,
    sizes: SizeProp
  };
  render() {
    const { children, map, sizes } = this.props;
    return (
      <IsometricLayer map={map} sizes={sizes} type="tiles">
        {children}
      </IsometricLayer>
    );
  }
}

export default IsometricTileLayer;
