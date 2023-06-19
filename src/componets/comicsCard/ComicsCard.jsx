import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ComicsCard({ img, title, id, price }) {
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="350"
          image={img}
        />
        <CardContent>
          <Typography
            fontSize={"20px"}
            noWrap
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            fontSize={"15px"}
            noWrap
            gutterBottom
            variant="h5"
            component="div"
          >
            {price}$
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
