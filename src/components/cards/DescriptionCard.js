import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: "rgba(255, 255, 255, 0.46)",
    margin: "20px",
    borderRadius: "33px",
    boxShadow: "0 8px 6px -6px black",
  },
  media: {
    height: 700,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#000",
    textAlign: "center",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.4rem",
    color: "#000",
    textAlign: "center",
  },
});

export default function DescriptionCard({ article }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        className={classes.media}
        image={article.imageUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {article.title}
        </Typography>
        {article.description.map((item) => (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {item}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
