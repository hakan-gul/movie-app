import Header from "@/components/Header";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=baf057f3579501246838cd16ae8ff728`
  );
  return await res.json();
};

const Detail = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(movieDetail, "moviedetail: ");
  return (
    <>
      {/* <div className="flex gap-3">
        {movieDetail.genres.map((genre) => {
          return <div>{genre.name}</div>;
        })}
      </div>
      {movieDetail.title} */}
      <div className="relative p-7 min-h-[300px] md:min-h-screen overflow-hidden">
        <Image
          fill
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
          alt={`${movieDetail?.title} poster`}
          className="object-cover"
        />
        <div className="flex absolute w-full h-full bottom-0 left-0 bg-gradient-to-l from-transparent to-gray-900 p-20 items-center">
          <div className="flex-1 absolute w-full left-0 top-0 bg-gradient-to-t from-transparent to-gray-900">
            <Header />
          </div>
          <div className="items-center">
            <div className="text-8xl pt-28 pb-7">{movieDetail?.title}</div>
            <div className="text-3xl pb-5 lg:w-1/2">{movieDetail?.tagline}</div>
            <div className="flex gap-3 pb-3">
              {movieDetail.genres.map((genre) => {
                return <div className="flex items-center">{genre.name}</div>;
              })}
            </div>

            <p className="pb-5">{movieDetail?.release_date.slice(0, 4)}</p>
            <p className="lg:w-1/2">{movieDetail?.overview}</p>
            {movieDetail.homepage && (
              <div className="pt-7">
                <a
                  href={movieDetail?.homepage}
                  target="_blank"
                  className="rounded-lg px-10 py-3 bg-gray-950 text-white"
                >
                  Watch
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
