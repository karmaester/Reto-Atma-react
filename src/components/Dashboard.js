import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";

const Dashboard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="title-spacer m-0 column">
        <h1>Dashboard</h1>
        <h1>Status: {props.loggedInStatus}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
