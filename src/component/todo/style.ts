import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      display: "flex",
      marginTop: 100,
      "&  div": {
        flex: 2,
        width: "100%",
        marginRight: 20,
      },
      "& button": {
        flex: 1,
        height: 40,
      },
    },
    input: {},
    item: {},
    main: {
      textAlign: "center",
      padding: 30,
      width: "50%",
      margin: "auto",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 30,
    },
  };
});
export default useStyles;
