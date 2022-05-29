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
  };
});
export default useStyles;
