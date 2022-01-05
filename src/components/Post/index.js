import React from "react";
import { useStyles } from "../Post/stylesPost";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const footerOptions = [
  {
    icons: ThumbUpIcon,
    titles: "Like",
  },
  {
    icons: CommentIcon,
    titles: "Comment",
  },
  {
    icons: ShareIcon,
    titles: "Share",
  },
  {
    icons: SendIcon,
    titles: "Share",
  },
];

const Post = ({ name, description, message, photoURL, id }) => {
  const classes = useStyles();
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <div className={classes.post__left}>
          <Avatar className="avator" />
          <div className="post_profile_details">
            <h3>{name}</h3>
            <p> {description}</p>
          </div>
        </div>

        <div className={classes.post__right}>
          <MoreVertIcon />
        </div>
      </div>

      <div className={classes.post__body}>
        <p>{message}</p>
      </div>

      <div className={classes.post__footer}>
        {footerOptions.map((item) => {
          return (
            <div className={classes.post__footer__options}>
              {<item.icons />}
              <span>{item.titles}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
