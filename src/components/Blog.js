import { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import BlogCard from "./BlogCard";
import articles from "../static/articles";

const Blog = () => {
  const [step, setStep] = useState(1);
  const classes = useStyles();
  switch (step) {
    case 1:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[0]} openArticle={() => setStep(2)} />
            <BlogCard article={articles[1]} openArticle={() => setStep(3)} />
            <BlogCard article={articles[2]} openArticle={() => setStep(4)} />
            <BlogCard article={articles[3]} openArticle={() => setStep(5)} />
          </div>
        </div>
      );
    case 2:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[0]} />
          </div>
        </div>
      );
    case 3:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[1]} />
          </div>
        </div>
      );
    case 4:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[2]} />
          </div>
        </div>
      );
    case 5:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[3]} />
          </div>
        </div>
      );
    default:
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
  }
};

export default Blog;
