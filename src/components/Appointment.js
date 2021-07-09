import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import UserForm from "./FormComponents/UserForm";
import Success from "./FormComponents/Success";

const Appointement = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="title-spacer m-0">
        {props.loggedInStatus === "LOGGED_IN" ? (
          <Success name={props.user.user_name} action="appointment" />
        ) : (
          <UserForm action="appointment" />
        )}
      </div>
    </div>
  );
};

export default Appointement;
