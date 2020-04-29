import React from "react";
import Message from "./components/Message";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Message msg="this is message" />
      <Calculator />
    </div>
  );
}

export default App;
