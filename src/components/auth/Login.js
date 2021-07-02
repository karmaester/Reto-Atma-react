import React, { Component } from "react";
import axios from "axios";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "https://tim-bunnyhug-56158.herokuapp.com/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handelSuccessfulAuth(response.data);
        }
      })
      .catch((err) => {
        console.log("login error", err);
      });
    event.preventDefault();
  }
  render() {
    return (
      <MuiThemeProvider>
        <>
          <div className="rounded">
            <TextField
              type="email"
              label="Email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <br />
            <TextField
              type="password"
              name="password"
              label="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <br />
            <Button variant="contained" onClick={this.handleSubmit}>
              {" "}
              Ingresar{" "}
            </Button>
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}
