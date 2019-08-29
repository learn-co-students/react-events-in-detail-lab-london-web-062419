import React from "react";
import ReactDOM from "react-dom";

// These must be defined for code to work in browser
import CoordinatesButton from "./components/CoordinatesButton";
import DelayedButton from "./components/DelayedButton";

const coords = mouseCoords => {
  console.log(mouseCoords);
};

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={coords} />
    <DelayedButton onDelayedClick={event => console.log(event)} delay={1500} />
  </div>,
  document.getElementById("global")
);
