import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  header__options: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px 15px",
    fontSize: 14,
    color: "#565656",
    position: "relative",
    cursor: "pointer",

    "&:first-child": {
      color: "#000",
    },

    "&:first-child::before": {
      content: '"-"',
      position: "absolute",
      left: -10,
      right: -10,
      backgroundColor: "#333",
      height: 1,
      bottom: "-5px",
    },
  },
});
