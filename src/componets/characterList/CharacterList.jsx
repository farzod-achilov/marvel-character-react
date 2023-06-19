import { Alert, Grid, LinearProgress } from "@mui/material";
import CharacterCard from "../card/CharacterCard";

export default function CharacterList({ characters, loading, error }) {
  if (loading) return <LinearProgress />;

  if (error) return <Alert severity="error">{error.toString()}</Alert>;
  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        <Grid
          key={character.id}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          item
          xs={12}
          lg={3}
          md={6}
        >
          <CharacterCard
            title={character.name}
            img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            id={character.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
