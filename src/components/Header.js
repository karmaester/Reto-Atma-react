import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link as Scroll } from "react-scroll";
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
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
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
    <div className="root" id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <div className={classes.logoContainer}>
            <img className="logo" src={Logo} alt="Logo RetoAtma" />
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
              <li>Solicitar consulta médica</li>
              <li>Comprar curso</li>
              <li>Blog</li>
              <li>Quienes somos</li>
            </ul>
          </Modal>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className="title-container">
          <h1 className="title">
            Baja de peso <br /> y transforma tu
            <span className="title-text"> vida.</span>
          </h1>
          <Scroll to="place-to-visit">
            <IconButton>
              <ExpandMoreIcon className="go-down" />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
