import React from "react";
import { useState } from "react";
import axios from "axios";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            name: name,
            last_name: last_name,
            phone: phone,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.status === "created") {
          props.handelSuccessfulAuth(response.data);
        }
      })
      .catch((err) => {
        console.log("registration error", err);
      });
    event.preventDefault();
  };

  return (
    <MuiThemeProvider>
      <>
        <div className="rounded mt-form">
          <h3>Por favor ingrese sus datos y oprima el boton "Registrarme".</h3>
          <ValidatorForm className="center">
            <TextField
              label="Nombres"
              name="name"
              placeholder="Nombres"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <TextField
              label="Apellidos"
              name="last_name"
              placeholder="Apellidos"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <br />
            <TextValidator
              validators={["required", "isEmail"]}
              errorMessages={["este campo es requerido", "email no es valido"]}
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <TextValidator
              validators={["minStringLength:8", "isNumber"]}
              errorMessages={[
                "No es un número de teléfono válido",
                "Sólo pueden ser números",
              ]}
              label="Teléfono"
              name="phone"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <br />
            <TextValidator
              validators={["minStringLength:6"]}
              errorMessages={["mínimo 6 caracteres"]}
              type="password"
              name="password"
              label="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <TextValidator
              validators={["isPasswordMatch", "required"]}
              errorMessages={["password mismatch", "this field is required"]}
              type="password"
              name="password_confirmation"
              label="Password confirmation"
              placeholder="Password confirmation"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
            <br />
            <Button variant="contained" onClick={handleSubmit}>
              {" "}
              Registrarme{" "}
            </Button>
          </ValidatorForm>
        </div>
      </>
    </MuiThemeProvider>
  );
};

export default Registration;
