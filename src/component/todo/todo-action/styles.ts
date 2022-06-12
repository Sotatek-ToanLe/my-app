import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      height: "100%",
    },
    btn: {
      background: "green",
    },
    form: {},
    formControl: {
      marginBottom: 30,
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      height: 120,
      borderBottom: "1px solid #d7d7d7",
      marginBottom: 50,
      alignItems: "center",
    },
    dialog: {
      padding: 30,
      position: "absolute",
      right: 0,
      display: "flex",
      justifyContent: "space-between",
    },
    scrollPaper: {
      justifyContent: "end",
    },
    paperScroll: {
      height: "100vh",
    },
    paper: {
      width: 350,
      padding: 30,
      margin: 0,
    },
    container: {
      height: "auto",
    },
    groupBtn: {
      height: 120,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
    },
  };
});
export default useStyles;
