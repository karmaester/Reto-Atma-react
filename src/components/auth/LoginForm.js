import React from "react";
import { useState } from "react";
import axios from "axios";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

const Login = ({ handelSuccessfulAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginErrors, setloginErrors] = useState("");

  const handleSubmit = (event) => {
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
          handelSuccessfulAuth(response.data);
        }
      })
      .catch((err) => {
        console.log("login error", err);
      });
    event.preventDefault();
  };

  return (
    <MuiThemeProvider>
      <>
        <div className="rounded">
          <h3>Por favor ingrese email y contraseña.</h3>
          <ValidatorForm className="center" onSubmit={handleSubmit}>
            <TextValidator
              validators={["required", "isEmail"]}
              errorMessages={["este campo es requerido", "email no es valido"]}
              type="email"
              label="Email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <TextField
              type="password"
              name="password"
              label="Contraseña"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <Button variant="contained" type="submit">
              {" "}
              Ingresar{" "}
            </Button>
          </ValidatorForm>
        </div>
      </>
    </MuiThemeProvider>
  );
};

export default Login;
