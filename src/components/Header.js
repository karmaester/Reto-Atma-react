import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Modal from "react-modal";
import Logo from "../images/logo.png";
import TransitionsModal from "./Modal";

Modal.setAppElement("#root");

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "rgba(255, 255, 255, 0.46)",
    zIndex: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    padding: "1rem",
  },
  logoContainer: {
    flexGrow: "1",
  },
}));
const Header = (props) => {
  const classes = useStyles();
  return (
    <div id="header" className="z-10">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <div className={classes.logoContainer}>
            <Link to="/">
              <img className="logo" src={Logo} alt="Logo RetoAtma" />
            </Link>
          </div>
          <TransitionsModal {...props} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
