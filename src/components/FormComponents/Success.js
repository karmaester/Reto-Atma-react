import React from "react";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const Success = ({ name }) => {
  return (
    <div className="rounded">
      <DoneOutlineIcon className="success-icon" />
      <h2 className="success-message">
        Gracias {name}, ha solicitado atención para agendar su cita, será
        contactad@ en la mayor brevedad posible
      </h2>
    </div>
  );
};

export default Success;
