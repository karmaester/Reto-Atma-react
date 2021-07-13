import React from "react";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import Paypal from "../payment/Paypal";

const Success = ({ name, action }) => {
  return (
    <div className="rounded m-success mt-form">
      {action === "appointment" ? (
        <>
          <DoneOutlineIcon className="success-icon" />
          <h2 className="success-message">
            Gracias {name}, ha solicitado atención para agendar su cita, será
            contactad@ en la mayor brevedad posible.
          </h2>
        </>
      ) : (
        <>
          <InfoIcon className="success-icon" />
          <p className="success-message">
            Gracias {name}, ha solicitado acceso al curso Alimentación Sana.
          </p>
          <Link to="/transferencia">Transferencia bancaria</Link>
          <br />
          <p className="success-message">
            Serás contactad@ en la mayor brevedad posible con el acceso al
            curso.
          </p>
          <form
            name="rec87082131_btn1"
            method="post"
            action="https://www.webpay.cl/portalpagodirecto/pages/datos.jsf"
          >
            <input type="hidden" name="idRecaudacion" value="87082131" />
            <input type="hidden" name="monto" value="1000" />
            <input
              alt="webpay"
              type="image"
              title="Imagen"
              name="button1"
              src="https://www.webpay.cl/portalpagodirecto/img/pagar01.png"
              value="Boton 1"
            />
          </form>
          <Paypal />
        </>
      )}
    </div>
  );
};

export default Success;
