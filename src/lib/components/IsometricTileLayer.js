import React, { Component } from "react";

import IsometricLayer from "./IsometricLayer";

class IsometricTileLayer extends Component {
  render() {
    const { children } = this.props;
    return <IsometricLayer type="tiles">{children}</IsometricLayer>;
  }
}

export default IsometricTileLayer;
