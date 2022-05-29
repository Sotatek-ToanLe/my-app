import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

        <Button color="inherit" onClick={() => {}}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
