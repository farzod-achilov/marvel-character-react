import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  return <div>{id}</div>;
}
