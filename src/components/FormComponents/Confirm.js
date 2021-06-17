import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Confirm = ({ nextStep, prevStep, values, action }) => {
  const continueToConfirm = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  const buttonText =
    action === "appointment" ? "Solicitar cita" : "Inscripción";

  return (
    <MuiThemeProvider>
      <>
        <div className="rounded">
          <List>
            <ListItem>
              <ListItemText primary="Nombre" secondary={values.firstName} />
            </ListItem>
            <br />
            <ListItem>
              <ListItemText primary="Apellido" secondary={values.lastName} />
            </ListItem>
            <br />
            <ListItem>
              <ListItemText primary="Email" secondary={values.email} />
            </ListItem>
            <br />
            <ListItem>
              <ListItemText
                primary="Número de teléfono"
                secondary={values.phone}
              />
            </ListItem>
            <br />
            <div className="buttonContainer">
              <Button className="mr-1" variant="contained" onClick={goBack}>
                {" "}
                Ir atrás{" "}
              </Button>
              <Button variant="contained" onClick={continueToConfirm}>
                {buttonText}
              </Button>
            </div>
          </List>
        </div>
      </>
    </MuiThemeProvider>
  );
};

export default Confirm;
