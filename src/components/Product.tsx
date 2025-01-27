import { useParams } from "react-router";

export default function Product() {
  const params = useParams().id;
  return <div>{params}</div>;
}
