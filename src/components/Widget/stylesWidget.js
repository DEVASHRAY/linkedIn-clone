import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  widget: {
    display: "flex",
    flexDirection: "column",
    flex: 0.3,
    borderRadius: 10,
    marginBottom: 20,

    "& .widget__header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& h4": {
        margin: 0,
      },
      "& svg": {
        fontSize: 18,
      },
    },

    "& .widget__options": {
      margin: 0,
      padding: 0,
      paddingLeft: 15,
      listStyle: "circle",
      
    },

    "& li": {
      marginBottom: 10,
      cursor: "pointer",

      "& :before": {
        content: '"\\ 2022\\"',
        color: "green",
        fontWeight: "bold",
        display: "inline-block",
        width: "1em",
        marginLeft: "-1em",
      },
    },
  },

  widget__body: {
    marginTop: 10,

    "& h4": {
      margin: 0,
      fontSize: 15,
      fontWeight: "normal",
    },

    "& p": {
      margin: 0,
      fontSize: 12,
      color: "#959595",
    },
  },

  widget__container: {
    marginBottom: 10,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
  },

  widget__bottom: {
    position: "sticky",
    top: 60,
  },
});
