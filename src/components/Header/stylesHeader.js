import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  header: {
    display: "flex",
    backgroundColor: "#FFF",
    padding: "10px 15%",
    justifyContent: "space-between",
    height: 35,
    position: "sticky",
    top: 0,
    marginBottom: 20,
    zIndex: 99,
  },

  header__left: {
    display: "flex",

    "& img": {
      height: 30,
      marginRight: 10,
    },
  },

  header__search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#eef3f8",
    padding: "3px 10px",

    "& input": {
      backgroundColor: "transparent",
      border: 0,
      outline: 0,
      minWidth: 220,
    },

    "& svg": {
      fontSize: 20,
      color: "#333",
    },
  },

  header__right: {
    display: "flex",
    alignItems: "center",
  },
});
