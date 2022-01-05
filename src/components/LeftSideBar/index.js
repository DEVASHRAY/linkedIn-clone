import React from "react";
import { useStyles } from "./stylesLeftSidebar";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/userReducer";

function SideBar() {
  const user = useSelector(selectUser);

  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__profile}>
        <img
          className="backgroundImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFu6QavOCPOC3y6skmaG6cpNXM3PBIQum1g&usqp=CAU"
        />

        <div className={classes.profile__details}>
          <Avatar className="avator" src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <p>{`React & React-Native Developer`}</p>
        </div>

        <div className={classes.profile__stats}>
          <span style={{ flex: 1 }}>Who viewed your profile</span>
          <span className={classes.profile__number}>20</span>
        </div>

        <div className={classes.profile__stats}>
          <span style={{ flex: 1 }}>
            Connections <br />
            <b>Grow Your Network</b>
          </span>
          <span className={classes.profile__number}>20</span>
        </div>
      </div>

      <div className={classes.sidebar__recent}>
        <p>Recent</p>
        <p className="hash">
          <span># </span>branding
        </p>
        <p className="hash">
          <span># </span>marketing
        </p>
        <p className="hash">
          <span># </span>web development
        </p>
        <p className="hash">
          <span># </span>programming
        </p>
        <p className="hash">
          <span># </span>react js
        </p>
        <p className="hash">
          <span># </span>redux toolkit
        </p>
      </div>
    </div>
  );
}

export default SideBar;
