"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  var searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  console.log(genre, "genre");
  const tabs = [
    {
      name: "En Popüler",
      url: "popular",
    },
    {
      name: "En Çok Oylananlar",
      url: "top_rated",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center font-bold gap-7">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-75 transition duration-200 ${
            tab.url == genre
              ? "underline text-red-600 underline-offset-8 transition duration-300"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
          key={i}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
