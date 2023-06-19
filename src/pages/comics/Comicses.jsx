import { Box } from "@mui/material";
import { PAGINATION_LIMIT_COMICS } from "../../constants";
import { useComicses } from "../characters/queries";
import ComicsList from "../../componets/comicsList/ComicsList";
import FilterBar from "../../componets/filter-bar/FilteBarComics";
import { useSearchParams } from "react-router-dom";

export default function Comicses() {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useComicses({
    limit: PAGINATION_LIMIT_COMICS,
    offset: PAGINATION_LIMIT_COMICS * (+searchParams.get("page") - 1 || 0),
    orderBy: searchParams.get("orderBy"),
    titleStartsWith: searchParams.get("titleStartsWith"),
    format: searchParams.get("format"),
  });
  return (
    <Box padding={3}>
      <FilterBar totalPages={data?.data?.data?.total} loading={isLoading} />
      <ComicsList
        error={error}
        comisces={data?.data?.data?.results}
        loading={isLoading}
      />
    </Box>
  );
}
