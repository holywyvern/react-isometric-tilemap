import React, { Component } from "react";
import PropTypes from "prop-types";

import "./IsometricMap.scss";

class IsometricMap extends Component {
  static propTypes = {
    mapWidth: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    tileSize: PropTypes.number.isRequired,
    slabSize: PropTypes.number.isRequired,
    sizeUnit: PropTypes.string,
    margin: PropTypes.shape({
      top: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired
    }).isRequired
  };

  static defaultProps = {
    sizeUnit: "1px"
  };

  render() {
    const {
      children,
      mapWidth,
      mapHeight,
      tileSize,
      slabSize,
      sizeUnit,
      margin
    } = this.props;
    const vars = {
      "--map-width": mapWidth,
      "--map-height": mapHeight,
      "--tile-size": tileSize,
      "--slab-suze": slabSize,
      "--size-unit": sizeUnit,
      "--margin-top": margin.top,
      "--margin-bottom": margin.bottom,
      "--margin-left": margin.left,
      "--margin-right": margin.right
    };
    return (
      <div className="react-isometric-map-wrapper" style={vars}>
        <div className="react-isometric-map">{children}</div>
      </div>
    );
  }
}

export default IsometricMap;
