import React from "react";

import { IsometricMap, IsometricTile, IsometricObject } from "../lib";

import "./App.scss";

const textures1 = {
  floor: require("./floor.png"),
  leftWall: {
    top: require("./left-top.png"),
    bottom: require("./left-bottom.png"),
    middle: require("./left-middle.png")
  },
  rightWall: {
    top: require("./right-top.png"),
    bottom: require("./right-bottom.png"),
    middle: require("./right-middle.png")
  }
};

const mapWidth = 10;
const mapHeight = 10;

const heights = [
  7,
  7,
  5,
  4,
  4,
  3,
  2,
  3,
  2,
  2,
  7,
  7,
  5,
  4,
  4,
  3,
  2,
  3,
  2,
  2,
  7,
  7,
  5,
  4,
  4,
  3,
  2,
  3,
  2,
  2,
  7,
  7,
  5,
  4,
  4,
  3,
  2,
  3,
  2,
  2,
  7,
  7,
  5,
  4,
  4,
  3,
  2,
  3,
  2,
  2,
  5,
  5,
  5,
  4,
  3,
  3,
  2,
  3,
  2,
  2,
  5,
  5,
  4,
  4,
  3,
  3,
  2,
  3,
  1,
  1,
  5,
  5,
  3,
  3,
  3,
  3,
  2,
  3,
  1,
  1,
  5,
  5,
  3,
  3,
  3,
  3,
  2,
  3,
  1,
  1,
  4,
  0,
  0,
  4,
  3,
  3,
  2,
  3,
  1,
  0
];

const App = () => (
  <div className="app">
    <nav>
      <h1>React Isometric Maps</h1>
      <ul>
        <li>
          <a href="./manual/index.html">Docs</a>
        </li>
        <li>
          <a
            href="https://github.com/holywyvern/react-isometric-tilemap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
    <div className="container">
      <IsometricMap
        mapWidth={mapWidth}
        mapHeight={mapHeight}
        tileSize={48}
        slabSize={12}
        margin={{ top: 12, left: 12, right: 12, bottom: 12 }}
        offsetY={100}
      >
        {heights.map((z, index) => {
          if (z === 0) {
            return null;
          }
          const x = index % mapWidth;
          const y = Math.floor(index / mapWidth);
          const result = [
            <IsometricTile
              key={`tile${index}`}
              x={x}
              y={y}
              z={z}
              frames={[textures1]}
            />
          ];
          if (Math.random() < 0.1) {
            result.push(
              <IsometricObject
                key={`object${index}`}
                x={x}
                y={y}
                z={z}
                width={85}
                height={186}
                frames={[require("./tree.png")]}
                active
              />
            );
          }
          return result;
        })}
      </IsometricMap>
    </div>
  </div>
);

export default App;
