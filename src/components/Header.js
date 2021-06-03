import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Modal from "react-modal";
import Logo from "../images/logo.png";

Modal.setAppElement("#root");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  logo: {
    height: "3rem",
    zIndex: "100",
  },
  appbar: {
    background: "rgba(255, 255, 255, 0.46)",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  logoContainer: {
    flexGrow: "1",
  },
  icon: {
    color: "#000",
    fontSize: "2.2rem",
  },
  colorText: {
    color: "rgb(250, 221, 92)",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
    textShadow: "-4px 3px 0 #000",
  },
  goDown: {
    color: "rgb(250, 221, 92)",
    fontSize: "4rem",
  },
  modalContent: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "500px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
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
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={Logo} alt="Logo RetoAtma" />
          </div>
          <IconButton onClick={() => openOrClose(modalIsOpen)}>
            <SortIcon className={classes.icon} />
          </IconButton>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={classes.modalContent.content}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
          </Modal>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Baja de peso <br /> y transforma tu
            <span className={classes.colorText}> vida.</span>
          </h1>
          <Scroll to="place-to-visit">
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
