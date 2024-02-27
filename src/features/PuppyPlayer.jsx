import { useParams } from "react-router-dom";
import { useGetPuppyPlayerQuery } from "./puppySlice";

export default function PuppyPlayer() {
  const { id } = useParams();
  const { data: player } = useGetPuppyPlayerQuery(id);

  if (!player) {
    return <h1>...LOADING</h1>;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <h2>{player.status}</h2>
      <img src={player.imageUrl} />
      <h3>{player.breed}</h3>
      <h4>{player.teamId}</h4>
    </div>
  );
}
