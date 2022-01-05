import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  post: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },

  post__header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  post__left: {
    display: "flex",
    alignItems: "center",

    "& .post_profile_details": {
      "& h3": {
        fontSize: 14,
        margin: 0,
        marginLeft: 10,
      },
      "& p": {
        fontSize: 12,
        margin: 0,
        marginLeft: 10,
      },
    },
  },

  post__body: {
    padding: "20px 0px",
    "& p": {
      fontSize: "1rem",
    },
  },

  post__footer: {
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #ccc",
    paddingTop: 10,
    marginTop: 10,
  },

  post__footer__options: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginRight: 30,

    "& svg": {
      marginRight: 7,
      color: "rgb(90,90,90)",
    },

    "& span": {
      color: "rgb(90,90,90)",
    },
  },
});
