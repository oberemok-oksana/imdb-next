type FoundMoviesPropsType = {
  searchParams: {
    query: string | number | undefined;
  };
};

const FoundMovies = ({ searchParams }: FoundMoviesPropsType) => {
  const search = searchParams?.query;
  console.log(
    "=======================================" +
      search +
      "========================================"
  );
  return <div>I found some of them..</div>;
};

export default FoundMovies;
