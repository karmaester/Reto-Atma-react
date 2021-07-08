import { useState } from "react";
import { CssBaseline, Button } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import BlogCard from "./cards/BlogCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import articles from "../static/articles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Article01 from "./articles/Article01";

const Blog = (props) => {
  const [step, setStep] = useState(1);
  const classes = useStyles();

  let isMain = step === 1 ? true : false;

  switch (step) {
    case 1:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header {...props} />
          <div className={"blog-spacer m-0 column pt"}>
            <BlogCard
              article={articles[0]}
              isMain={isMain}
              openArticle={() => setStep(2)}
            />
            <BlogCard
              article={articles[1]}
              isMain={isMain}
              openArticle={() => setStep(3)}
            />
            <BlogCard
              article={articles[2]}
              isMain={isMain}
              openArticle={() => setStep(4)}
            />
            <BlogCard
              article={articles[3]}
              isMain={isMain}
              openArticle={() => setStep(5)}
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header {...props} />
          <div className="go-back">
            <Button variant="contained" onClick={() => setStep(1)}>
              <ArrowBackIcon />
            </Button>
          </div>
          <div className="article-wrapper">
            <Card className="article">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                image={articles[0].imageUrl}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Article01 />
              </CardContent>
            </Card>
          </div>
        </div>
      );
    case 3:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header {...props} />
          <div className="go-back">
            <Button variant="contained" onClick={() => setStep(1)}>
              <ArrowBackIcon />
            </Button>
          </div>
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[1]} />
          </div>
        </div>
      );
    case 4:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header {...props} />
          <div className="go-back">
            <Button variant="contained" onClick={() => setStep(1)}>
              <ArrowBackIcon />
            </Button>
          </div>
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[2]} />
          </div>
        </div>
      );
    case 5:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header {...props} />
          <div className="go-back">
            <Button variant="contained" onClick={() => setStep(1)}>
              <ArrowBackIcon />
            </Button>
          </div>
          <div className="blog-spacer m-0 column">
            <BlogCard article={articles[3]} />
          </div>
        </div>
      );
    default:
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Header {...props} />
          <div className="go-back">
            <Button variant="contained" onClick={() => setStep(1)}>
              <ArrowBackIcon />
            </Button>
          </div>
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
