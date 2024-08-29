import Header from "@/components/Header";
import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  console.log("keyword", keyword);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=baf057f3579501246838cd16ae8ff728&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-wrap gap-5 pt-10">
        {data?.total_results == 0 ? (
          <div>veri bulunamadı</div>
        ) : (
          data?.results?.map((dt, i) => {
            if (dt.backdrop_path) {
              return <Movies dt={dt} i={i} />;
            } else {
              <div>bulunamadı</div>;
            }
          })
        )}
      </div>
    </>
  );
};

export default Page;
