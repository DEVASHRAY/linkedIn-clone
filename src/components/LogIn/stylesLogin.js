import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  login: {
    width: 400,
    margin: "100px auto",
    textAlign: "center",

    "& img": {
      width: 200,
      marginBottom: 20,
    },
  },

  login__form: {
    "& input": {
      display: "block",
      height: 40,
      width: "100%",
      marginBottom: 10,
      padding: "0px 10px",
      border: "2px solid #000",
      borderRadius: 5,
      boxSizing: "border-box",
    },

    "& input[type=submit]": {
      borderRadius: 0,
      backgroundColor: "#0077b5",
      border: 0,
      color: "#FFF",
      letterSpacing: 2,
      cursor: "pointer",
    },

    "& span": {
      color: "#0077b5",
      cursor: "pointer",
    },
  },
});
