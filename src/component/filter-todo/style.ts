import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return {
    filter: {
      "& form": {
        marginTop: 20,
        "& > div": {
          marginBottom: 30,
        },
      },
    },
    radioGroup: {
      display: "flex",
      flexDirection: "row",
    },
  };
});
export default useStyles;
