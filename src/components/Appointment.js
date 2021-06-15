import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";

const Appointement = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      {/* <h1>Solicitar cita</h1> */}
    </div>
  );
};

export default Appointement;
