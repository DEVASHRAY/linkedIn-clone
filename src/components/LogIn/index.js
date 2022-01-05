import { TryOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers/userReducer";
import { auth } from "../../firebase/firebase";
import { useStyles } from "./stylesLogin";

function LogIn() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(true);

  const dispatch = useDispatch();

  const register = async (e) => {
    e.preventDefault();

    if (!name || !photoURL || !password || !email) {
      return alert(" All Field are required");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              loginUser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: photoURL,
                displayName: name,
              })
            );
          });
      })
      .catch((err) => alert("error in signing up"));

    setName("");
    setEmail("");
    setPassword("");
    setPhotoURL("");
  };

  const signIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Enter right Credentials");
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          loginUser({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
        );
      })
      .catch((err) => alert(err));
  };

  return (
    <div className={classes.login}>
      <img src="https://cuttingedgepr.com/wp-content/uploads/2015/02/LinkedIn-logo.jpg" />

      {signUp && (
        <form className={classes.login__form} onSubmit={(e) => register(e)}>
          <input
            type="text"
            placeholder="Full Name (Required if Registering)"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />

          <input
            type="text"
            placeholder="Profile Picture URL"
            value={photoURL}
            onChange={({ target }) => setPhotoURL(target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />

          <input type="submit" value="Sign Up" />

          <h4>
            Already a member ?{" "}
            <span onClick={(e) => setSignUp(false)}>Login Here</span>
          </h4>
        </form>
      )}

      {!signUp && (
        <form className={classes.login__form} onSubmit={(e) => signIn(e)}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />

          <input type="submit" value="Sign In" />

          <h4>
            Not a member ?{" "}
            <span onClick={(e) => setSignUp(TryOutlined)}>Register Here</span>
          </h4>
        </form>
      )}
    </div>
  );
}

export default LogIn;
