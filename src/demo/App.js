import React from "react";

import { IsometricTileset, IsometricTileLayer } from "../lib";

const App = () => (
  <IsometricTileset
    sizes={{ tile: 64, slab: 16, unit: "1px" }}
    map={{ width: 4, height: 4 }}
  >
    <IsometricTileLayer />
  </IsometricTileset>
);

export default App;
