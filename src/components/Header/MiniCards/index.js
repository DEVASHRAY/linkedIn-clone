import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useStyles } from "./stylesMiniCards";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userReducer";
import { Avatar } from "@mui/material";
import firebase from "firebase";
import { auth } from "../../../firebase/firebase";

function MiniCards({ icon, title }) {
  const classes = useStyles();
  const user = useSelector(selectUser);

  const cards = [
    {
      icon: HomeIcon,
      title: "Home",
    },
    {
      icon: PeopleIcon,
      title: "My Network",
    },
    {
      icon: BusinessCenterIcon,
      title: "Jobs",
    },
    {
      icon: MessageIcon,
      title: "Messaging",
    },
    {
      icon: NotificationsIcon,
      title: "Notification",
    },
    {
      icon: user.photoURL,
      title: user.displayName,
    },
  ];

  console.log("header", user);
  const renderMiniCards = () => {
    const getCard = cards.map((card, i) => {
      return (
        <div
          className={classes.header__options}
          onClick={() => {
            if (i == cards.length - 1) {
              auth.signOut();
            }
          }}
        >
          {i == cards.length - 1 ? <Avatar src={card.icon} /> : <card.icon />}
          <span>{card.title}</span>
        </div>
      );
    });

    return getCard;
  };

  return <>{renderMiniCards()}</>;
}

export default MiniCards;
