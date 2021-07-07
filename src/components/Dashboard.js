import { CssBaseline } from "@material-ui/core";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import Cards from "./cards/Cards";

const Dashboard = (props) => {
  const [appointments, setAppointments] = useState([]);
  const [requests, setRequests] = useState([]);
  const [menu, setMenu] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    const getAppointments = async () => {
      const appointmentsFromServer = await fetchAppointments();
      setAppointments(appointmentsFromServer);
    };

    const getRequests = async () => {
      const requestsFromServer = await fetchRequests();
      setRequests(requestsFromServer);
    };

    getAppointments();
    getRequests();
  }, []);

  const fetchAppointments = async () => {
    const res = await fetch("http://localhost:3001/appointments");
    const data = await res.json();
    return data;
  };

  const fetchRequests = async () => {
    const res = await fetch("http://localhost:3001/course_requests");
    const data = await res.json();
    return data;
  };

  const menuToShow = () => {
    switch (menu) {
      case 1:
        return appointments;
      case 2:
        return requests;
      case 3:
        return requests;
      case 4:
        return requests;
      default:
        return appointments;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <>
        <div className="flex">
          <div className="aside pt-6">
            <Paper className="menu">
              <MenuList>
                <MenuItem onClick={() => setMenu(1)}>
                  Solicitudes de cita
                </MenuItem>
                <MenuItem onClick={() => setMenu(2)}>Ventas de curso</MenuItem>
                <MenuItem onClick={() => setMenu(3)}>Usuarios</MenuItem>
                <MenuItem onClick={() => setMenu(4)}>Analíticas</MenuItem>
              </MenuList>
            </Paper>
          </div>
          <div className="pt-6 m-0 column main">
            <Cards data={menuToShow()} />
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
