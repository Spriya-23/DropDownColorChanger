import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import ColorChanger from "./components/ColorChanger/ColorChanger";

const App = () => {
  return (
    <div className="ui container">
      <br />
      <h1>Colour changer</h1>
      <ColorChanger />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
