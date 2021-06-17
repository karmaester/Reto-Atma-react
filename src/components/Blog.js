import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import BlogCard from "./BlogCard";
import articles from "../static/articles";

const Blog = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className="blog-spacer m-0 column">
        <BlogCard article={articles[0]} />
        <BlogCard article={articles[1]} />
        <BlogCard article={articles[2]} />
        <BlogCard article={articles[3]} />
      </div>
    </div>
  );
};

export default Blog;
