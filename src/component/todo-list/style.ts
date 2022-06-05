import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      "& ul": {
        listStyle: "none",
        padding: 0,
      },
    },
    list: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "8px 0",
      "& button": {
        margin: "0 10px",
      },
    },
    row: {
      boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
      padding: 20,
      marginTop: 10,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    description: {
      padding: "20px 0",
      borderTop: "1px solid #07826d",
    },
    title: {
      color: "#303030",
      fontSize: 16,
    },
    label: {
      borderRadius: 10,
      color: "white",
      background: "#07826d",
      textTransform: "uppercase",
      padding: 6,
      fontSize: "10px !important",
    },
  };
});
export default useStyles;
