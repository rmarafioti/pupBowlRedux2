import { useGetPuppyListQuery } from "./puppySlice";
import { Link } from "react-router-dom";

function PlayerCard({ player }) {
  return (
    <li>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} />
      <Link to={`/players/${player.id}`}> See Details</Link>
    </li>
  );
}

export default function PuppyList() {
  const { data: players } = useGetPuppyListQuery();

  return (
    <ul>
      {players &&
        players.map((player) => <PlayerCard key={player.id} player={player} />)}
    </ul>
  );
}
