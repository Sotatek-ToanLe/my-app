import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return {
    main: {
      textAlign: "center",
      "& h4": {
        marginTop: 20,
      },
    },
    form: {
      margin: "auto",
      border: "1px solid",
      padding: 30,
      marginTop: 30,
      width: 500,
      borderRadius: 20,
      "& div": {
        marginBottom: 20,
        "& input": {
          width: "100%",
          height: 30,
        },
        "& button": {
          height: 30,
          width: 100,
          color: "white",
          background: "#3f51b5",
          border: "none",
        },
      },
    },
    dFlex: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});
export default useStyles;
