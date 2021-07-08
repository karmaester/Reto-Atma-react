import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Cancel";
import { IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "33px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon: {
    color: "#000",
    fontSize: "2.2rem",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (type) => {
    let user = JSON.parse(window.sessionStorage.getItem("session"));
    axios
      .post("http://localhost:3001/requests", {
        request: {
          email: user.email,
          name: user.user_name,
          last_name: user.user_last_name,
          phone: user.phone,
          status: "not seen",
          request_type: type,
        },
      })
      .then((response) => {
        if (response.data.status === "created") {
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log("registration error", err);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    props.handleLogout();
  };

  return (
    <div>
      <IconButton type="button" onClick={handleOpen}>
        <SortIcon className={classes.icon} />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <button onClick={handleClose} className="modal-exit">
              <CancelIcon fontSize="large" />
            </button>
            <ul className="modal-menu">
              {props.loggedInStatus === "LOGGED_IN" ? (
                <>
                  <li>
                    <Link
                      to="/consulta"
                      onClick={() => handleSubmit("Solicitud de cita médica")}
                    >
                      Solicitar consulta médica
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/curso"
                      onClick={() => handleSubmit("Solicitud de curso")}
                    >
                      Comprar curso
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/consulta">Solicitar consulta médica</Link>
                  </li>
                  <li>
                    <Link to="/curso">Comprar curso</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/quienes-somos">Quienes somos</Link>
              </li>
              {props.loggedInStatus === "LOGGED_IN" ? (
                <>
                  <li>
                    <Link to="/dashboard">Mis solicitudes</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => handleLogoutClick()}>
                      Cerrar sesión
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/ingresar">Ingresar</Link>
                  </li>
                  <li>
                    <Link to="/registro">Registarme</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
