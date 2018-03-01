# React Isometric Tilemap

A library for displaying tilemaps and handling events on it.

## How to use

### Install the library:

```sh
npm i --save react-isometric-tilemap
```

Import this library in your code:

```js
// The map is the basic container, the tile is each square
import IsometricMap, { IsometricTile } from "react-isometric-tilemap";
// The styles are needed to display properly
import "react-isometric-tilemap/build/css/index.css";
```

Now you can create your own map with it:

```jsx
const MyMap = () => {
  <IsometricMap mapWidth={1} mapHeight={1} tileSize={32} slabSize={8}>
    <IsometricTile x={0} y={0} z={3} />
  </IsometricMap>;
};
```

Please refer for the documentation for more details about the components provided.
