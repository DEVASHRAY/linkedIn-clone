import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  feed: {
    display: "flex",
    flex: 0.6,
    flexDirection: "column",
    margin: "0px 30px",
  },

  feed__input: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",

    "& .feed__form": {
      display: "flex",
      flex: 1,
      alignItems: "center",
    },

    "& form": {
      display: "flex",
      alignItem: "center",
      marginBottom: 10,
      flex: 1,

      "& .inputText": {
        flex: 1,
        borderRadius: 20,
        padding: "0px 10px",
        marginLeft: 10,
        height: 40,
        outline: 0,
        border: "1px solid #ccc",
      },

      "& .inputRadio": {
        display: "none",
      },
    },
  },

  feed__options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",

    "& .options ": {
      display: "flex",
      alignItems: "center",
      color: "#333",
      fontSize: 16,

      // backgroundColor: "red",

      "& svg": {
        marginRight: 2,
      },

      "& span ": {
        padding: "10px 0px",
        borderRadius: 5,
      },

      "&:hover": {
        backgroundColor: "#eee",
      },
    },
  },

  profileImage: {
    height: 30,
    width: 30,
    marginBottom: 11,
  },
});
