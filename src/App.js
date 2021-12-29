import React from "react";
import "./index.css";
import { Header, LeftSideBar } from "./components";

function App() {
  return (
    <div className="app_wrapper">
      <Header />

      <div className="app_body">
        <LeftSideBar />
      </div>
    </div>
  );
}

export default App;
