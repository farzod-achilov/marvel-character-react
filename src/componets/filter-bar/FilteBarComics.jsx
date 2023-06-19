import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import getUrlParams from "../../helpers/getUrlParams";
import { PAGINATION_LIMIT_COMICS } from "../../constants";

export default function FilterBar({ totalPages, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Grid container marginBottom={3} spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          value={searchParams.get("titleStartsWith")}
          onChange={(evt) =>
            setSearchParams(
              getUrlParams(
                "titleStartsWith",
                evt.target.value,
                searchParams,
                "page"
              )
            )
          }
          fullWidth
          label="Search..."
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <FormControl fullWidth>
          <InputLabel id="sort-list">Sort By</InputLabel>
          <Select
            labelId="sort-list"
            onChange={(evt) =>
              setSearchParams(
                getUrlParams("orderBy", evt.target.value, searchParams, "page")
              )
            }
            // value={age}
            label="Sort By"
            // onChange={handleChange}
          >
            <MenuItem value={"title"}>A-Z</MenuItem>
            <MenuItem value={"-title"}>Z-A</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <FormControl fullWidth>
          <InputLabel id="sort-list">Format By</InputLabel>
          <Select
            labelId="sort-list"
            onChange={(evt) =>
              setSearchParams(
                getUrlParams("format", evt.target.value, searchParams, "page")
              )
            }
            // value={age}
            label="Format By"
            // onChange={handleChange}
          >
            <MenuItem value={"comic"}>comic</MenuItem>
            <MenuItem value={"magazine"}>magazine</MenuItem>
            <MenuItem
              value={decodeURIComponent(encodeURIComponent("trade paperback"))}
            >
              trade paperback
            </MenuItem>
            <MenuItem value={"hardcover"}>hardcover</MenuItem>
            <MenuItem value={"digest"}>digest</MenuItem>
            <MenuItem
              value={decodeURIComponent(encodeURIComponent("graphic novel"))}
            >
              graphic novel
            </MenuItem>
            <MenuItem
              value={decodeURIComponent(encodeURIComponent("digital comic"))}
            >
              digital comic
            </MenuItem>
            <MenuItem
              value={decodeURIComponent(encodeURIComponent("infinite comic"))}
            >
              infinite comic
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        item
        xs={12}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Pagination
            page={+searchParams.get("page") || 1}
            onChange={(evt, page) =>
              setSearchParams(getUrlParams("page", page, searchParams))
            }
            size="small"
            count={Math.floor(totalPages / PAGINATION_LIMIT_COMICS)}
            variant="outlined"
          />
        )}
      </Grid>
    </Grid>
  );
}
