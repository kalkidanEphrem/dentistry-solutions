"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";

export default function NavBar() {
  const pathName = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav
      className={clsx(
        "flex justify-between items-center 2xl:px-24 xl:px-16 md:px-12 p-2 sm:px-6",
        {
          "bg-transparent  text-black text-2xl": pathName === "/",
          "bg-primary text-white font-semibold": pathName !== "/",
        }
      )}
    >
      <Link href="/">
        <Image
          src={pathName === "/" ? "/images/Kal-02.png" : "/images/Kal-03.png"}
          alt="Logo"
          width={pathName === "/" ? 250 : 150}
          height={57}
        />
      </Link>

      <ul className="hidden lg:flex justify-around py-2 items-center self-end ml-[-2px]">
        <li
          className={clsx("text-xl", {
            "border-b-2 border-black": pathName === "/",
            "hover:text-secondary": pathName !== "/",
          })}
        >
          <Link href="/">Home</Link>
        </li>

        <li
          className={clsx("mx-5 text-xl", {
            "text-secondary": pathName === "/about",
            "hover:text-secondary": pathName !== "/",
          })}
        >
          <Link href="/about">About</Link>
        </li>

        <li
          className={clsx("text-xl", {
            "text-secondary": pathName === "/contact",
            "hover:text-secondary": pathName !== "/",
          })}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {pathName !== "/" && (
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
          className={clsx("fixed", {
            "top-[65px] right-0 ease-in-out duration-500 w-[40%] z-20": nav,
            "right-[-100%]": !nav,
            "bg-primary": pathName !== "/",
          })}
        >
          <ul className="p-3 text-center uppercase">
            <li
              className={clsx({
                "border-white border-b": pathName === "/",
                "hover:text-secondary": pathName !== "/",
              })}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={clsx("my-2", {
                "border-b border-white": pathName === "/",
                "text-secondary": pathName === "/about",
                "hover:text-secondary": pathName !== "/",
              })}
            >
              <Link href="/about">About</Link>
            </li>

            <li
              className={clsx({
                "text-secondary": pathName === "/contact",
                "hover:text-secondary": pathName !== "/",
              })}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
