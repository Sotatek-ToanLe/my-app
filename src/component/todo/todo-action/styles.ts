import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  const sm = theme.breakpoints.down("sm");
  return {
    btn: {
      background: "green",
    },
    form: {
      display: "flex",
      justifyContent: "",
      marginTop: 30,
      "& div": {
        marginRight: 10,
      },
      "& button": {},
    },
    formControl: {},
  };
});
export default useStyles;
