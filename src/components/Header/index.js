import React from "react";
import { useStyles } from "./stylesHeader";
import SearchIcon from "@mui/icons-material/Search";
import MiniCards from "./MiniCards";

function Header() {
  const classes = useStyles();

 

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <div className={classes.header__logo}>
          <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1640720021~hmac=a315581b4957847861ed39d9a7d4d124" />
        </div>

        <div className={classes.header__search}>
          <SearchIcon className={classes.searchIcon} />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className={classes.header__right}>
        <MiniCards />
      </div>
    </div>
  );
}

export default Header;
