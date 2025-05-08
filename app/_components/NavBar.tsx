"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";

export default function NavBar() {
  const pathName = usePathname();
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBlogPage = pathName === "/blog";
  const isBlogPostPage = pathName.startsWith("/blog/");

  return (
    <>
      <nav
        className={clsx(
          "w-full z-20 flex justify-between items-center 2xl:px-24 xl:px-16 md:px-12 p-2 sm:px-6 transition-all duration-300",
          {
            "fixed top-0 left-0 bg-transparent text-black text-2xl shadow-sm":
              isBlogPage && !isBlogPostPage,
            "relative bg-primary text-white font-semibold":
              isBlogPostPage && !isScrolled,
            "fixed top-0 left-0 bg-primary text-white font-semibold shadow-lg border-b border-gray-300":
              isBlogPostPage && isScrolled,
            "fixed top-0 left-0 bg-primary text-white":
              !isBlogPage && !isBlogPostPage,
            "shadow-lg border-b border-gray-300":
              isScrolled && !isBlogPage && !isBlogPostPage,
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
            className={clsx("text-xl transition-all duration-300", {
              "border-b-2 border-black": pathName === "/",
              "hover:text-secondary": pathName !== "/",
            })}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={clsx("mx-5 text-xl transition-all duration-300", {
              "text-secondary": pathName === "/about",
              "hover:text-secondary": pathName !== "/",
            })}
          >
            <Link href="/about">About</Link>
          </li>

          <li
            className={clsx("text-xl transition-all duration-300", {
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
            className="hidden lg:block py-3 px-5 rounded-md bg-secondary hover:bg-white hover:text-secondary transition-all duration-300 text-xl"
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
              "bg-primary": pathName !== "/blog",
              "bg-transparent": pathName === "/blog",
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
    </>
  );
}
