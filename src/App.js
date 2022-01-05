import React, { useEffect } from "react";
import "./index.css";
import { Feed, Header, LeftSideBar, LogIn, Widget } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutUser,
  selectUser,
} from "./redux/reducers/userReducer";
import { auth } from "./firebase/firebase";
function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("asd", userAuth);
        dispatch(
          loginUser({
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);

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
