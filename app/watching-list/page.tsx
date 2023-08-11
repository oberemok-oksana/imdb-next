import Image from "next/image";
import { getWatchingList } from "../api/server";
import ListMovie from "../components/listMovie/ListMovie";

const WatchingList = async () => {
  const data = await getWatchingList();

  return (
    <div>
      <h1>Movies you want to watch:</h1>
      <ul className="list">
        {data.map((movie) => (
          <li key={movie.id}>
            <ListMovie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchingList;
