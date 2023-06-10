import { Alert, LinearProgress } from "@mui/material";
import { useCharacters } from "./queries";

export default function Characters() {
  const { data, isLoading, error } = useCharacters({
    limit: 10,
    offset: 0,
  });

  if (isLoading) return <LinearProgress />;

  if (error) return <Alert severity="error">{error.toString()}</Alert>;

  return <div>{data.data.data.total}</div>;
}
