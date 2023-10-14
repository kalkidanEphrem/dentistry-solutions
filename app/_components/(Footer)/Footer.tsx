import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { BiLogoMeta } from "react-icons/bi";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTelephonePlus } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="w-full">
      <section className="min-h-[250px] bg-primary xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid 2xl:px-24 xl:px-16 sm:px-10 sm:py-12 p-6 text-white font-semibold">
        <div className="flex-col sm:grid sm:grid-cols-2 gap-2 items-center md:flex-col xl:flex-row 2xl:justify-evenly xl:justify-around xl:items-center md:items-start flex md:flex col-span-2 md:col-span-1 xl:col-span-2">
          <Link className="-mt-1" href="/">
            <Image
              src="/images/Kal-03.png"
              alt="Logo"
              width={300}
              height={50}
            />
          </Link>

          <div className="flex xl:grid grid-cols-2 gap-4 justify-start items-center md:ml-0 sm:ml-8 xl:mt-1 xl:mr-8 xl:ml-10 2xl:ml-0">
            <a
              href="https://github.com/Joephy527"
              target="_blank"
              rel="noreferrer"
              className="border-gray-300 border-2 rounded-full md:ml-3 hover:cursor-pointer hover:bg-[#1877F2]"
            >
              <BiLogoMeta size={30} />
            </a>

            <a
              href="https://github.com/Joephy527"
              target="_blank"
              rel="noreferrer"
              className={`border-gray-300 border-2 rounded-full ml-3 hover:cursor-pointer ${styles.insta}`}
            >
              <SlSocialInstagram size={30} />
            </a>

            <a
              href="https://github.com/Joephy527"
              target="_blank"
              rel="noreferrer"
              className="border-gray-300 border-2 rounded-full ml-3 hover:cursor-pointer hover:bg-[#00acee]"
            >
              <TiSocialTwitter size={30} />
            </a>

            <a
              href="https://github.com/Joephy527"
              target="_blank"
              rel="noreferrer"
              className="border-gray-300 border-2 rounded-full ml-3 hover:cursor-pointer hover:bg-[#0072b1]"
            >
              <TiSocialLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 flex flex-col sm:items-center lg:justify-center mt-8 md:mt-0 md:mx-4">
          <h2>Opening Hours</h2>
          <p className="mt-4 font-extralight">Mon - Fri 9:00 am - 5:00 pm</p>
          <p className="mt-2 font-extralight">Saturday 9:00 am - 2:00 pm</p>
        </div>

        <div className="col-span-2 sm:col-span-1 flex flex-col items-end sm:items-center lg:justify-center mt-8 md:mt-0">
          <h2>Contact</h2>
          <div className="mt-4 flex items-start">
            <BsTelephonePlus size={20} />
            <p className="font-extralight ml-2">+251910137679</p>
          </div>

          <div className="mt-2 flex items-start">
            <TfiEmail size={20} />
            <a
              className="font-extralight ml-2"
              href="mailto: Kalkidan.ephrem@aau.edu.et"
            >
              Kalkidan.ephrem@aau.edu.et
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-[50px] bg-quaternary flex justify-between items-center 2xl:px-24 xl:px-16 md:px-12 sm:px-10 sm:py-5 p-2 text-gray-400">
        <p className="2xl:ml-3 xl:ml-10">
          Copyright &copy; DR. Kalkidan Ephrem
        </p>

        <p className="sm:mr-8 md:mr-4 lg:mr-14 xl:mr-10 2xl:mr-3">
          All Rights Reserved
        </p>
      </section>
    </footer>
  );
}
