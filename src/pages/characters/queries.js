import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchCharacters({ queryKey }) {
  const [, { limit, offset, nameStartWith }] = queryKey;
  return axios.get("characters", {
    params: {
      limit,
      offset,
      nameStartWith,
    },
  });
}

export function useCharacters({ limit, offset, nameStartWith }) {
  return useQuery({
    queryKey: ["characters", { limit, offset, nameStartWith }],
    queryFn: fetchCharacters,
  });
}
