import Header from "@/components/Header";
import Movies from "@/components/Movies";
import Tabs from "@/components/Tabs";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "movie/now_playing"
    }?api_key=baf057f3579501246838cd16ae8ff728`
  );
  const data = await res.json();
  return (
    <>
      <Header />
      <Tabs />
      <div className="flex items-center justify-center flex-wrap gap-5">
        {data?.results?.map((dt, i) => (
          <Movies dt={dt} i={i} />
        ))}
      </div>
    </>
  );
};

export default Page;
