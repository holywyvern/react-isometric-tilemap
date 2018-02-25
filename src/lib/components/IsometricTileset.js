import React, { Component, Children } from "react";

import MapProp from "../props/MapProp";
import SizeProp from "../props/SizeProp";

import "./IsometricTileset.scss";

class IsometricTileset extends Component {
  static propTypes = {
    map: MapProp.isRequired,
    sizes: SizeProp.isRequired
  };

  static defaultProps = {
    map: {
      width: 1,
      height: 1
    },
    sizes: {
      tile: 64,
      slab: 16,
      unit: "1px"
    }
  };

  render() {
    const { map, sizes, children } = this.props;
    const vars = {
      "--map-width": map.width,
      "--map-height": map.height,
      "--tile-size": sizes.tile,
      "--slab-size": sizes.slab,
      "--size-unit": sizes.unit,
      "--map-max-size": Math.max(map.width, map.height)
    };
    console.log(Math.max(map.width, map.height));
    return (
      <div className="react-isometric-tilemap" style={vars}>
        {Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              map,
              sizes
            });
          }
        })}
      </div>
    );
  }
}

export default IsometricTileset;
