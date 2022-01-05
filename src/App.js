import React from "react";
import "./index.css";
import { Feed, Header, LeftSideBar, LogIn, Widget } from "./components";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userReducer";
function App() {
  
  const user = useSelector(selectUser);

  console.log("user", user);

  return (
    <>
      {!user ? (
        <LogIn />
      ) : (
        <div className="app_wrapper">
          <Header />
          <div className="app_body">
            <LeftSideBar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
