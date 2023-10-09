"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="w-full bg-primary flex justify-between items-center 2xl:px-24 xl:px-16 md:px-12 sm:px-6 sm:py-5 p-2 text-white font-semibold">
      <Link href="/">
        <Image src="/images/Kal-03.png" alt="Logo" width={150} height={27} />
      </Link>

      <ul className="hidden sm:flex justify-around py-3 items-center ml-[-2px]">
        <li className="hover:text-secondary">
          <Link href="/">Home</Link>
        </li>

        <li className="mx-5 hover:text-secondary">
          <Link href="/">About me</Link>
        </li>

        <li className="hover:text-secondary">
          <Link href="/">Contact</Link>
        </li>
      </ul>

      <Link
        href="/"
        className="hidden sm:block py-3 px-5 rounded-md bg-secondary hover:bg-white hover:text-secondary"
      >
        Schedule
      </Link>

      <div
        onClick={handleNav}
        className="block sm:hidden hover:cursor-pointer relative"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}

        <div
          className={
            nav
              ? "fixed top-[65px] right-0 ease-in-out duration-500 w-[40%] bg-primary border-l border-gray-800"
              : "fixed right-[-100%]"
          }
        >
          <ul className="p-3 text-center uppercase">
            <li className="border-b border-white hover:text-secondary">
              <Link href="/">Home</Link>
            </li>

            <li className="my-2 border-b border-white hover:text-secondary">
              <Link href="/">About me</Link>
            </li>

            <li className="hover:text-secondary">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
