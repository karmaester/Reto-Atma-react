import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import UserForm from "./UserForm";

const Course = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className="title-spacer m-0">
        <UserForm action="course" />
      </div>
    </div>
  );
};

export default Course;
