import { Alert, Grid, LinearProgress } from "@mui/material";
import ComicsCard from "../comicsCard/ComicsCard";

export default function ComicsList({ comisces, loading, error }) {
  if (loading) return <LinearProgress />;

  if (error) return <Alert severity="error">{error.toString()}</Alert>;
  return (
    <Grid container spacing={2}>
      {comisces?.map((comisc) => (
        <Grid
          key={comisc.id}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          item
          xs={6}
          lg={3}
          md={4}
        >
          <ComicsCard
            price={comisc.prices[0].price}
            title={comisc.title}
            img={`${comisc.thumbnail.path}.${comisc.thumbnail.extension}`}
            id={comisc.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
