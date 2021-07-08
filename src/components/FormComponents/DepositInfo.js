import React from "react";
import { CssBaseline } from "@material-ui/core";
import Header from "../Header";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

const DepositInfo = (props) => {
  const useStyles = makeStyles(() => ({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="title-spacer m-0">
        <div className="rounded m-success mt-form">
          <>
            <InfoIcon className="success-icon" />
            <p className="success-message">
              Aquí tienes la información necesaria para realizar el pago de tu
              curso a través de transferencia bancaria, envía un correo con tu
              comprobante de pago para recibir el acceso lo antes posible.
            </p>
            <p className="success-message">
              Debes transferir 15.000 pesos al siguiente número de cuenta:
            </p>
            <br />
            <p className="success-message center">Grecia Rojas</p>
            <p className="success-message center">Banco de Chile</p>
            <p className="success-message center">Cuenta corriente</p>
            <p className="success-message center">Rut: 26.107.816-3</p>
            <p className="success-message center">N° de cuenta: 002701391303</p>
            <br />
            <p className="success-message">
              Envía comprobante de pago al siguiente correo electrónico:
            </p>
            <br />
            <a
              className="success-message center"
              href={
                "mailto:retoatma@gmail.com?subject=Comprobante de pago&body=Hola! En el presente correo debes adjuntar tu comprobante de pago, recibirás confirmación de tu acceso al curso una vez tu pago sea procesado."
              }
            >
              retoatma@gmail.com
            </a>
            <br />
            <p className="success-message">
              Serás contactad@ en la mayor brevedad posible con el acceso al
              curso.
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default DepositInfo;
