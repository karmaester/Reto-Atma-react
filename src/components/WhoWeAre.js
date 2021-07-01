import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import DescriptionCard from "./DescriptionCard";
import members from "../static/members";

const WhoWeAre = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="pt-6 blog-spacer m-0 column">
        <DescriptionCard article={members[0]} />
        <DescriptionCard article={members[1]} />
        <DescriptionCard article={members[2]} />
      </div>
    </div>
  );
};

export default WhoWeAre;
