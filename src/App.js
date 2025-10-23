import React from "react";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Program from "./pages/Program";
import Countdown from "./pages/Countdown";
import Address from "./pages/Address";
import Confirm from "./pages/Confirm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Home />
      <Story />
      <Program />
      <Countdown />
      <Address />
      <Confirm/>
    </div>
  );
}

export default App;
