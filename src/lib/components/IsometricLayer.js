import React, { Component } from "react";
import PropTypes from "prop-types";

class IsometricLayer extends Component {
  static propTypes = {
    type: PropTypes.string,
    map: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }),
    sizes: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  };
  static defaultProps = {
    type: "tiles",
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
    const { children, type } = this.props;
    return <div className={`isometric-tileset-layer ${type}`}>{children}</div>;
  }
}

export default IsometricLayer;
