import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
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
  action: {
    color: "rgb(250, 221, 92)",
  },
});

export default function ImgMediaCard({ article, openArticle }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.action}>
          Compartir
        </Button>
        <Button size="small" className={classes.action} onClick={openArticle}>
          Ver articulo completo
        </Button>
      </CardActions>
    </Card>
  );
}
