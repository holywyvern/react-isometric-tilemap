import React from "react";

import { IsometricMap, IsometricTile, IsometricObject } from "../lib";

const textures1 = {
  floor: "./floor.png",
  leftWall: {
    top: "./left-top.png",
    bottom: "./left-bottom.png",
    middle: "./left-middle.png"
  },
  rightWall: {
    top: "./right-top.png",
    bottom: "./right-bottom.png",
    middle: "./right-middle.png"
  }  
};

const textures2 = {
  floor: "./floor2.png",
  leftWall: {
    top: "./left-top.png",
    bottom: "./left-bottom.png",
    middle: "./left-middle.png"
  },
  rightWall: {
    top: "./right-top.png",
    bottom: "./right-bottom.png",
    middle: "./right-middle.png"
  }  
};

const App = () => (
  <IsometricMap
    mapWidth={2}
    mapHeight={3}
    tileSize={48}
    slabSize={12}
    margin={{ top: 12, left: 12, right: 12, bottom: 12 }}
    offsetY={100}
  >
    <IsometricTile x={0} y={0} z={3} frames={[textures1]} delay={0} />
    <IsometricTile x={1} y={1} frames={[textures1, textures2]} delay={200} />
    <IsometricObject x={1} y={1} z={0} width={85} height={186}  frames={["./tree.png"]}  />
  </IsometricMap>
);

export default App;
