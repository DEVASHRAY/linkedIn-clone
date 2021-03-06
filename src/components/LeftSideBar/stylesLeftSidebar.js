import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    flex: 0.25,
    flexDirection: "column",
  },

  sidebar__profile: {
    width: "100%",
    borderBottom: "1px solid #ccc",
    textAlign: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingBottom: 10,
    overflow: "hidden",
    "& .backgroundImg": {
      width: "100%",
      height: 50,
    },
  },

  profile__details: {
    "& .avator": {
      width: 60,
      height: 60,
      margin: "0px auto",
      ObjectFit: "contain",
      marginTop: "-30px",
    },

    "& h4": {
      marginTop: 20,
      marginBottom: 0,
      fontSize: "1.2rem",
    },

    "& p": {
      margin: "5px 10px",
      fontSize: "0.9rem",
      color: "#333",
    },
  },

  profile__stats: {
    display: "flex",
    justifyContent: "center",
    textAlign: "left",
    fontSize: "0.9rem",
    padding: "0px 10px",
    alignItems: "center",

    "& :first-child": { marginTop: 10 },
  },

  sidebar__recent: {
    margin: "10px 0px",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    position: "sticky",
    top: 60,

    "& p": {
      margin: "0px 0px 10px 0px",
      fontSize: "0.9rem",
      display: "flex",
      color: "#000",
      alignItems: "center",
    },

    "& .hash": {
      "& span": {
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 8,
        color: "#333",
      },
    },
  },
});
