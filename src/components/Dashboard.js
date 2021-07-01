import { CssBaseline } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import Cards from "./Cards";

const Dashboard = (props) => {
  const [appointments, setAppointments] = useState([]);
  const [menu, setmenu] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const getAppointments = async () => {
      const appointmentsFromServer = await fetchAppointments();
      setAppointments(appointmentsFromServer);
    };

    getAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await fetch("http://localhost:3001/appointments");
    const data = await res.json();
    return data;
  };

  const course_requests = () => {
    axios
      .get("http://localhost:3001/course_requests")
      .then((res) => {
        if (res.data) {
          res.data.forEach((x) => console.log(x.name));
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
        <Cards appointments={appointments} />
        <button onClick={() => course_requests()}>
          Recibir solicitudes de curso
        </button>
        <h1>Status: {props.loggedInStatus}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
