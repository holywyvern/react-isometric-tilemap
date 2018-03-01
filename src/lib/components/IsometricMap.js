import React, { Component } from "react";
import PropTypes from "prop-types";

import MiniSignal from "mini-signals";
import raf from "raf";

import "./IsometricMap.scss";
import IsometricMapEvent from "./IsometricMapEvent";

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
    }).isRequired,
    offsetY: PropTypes.number,
    onMouseAction: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
  };

  static defaultProps = {
    sizeUnit: "1px",
    offsetY: 0
  };

  static childContextTypes = {
    ticker: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.ticker = new MiniSignal();
  }

  componentDidMount() {
    this.__isMounted = true;
    this.__lastUpdate = Date.now();
    raf(this.onFrameUpdate);
  }

  componentWillUnmount() {
    this.__isMounted = false;
  }

  getChildContext() {
    return {
      ticker: this.ticker
    };
  }

  onFrameUpdate = delta => {
    if (!this.__isMounted) return;
    raf(this.onFrameUpdate);
    const now = Date.now();
    this.ticker.dispatch(now - this.__lastUpdate);
    this.__lastUpdate = now;
  };

  onMouseDown = e => {
    if (e.button === 0) {
      const { onMouseDown, onMouseAction } = this.props;
      const event = new IsometricMapEvent(this, -1, -1, "down", "map");
      if (typeof onMouseAction === "function") {
        onMouseAction(event);
      }
      if (typeof onMouseDown === "function") {
        onMouseDown(event);
      }
    }
  };

  onMouseUp = e => {
    if (e.button === 0) {
      const { onMouseUp, onMouseAction } = this.props;
      const event = new IsometricMapEvent(this, -1, -1, "up", "map");
      if (typeof onMouseAction === "function") {
        onMouseAction(event);
      }
      if (typeof onMouseUp === "function") {
        onMouseUp(event);
      }
    }
  };

  onMouseEnter = e => {
    if (e.button === 0) {
      const { onMouseEnter, onMouseAction } = this.props;
      const event = new IsometricMapEvent(this, -1, -1, "enter", "map");
      if (typeof onMouseAction === "function") {
        onMouseAction(event);
      }
      if (typeof onMouseEnter === "function") {
        onMouseEnter(event);
      }
    }
  };

  onMouseLeave = e => {
    if (e.button === 0) {
      const { onMouseLeave, onMouseAction } = this.props;
      const event = new IsometricMapEvent(this, -1, -1, "leave", "map");
      if (typeof onMouseAction === "function") {
        onMouseAction(event);
      }
      if (typeof onMouseLeave === "function") {
        onMouseLeave(event);
      }
    }
  };

  render() {
    const {
      children,
      mapWidth,
      mapHeight,
      tileSize,
      slabSize,
      sizeUnit,
      margin,
      offsetY
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
      "--margin-right": margin.right,
      "--map-max-dimension": Math.max(mapWidth, mapHeight),
      "--map-offset-y": offsetY
    };
    return (
      <div
        className="react-isometric-map-wrapper"
        style={vars}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="react-isometric-map">{children}</div>
      </div>
    );
  }
}

export default IsometricMap;
