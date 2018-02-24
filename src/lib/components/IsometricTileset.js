import React, { Component } from "react";
import PropTypes from "prop-types";

class IsometricTileset extends Component {
  static propTypes = {
    map: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired,
    sizes: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  static defaultProps = {
    map: {
      width: 1,
      height: 1
    },
    sizes: {
      tile: 64,
      slab: 16
    }
  };

  render() {
    const { map, sizes, children } = this.props;
    const vars = {
      "--map-width": map.width,
      "--map-height": map.height,
      "--tile-size": sizes.tile,
      "--slab-size": sizes.slab
    };
    return (
      <div className="react-isometric-tilemap" style={vars}>
        {children}
      </div>
    );
  }
}

export default IsometricTileset;
