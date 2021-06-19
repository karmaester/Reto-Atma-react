import React, { Component } from "react";
import axios from "axios";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const SignUp = (props) => {
  const handelSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className="title-spacer m-0 column">
        <h1>Home</h1>
        <h1>Status: {props.loggedInStatus}</h1>
        <button onClick={() => handleLogoutClick()}>Logout</button>
        <Registration handelSuccessfulAuth={handelSuccessfulAuth} />
        <Login handelSuccessfulAuth={handelSuccessfulAuth} />
      </div>
    </div>
  );
};

export default SignUp;
