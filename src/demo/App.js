import React from "react";

import { IsometricMap, IsometricTile, IsometricObject } from "../lib";

const textures = {
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

const App = () => (
  <IsometricMap
    mapWidth={2}
    mapHeight={3}
    tileSize={48}
    slabSize={12}
    margin={{ top: 12, left: 12, right: 12, bottom: 12 }}
  >
    <IsometricTile x={0} y={0} z={3} textures={textures} />
    <IsometricTile x={1} y={1} />
    <IsometricObject x={1} y={1} width={64} height={64}  />
  </IsometricMap>
);

export default App;
