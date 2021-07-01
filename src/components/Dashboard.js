import { CssBaseline } from "@material-ui/core";
import axios from "axios";
import Header from "./Header";
import useStyles from "../static/bgStyles";

const Dashboard = (props) => {
  const classes = useStyles();

  const appointment_requests = () => {
    axios
      .get("http://localhost:3001/appointments")
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  };

  const course_requests = () => {
    axios
      .get("http://localhost:3001/course_requests")
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="title-spacer m-0 column">
        <button onClick={() => appointment_requests()}>Recibir citas</button>
        <button onClick={() => course_requests()}>
          Recibir solicitudes de curso
        </button>
        <h1>Status: {props.loggedInStatus}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
