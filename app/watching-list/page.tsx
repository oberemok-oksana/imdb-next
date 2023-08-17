import Image from "next/image";
import { getWatchingList } from "../api/server";
import ListMovie from "../components/listMovie/ListMovie";

const WatchingList = async () => {
  const data = await getWatchingList();

  return (
    <div>
      <h1 className="text-slate-400">
        {data.length
          ? "Movies you want to watch:"
          : "You haven't added any movie here yet"}
      </h1>
      <ul className="flex flex-col gap-5">
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
