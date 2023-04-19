import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
      margin: "10px 0"
    }
  },
  media: {
    height: 180
  },
  content: {
    minHeight: 100
  },
  price: {
    fontWeight: "bold"
  },
  footer: {
    fontSize: "0.9rem",
    color: "#757575"
  }
});

function ProductCard({ params }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        component={Link}
        to={`/categories/${params.category}/${params._id}/details`}
      >
        <CardMedia
          className={classes.media}
          component="img"
          alt={params.title}
          image={params.image}
          title={params.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" component="h2">
            {params.title}
          </Typography>
          <Typography className={classes.price} variant="body2" component="p">
            {params.price.toFixed(2)}₪
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Typography className={classes.footer} variant="body2" component="p">
          <Moment format="D MMM YYYY (dddd) HH:mm">{params.addedAt}</Moment> -
          <strong>{params.city}</strong>
          {/* <Link to="" id="heartIcon"><BsHeart /></Link> */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
