import React from "react";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import InfoIcon from "@material-ui/icons/Info";

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
              "mailto:retoatma@gmail.com?subject=Comprobante de pago de " +
              { name } +
              "&body=" +
              "Hola " +
              { name } +
              "! En el presente correo debes adjuntar tu comprobante de pago."
            }
          >
            retoatma@gmail.com
          </a>
          <br />
          <p className="success-message">
            Serás contactad@ en la mayor brevedad posible con el acceso al
            curso.
          </p>
          <a href="http://">paypal</a>
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
        </>
      )}
    </div>
  );
};

export default Success;
