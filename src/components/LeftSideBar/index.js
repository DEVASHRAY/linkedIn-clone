import React from "react";
import { useStyles } from "./stylesLeftSidebar";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";

function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__profile}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFu6QavOCPOC3y6skmaG6cpNXM3PBIQum1g&usqp=CAU" />

        <div className={classes.profile__details}>
          <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" />
          <h4>Devashray</h4>
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
    </div>
  );
}

export default SideBar;
