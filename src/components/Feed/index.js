import React, { useState, useEffect } from "react";
import { useStyles } from "./stylesFeed";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Post } from "../index";
import Avatar from "@mui/material/Avatar";
import { db } from "../../firebase/firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/userReducer";
import FlipMove from "react-flip-move";

const optionsData = [
  { icon: InsertPhotoIcon, title: "Photo", color: { color: "#70b5f9" } },

  {
    icon: YouTubeIcon,
    title: "Video",
    color: { color: "#7fc15e" },
  },

  {
    icon: TodayIcon,
    title: "Event",
    color: { color: "#e7a33e" },
  },

  {
    icon: AssignmentIcon,
    title: "Write Article",
    color: { color: "#fc9295" },
  },
];

function Feed() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  const user = useSelector(selectUser);

  const classes = useStyles();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log("snapshot", snapshot);
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  console.log("userssss", user);

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: "Developer",
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className={classes.feed}>
      <div className={classes.feed__input}>
        <div className="feed__form">
          <Avatar className={classes.profileImage} src={user.photoURL} />

          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              placeholder="Start a post"
              className="inputText"
              value={input}
              onChange={({ target }) => setInput(target.value)}
            />
            <input type="submit" className="inputRadio" />
          </form>
        </div>

        <div className={classes.feed__options}>
          {optionsData.map((item) => {
            return (
              <div className="options">
                {<item.icon style={item.color} />}
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <FlipMove enterAnimation="accordionVertical">
        {post.map(({ id, data: { name, description, message, photoURL } }) => {
          return (
            <Post
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
              id={id}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
