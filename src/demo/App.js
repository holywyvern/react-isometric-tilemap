import React from "react";

import { IsometricMap, IsometricTile, IsometricObject } from "../lib";

const App = () => (
  <IsometricMap
    mapWidth={2}
    mapHeight={3}
    tileSize={48}
    slabSize={12}
    margin={{ top: 12, left: 12, right: 12, bottom: 12 }}
  >
    <IsometricTile x={0} y={0} z={1} />
    <IsometricTile x={1} y={1} />
    <IsometricObject x={1} y={1} width={64} height={64} />
  </IsometricMap>
);

export default App;
