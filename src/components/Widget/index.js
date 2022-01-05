import React from "react";
import { useStyles } from "./stylesWidget";
import InfoIcon from "@mui/icons-material/Info";

const linkedInNews = [
  {
    header: "Slaying Job Search Fees",
    description: "6d ago * 4,455 readers ",
  },

  {
    header: "A Two Pizza rule for eating",
    description: "2d ago * 1,248 readers ",
  },
  {
    header: "How to handle a workplace breakup",
    description: "3d ago * 14,455 readers ",
  },
  {
    header: "Flexi leave is the new flexi",
    description: "2d ago * 1,436 readers ",
  },
  {
    header: "Shorter hour boost productivity",
    description: "5d ago * 31,243 readers ",
  },
];

const widgetBottomOptions = [
  {
    header: "LinkedIn with a Heavy Heat",
    description: "Yogi Adityanath",
  },

  {
    header: "Building Resillience",
    description: "Narendra Modi",
  },

  {
    header: "Critical Thinking for Better Judgement",
    description: "Amit Shah",
  },

  {
    header: "Capture World in one day",
    description: "Adolf Hitler",
  },

  {
    header: "Shorter hour boost productivity",
    description: "5d ago * 31,243 readers ",
  },
];

function Widget() {
  const classes = useStyles();
  return (
    <div className={classes.widget}>
      <div className={`${classes.widget__container}  ${classes.widget__top}`}>
        {" "}
        <div className="widget__header">
          <h4>LinkedIn News</h4>
          <InfoIcon />
        </div>
        <div className={classes.widget__body}>
          <ul className="widget__options">
            {linkedInNews.map((item) => {
              return (
                <li>
                  <h4>{item.header}</h4>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className={`${classes.widget__bottom}  ${classes.widget__container}`}
      >
        <div className="widget__header">
          <h4> Today's top courses</h4>
          <InfoIcon />
        </div>

        <div className={classes.widget__body}>
          <ul className="widget__options">
            {widgetBottomOptions.map((item) => {
              return (
                <li>
                  <h4>{item.header}</h4>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Widget;
