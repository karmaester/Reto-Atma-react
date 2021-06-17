import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const continueToConfirm = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <MuiThemeProvider>
      <>
        <div className="rounded">
          <TextField
            label="Nombre"
            variant="filled"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            label="Apellido"
            variant="filled"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            label="Email"
            variant="filled"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <TextField
            label="Número de teléfono"
            variant="filled"
            onChange={handleChange("phone")}
            defaultValue={values.phone}
          />
          <br />
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={continueToConfirm}
          >
            {" "}
            Guardar{" "}
          </Button>
        </div>
      </>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;
