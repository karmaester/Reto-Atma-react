import React from "react";
import { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Confirm from "./Confirm";
import Success from "./Success";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const UserForm = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  const values = { name, last_name, email, phone };

  switch (step) {
    case 1:
      return (
        <MuiThemeProvider>
          <>
            <div className="rounded mb-5">
              <h3>Por favor ingrese sus datos y oprima el boton "Guardar".</h3>
              <ValidatorForm className="center">
                <TextField
                  label="Nombre"
                  variant="filled"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <br />
                <TextField
                  label="Apellido"
                  placeholder="Apellidos"
                  variant="filled"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <TextValidator
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "este campo es requerido",
                    "email no es valido",
                  ]}
                  label="Email"
                  variant="filled"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <TextValidator
                  validators={["minStringLength:8", "isNumber"]}
                  errorMessages={[
                    "No es un número de teléfono válido",
                    "Sólo pueden ser números",
                  ]}
                  label="Número de teléfono"
                  variant="filled"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <Button
                  variant="contained"
                  startIcon={<SaveIcon />}
                  onClick={() => setStep(2)}
                >
                  {" "}
                  Guardar{" "}
                </Button>
              </ValidatorForm>
            </div>
          </>
        </MuiThemeProvider>
      );
    case 2:
      return (
        <Confirm
          nextStep={() => setStep(3)}
          prevStep={() => setStep(1)}
          values={values}
          action={props.action}
        />
      );
    case 3:
      return <Success name={values.name} action={props.action} />;
    default:
      return <p>Default</p>;
  }
};

export default UserForm;
