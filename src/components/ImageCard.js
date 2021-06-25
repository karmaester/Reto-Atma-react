import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import Slider from "react-slick";

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 700,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardActionArea href={place.link}>
          <Slider {...settings}>
            <div>
              <CardMedia
                className={classes.media}
                image={place.imageUrl1}
                title={place.title}
              />
            </div>
            <div>
              <CardMedia
                className={classes.media}
                image={place.imageUrl2}
                title={place.title}
              />
            </div>
          </Slider>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {place.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              {place.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            href={place.link}
            size="large"
            variant="contained"
            className="action-btn"
          >
            {place.action}
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
