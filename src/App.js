import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Appointement from "./components/Appointment";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedStatus: "NOT_LOGGED_IN",
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in && this.state.loggedStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedStatus: "LOGGED_IN",
            user: res.data.user,
          });
        } else if (
          !res.data.logged_in &&
          this.state.loggedStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedStatus}
                />
              )}
            />
            <Route
              exact
              path={"/consulta"}
              render={(props) => (
                <Appointement
                  {...props}
                  loggedInStatus={this.state.loggedStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
