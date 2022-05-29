import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  const sm = theme.breakpoints.down("sm");
  return {
    btn: {
      background: "green",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      marginTop: 30,
      "& div": {
        marginRight: 10,
      },
      "& button": {},
    },
  };
});
export default useStyles;
