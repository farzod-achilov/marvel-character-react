import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchCharacters({ queryKey }) {
  const [, { limit, offset, nameStartsWith, orderBy }] = queryKey;
  return axios.get("characters", {
    params: {
      limit,
      offset: offset < 0 ? 0 : offset,
      ...(nameStartsWith && {
        nameStartsWith: nameStartsWith,
      }),
      orderBy: orderBy || "name",
    },
  });
}

export function useCharacters({ limit, offset, nameStartsWith, orderBy }) {
  return useQuery({
    queryKey: ["characters", { limit, offset, nameStartsWith, orderBy }],
    queryFn: fetchCharacters,
  });
}
