import React from "react";
import axios from "axios";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactLoading from "react-loading";
import { useState } from "react";

const Confirm = ({ nextStep, prevStep, values, action }) => {
  const [loading, setLoading] = useState(undefined);

  const setType =
    action === "appointment"
      ? "Solicitud de cita médica"
      : "Solicitud de curso";

  const handleSubmit = (event) => {
    setLoading(true);
    axios
      .post("https://tim-bunnyhug-56158.herokuapp.com/requests", {
        request: {
          email: values.email,
          name: values.name,
          last_name: values.last_name,
          phone: values.phone,
          status: "not seen",
          request_type: setType,
        },
      })
      .then((response) => {
        if (response.data.status === "created") {
          setTimeout(() => {
            setLoading(false);
            nextStep();
          }, 2000);
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

  if (loading === true) {
    return (
      <ReactLoading type={"bars"} color={"#fcad03"} height={100} width={100} />
    );
  }
  return (
    <MuiThemeProvider>
      <>
        <div className="rounded mt-form">
          <h3>Si sus datos están correctos, oprima el boton "{buttonText}".</h3>
          <List>
            <ListItem>
              <ListItemText primary="Nombre" secondary={values.name} />
            </ListItem>
            <br />
            <ListItem>
              <ListItemText primary="Apellido" secondary={values.last_name} />
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
