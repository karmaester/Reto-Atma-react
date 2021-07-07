import Login from "./auth/LoginForm";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const LogIn = ({ props, handleLogin }) => {
  let history = useHistory();
  const handelSuccessfulAuth = (data) => {
    handleLogin(data);
    console.log(data);
    history.push("/");
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="title-spacer m-0 column">
        <Login handelSuccessfulAuth={handelSuccessfulAuth} />
      </div>
    </div>
  );
};

export default LogIn;
