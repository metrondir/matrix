import React from "react";
import DynamicMatrix from "./MatrixW";

const App = () => {
  return (
    <div>
      <h1>Matrix Editor</h1>
      <div className="matrix-row">
        <DynamicMatrix />
      </div>
    </div>
  );
};

export default App;
