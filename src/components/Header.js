import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import CancelIcon from "@material-ui/icons/Cancel";
import Modal from "react-modal";
import Logo from "../images/logo.png";
import customStyles from "../static/modalStyles";

Modal.setAppElement("#root");

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "rgba(255, 255, 255, 0.46)",
    zIndex: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    padding: "1rem",
  },
  logoContainer: {
    flexGrow: "1",
  },
  icon: {
    color: "#000",
    fontSize: "2.2rem",
  },
}));
const Header = () => {
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const openOrClose = (isOpen) => {
    isOpen ? closeModal() : openModal();
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <div className={classes.logoContainer}>
            <Link to="/">
              <img className="logo" src={Logo} alt="Logo RetoAtma" />
            </Link>
          </div>
          <IconButton onClick={() => openOrClose(modalIsOpen)}>
            <SortIcon className={classes.icon} />
          </IconButton>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal} className="modal-exit">
              <CancelIcon />
            </button>
            <ul className="modal-menu">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/consulta">Solicitar consulta médica</Link>
              </li>
              <li>
                <Link to="/curso">Comprar curso</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/quienes-somos">Quienes somos</Link>
              </li>
            </ul>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
