import React, { Component } from "react";
import axios from "axios";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      last_name: "",
      phone: "",
      registrationErrors: "",
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
    const { email, password, password_confirmation, name, last_name, phone } =
      this.state;

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
          this.props.handelSuccessfulAuth(response.data);
        }
      })
      .catch((err) => {
        console.log("registration error", err);
      });
    event.preventDefault();
  }
  render() {
    return (
      <MuiThemeProvider>
        <>
          <div className="rounded mt-form">
            <h3>
              Por favor ingrese sus datos y oprima el boton "Registrarme".
            </h3>
            <ValidatorForm>
              <TextField
                label="Nombres"
                name="name"
                placeholder="Nombres"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <br />
              <TextField
                label="Apellidos"
                name="last_name"
                placeholder="Apellidos"
                value={this.state.last_name}
                onChange={this.handleChange}
                required
              />
              <br />
              <TextValidator
                validators={["required", "isEmail"]}
                errorMessages={[
                  "este campo es requerido",
                  "email no es valido",
                ]}
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <br />
              <TextValidator
                validators={["minStringLength:8", "isNumber"]}
                errorMessages={[
                  "No es un número de teléfono válido",
                  "Sólo números",
                ]}
                label="Teléfono"
                name="phone"
                placeholder="Teléfono"
                value={this.state.phone}
                onChange={this.handleChange}
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
                value={this.state.password}
                onChange={this.handleChange}
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
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                required
              />
              <br />
              <Button variant="contained" onClick={this.handleSubmit}>
                {" "}
                Registrarme{" "}
              </Button>
            </ValidatorForm>
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}
