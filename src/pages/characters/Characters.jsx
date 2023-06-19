import { useCharacters } from "./queries";

import { Box } from "@mui/material";
import { PAGINATION_LIMIT } from "../../constants";
import { useSearchParams } from "react-router-dom";

import FilterBar from "../../componets/filter-bar/FilterBar";
import CharacterList from "../../componets/characterList/CharacterList";

export default function Characters() {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useCharacters({
    limit: PAGINATION_LIMIT,
    offset: PAGINATION_LIMIT * (+searchParams.get("page") - 1 || 0),
    orderBy: searchParams.get("orderBy"),
    nameStartsWith: searchParams.get("nameStartsWith"),
  });

  return (
    <Box padding={3}>
      <FilterBar totalPages={data?.data?.data?.total} loading={isLoading} />
      <CharacterList
        error={error}
        characters={data?.data?.data?.results}
        loading={isLoading}
      />
    </Box>
  );
}
