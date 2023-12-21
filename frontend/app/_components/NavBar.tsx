"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type prop = {
  isHome: boolean;
};

export default function NavBar(isHome: prop) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav
      className={
        isHome
          ? "w-full bg-transparent flex justify-between items-center 2xl:px-24 xl:px-16 md:px-12 sm:px-6 sm:py-5 p-2 text-black text-2xl"
          : "w-full bg-primary flex justify-between items-center 2xl:px-24 xl:px-16 md:px-12 sm:px-6 sm:py-5 p-2 text-white font-semibold"
      }
    >
      <Link href="/">
        <Image
          src={isHome ? "/images/Kal-02.png" : "/images/Kal-03.png"}
          alt="Logo"
          width={isHome ? 250 : 200}
          height={57}
        />
      </Link>

      <ul className="hidden lg:flex justify-around py-3 items-center self-end ml-[-2px]">
        <li
          className={
            !isHome
              ? "hover:text-secondary active:text-secondary"
              : "active:border-b-2 border-black"
          }
        >
          <Link href="/">Home</Link>
        </li>

        <li
          className={
            !isHome
              ? "mx-5 hover:text-secondary active:text-secondary"
              : "mx-5 active:border-b-2 border-black"
          }
        >
          <Link href="/">About me</Link>
        </li>

        <li
          className={
            !isHome
              ? "hover:text-secondary active:text-secondary"
              : "active:border-b-2 border-black"
          }
        >
          <Link href="/">Contact</Link>
        </li>
      </ul>

      {!isHome && (
        <Link
          href="/"
          className="hidden lg:block py-3 px-5 rounded-md bg-secondary hover:bg-white hover:text-secondary"
        >
          Schedule
        </Link>
      )}

      <div
        onClick={handleNav}
        className="block lg:hidden hover:cursor-pointer relative"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}

        <div
          className={
            nav
              ? "fixed top-[65px] right-0 ease-in-out duration-500 w-[40%] bg-transparent z-20"
              : "fixed right-[-100%]"
          }
        >
          <ul className="p-3 text-center uppercase">
            <li
              className={
                isHome
                  ? "border-b border-white active:border-b-2 active:border-black"
                  : "border-b border-white hover:text-secondary active:text-secondary"
              }
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={
                isHome
                  ? "my-2 border-b border-white active:border-b-2 active:border-black"
                  : "my-2 border-b border-white hover:text-secondary active:text-secondary"
              }
            >
              <Link href="/">About me</Link>
            </li>

            <li
              className={
                !isHome
                  ? "hover:text-secondary active:text-secondary"
                  : "active:border-b-2 border-black"
              }
            >
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
