import Registration from "./auth/Registration";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const SignUp = (props) => {
  const handelSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/");
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="title-spacer m-0 column">
        <Registration handelSuccessfulAuth={handelSuccessfulAuth} />
      </div>
    </div>
  );
};

export default SignUp;
