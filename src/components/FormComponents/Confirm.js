import React from "react";
import axios from "axios";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Confirm = ({ nextStep, prevStep, values, action }) => {
  const setType =
    action === "appointment"
      ? "Solicitud de cita médica"
      : "Solicitud de curso";

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:3001/requests", {
        request: {
          email: values.email,
          name: values.firstName,
          last_name: values.lastName,
          phone: values.phone,
          status: "not seen",
          request_type: setType,
        },
      })
      .then((response) => {
        if (response.data.status === "created") {
          nextStep();
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log("registration error", err);
      });
    event.preventDefault();
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
              <Button variant="contained" onClick={handleSubmit}>
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
