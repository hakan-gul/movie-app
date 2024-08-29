"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import Theme from "./Theme";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length > 1) {
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="flex items-center gap-7 h-20 p-5 me-10">
      <Image
        src={logo}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <div className="flex flex-1 items center gap-2 border p-3 rounded-lg">
        <input
          className="outline-none flex-1 bg-transparent"
          type="text"
          placeholder="Arama Yapınız..."
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={searchFunc}
        />
        <BiSearch size={25} />
      </div>
      <Theme />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;
