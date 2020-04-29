import React from "react";
import Message from "./components/Message";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Message msg="Calculator app" />
      <Calculator />
    </div>
  );
}

export default App;
