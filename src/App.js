import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Appointement from "./components/Appointment";
import Blog from "./components/Blog";
import Course from "./components/Course";
import WhoWeAre from "./components/WhoWeAre";
import SignUp from "./components/Register";
import LogIn from "./components/Login";

const App = () => {
  const [loggedStatus, setLoggedStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const checkLoginStatus = () => {
    axios
      .get("https://tim-bunnyhug-56158.herokuapp.com/logged_in", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.logged_in && loggedStatus === "NOT_LOGGED_IN") {
          setLoggedStatus("LOGGED_IN");
          setUser(res.data.user);
        } else if (!res.data.logged_in && loggedStatus === "LOGGED_IN") {
          setLoggedStatus("NOT_LOGGED_IN");
          setUser({});
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  });

  const handleLogout = () => {
    setLoggedStatus("NOT_LOGGED_IN");
    setUser({});
  };

  const handleLogin = (data) => {
    setLoggedStatus("LOGGED_IN");
    setUser(data.user);
  };

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
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedStatus}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props) => (
              <Dashboard
                {...props}
                handleLogout={handleLogout}
                loggedInStatus={loggedStatus}
              />
            )}
          />
          <Route
            exact
            path={"/consulta"}
            render={(props) => (
              <Appointement
                {...props}
                handleLogout={handleLogout}
                loggedInStatus={loggedStatus}
                user={user}
              />
            )}
          />
          <Route
            exact
            path={"/curso"}
            render={(props) => (
              <Course
                {...props}
                handleLogout={handleLogout}
                loggedInStatus={loggedStatus}
              />
            )}
          />
          <Route
            exact
            path={"/blog"}
            render={(props) => (
              <Blog
                {...props}
                handleLogout={handleLogout}
                loggedInStatus={loggedStatus}
              />
            )}
          />
          <Route
            exact
            path={"/quienes-somos"}
            render={(props) => (
              <WhoWeAre
                {...props}
                handleLogout={handleLogout}
                loggedInStatus={loggedStatus}
              />
            )}
          />
          <Route
            exact
            path={"/registro"}
            render={(props) => (
              <SignUp
                {...props}
                handleLogout={handleLogout}
                handleLogin={handleLogin}
                loggedInStatus={loggedStatus}
              />
            )}
          />
          <Route
            exact
            path={"/ingresar"}
            render={(props) => (
              <LogIn
                {...props}
                handleLogout={handleLogout}
                handleLogin={handleLogin}
                loggedInStatus={loggedStatus}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
