import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Confirm = ({ nextStep, prevStep, values }) => {
  const continueToConfirm = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <>
        <div className="rounded">
          <List>
            <listItem>
              <ListItemText primary="Nombre" secondary={values.firstName} />
            </listItem>
            <br />
            <listItem>
              <ListItemText primary="Apellido" secondary={values.lastName} />
            </listItem>
            <br />
            <listItem>
              <ListItemText primary="Email" secondary={values.email} />
            </listItem>
            <br />
            <listItem>
              <ListItemText
                primary="Número de teléfono"
                secondary={values.phone}
              />
            </listItem>
            <br />
            <div className="buttonContainer">
              <Button className="mr-1" variant="contained" onClick={goBack}>
                {" "}
                Ir atrás{" "}
              </Button>
              <Button variant="contained" onClick={continueToConfirm}>
                {" "}
                Solicitar cita{" "}
              </Button>
            </div>
          </List>
        </div>
      </>
    </MuiThemeProvider>
  );
};

export default Confirm;
