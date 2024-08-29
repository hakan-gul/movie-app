"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt, i }) => {
  const router = useRouter();
  return (
    <div
      key={i}
      className="relative cursor-pointer group"
      onClick={() => router.push(`/detail/${dt?.id}`)}
    >
      <Image
        width={450}
        height={250}
        src={`https://image.tmdb.org/t/p/w500${dt.backdrop_path}`}
        className="rounded-xl hover:opacity-75 object-cover"
        alt={`${dt?.title} poster`}
      />
      <div className="absolute bottom-0 px-5 py-2 font-medium bg-black w-full rounded-b-xl bg-opacity-75 group-hover:py-5  transition-all duration-500 text-white">
        {dt?.title}
      </div>
    </div>
  );
};

export default Movies;
