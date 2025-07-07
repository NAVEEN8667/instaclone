import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";
const App = () => {
  return (
    <div className="instabody">
      <Sidebar />
      <Feed />
      <Suggestions />
    </div>
  );
};

export default App;
