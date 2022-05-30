import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/reducers";
import { removeToken } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 10,
    "& a": {
      color: "white",
      textDecoration: "none",
      paddingRight: 20,
      "&:hover": {
        color: "red",
      },
    },
  },
}));

const link = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/todo",
    title: "Todo",
  },
  {
    to: "/about",
    title: "About",
  },
];

const Header: React.FC = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const tokenSotre = useSelector((s: AppState) => s.auth.token);
  console.log({ tokenSotre });

  const router = useHistory();
  const handleLogin = () => {
    if (tokenSotre) {
      dispath(removeToken());
      router.replace("/");
    } else {
      router.replace("/login");
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My-app
        </Typography>
        <div className={classes.menu}>
          {link.map((item: any) => {
            return <Link to={item.to}>{item.title}</Link>;
          })}
        </div>

        <Button color="inherit" onClick={handleLogin}>
          {tokenSotre ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
