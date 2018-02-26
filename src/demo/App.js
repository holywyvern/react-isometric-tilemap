import React from "react";

import { IsometricMap, IsometricTile } from "../lib";

const App = () => (
  <IsometricMap mapWidth={2} mapHeight={3} tileSize={48} slabSize={12}>
    <IsometricTile x={0} y={0} z={3} />
    <IsometricTile x={1} y={1} />
  </IsometricMap>
);

export default App;
