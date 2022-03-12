import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Addtask from "./component/Addtask/Addtask";
import Listtask from "./component/Listtask/Listtask";

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo APP</h1>
      <Addtask />
      <Listtask />
    </div>
  );
};

export default App;
