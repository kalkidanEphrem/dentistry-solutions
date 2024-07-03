"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./AboutInfo.module.css";
import clsx from "clsx";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const AboutInfo = () => {
  const [info, setInfo] = useState("Education");

  return (
    <section className="bg-tertiary 2xl:px-24 xl:px-16 md:px-12 sm:px-6 px-2 pt-10 pb-16 flex lg:items-center flex-col gap-6 lg:gap-10 xl:gap-6 lg:flex-row">
      <div className="flex-1 max-w-lg sm:max-w-2xl mx-auto xl:max-w-5xl">
        <h2 className="font-semibold text-4xl text-primary lg:max-w-[300px] mb-2.5">
          Education and Experience
        </h2>

        <div className="lg:relative lg:max-w-max lg:mb-10 flex gap-2">
          <Image
            src="/images/placeholder-education.svg"
            width={330}
            height={455}
            alt="Experience"
            className={
              info === "Experience"
                ? `shadow-lg rounded-xl lg:block lg:absolute ${styles.imageToAbs}`
                : `hidden rounded-xl md:block ${styles.imageToNorm}`
            }
          />

          <Image
            src="/images/placeholder-education.svg"
            width={330}
            height={455}
            alt="Education"
            className={
              info === "Education"
                ? `shadow-lg rounded-xl lg:block lg:absolute ${styles.imageToAbs}`
                : `hidden rounded-xl md:block ${styles.imageToNorm}`
            }
          />
        </div>
      </div>

      <div className="relative flex-1 xl:self-center max-w-lg sm:max-w-2xl mx-auto xl:max-w-3xl text-xl">
        <div className="flex gap-5">
          {info === "Experience" ? (
            <FaArrowLeftLong
              size={25}
              className="text-primary hover:cursor-pointer"
              onClick={() => setInfo("Education")}
            />
          ) : (
            <FaArrowRightLong
              size={25}
              className="text-primary hover:cursor-pointer"
              onClick={() => setInfo("Experience")}
            />
          )}
        </div>

        <h3 className="text-about-heading-1 text-3xl mb-5 mt-2 font-medium">
          {info}
        </h3>

        {info === "Education" ? (
          <p key={info} className="text-justify text-black/65 font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            repellat qui numquam ea aliquid esse. Quidem, optio cupiditate dolor
            praesentium placeat eius odio veniam autem velit quaerat, possimus
            neque distinctio. In dolore consequatur eveniet et aut a id
            assumenda autem sapiente! Dolorum quibusdam praesentium quia
            suscipit, et consequatur ipsa nihil nisi odio ipsam doloremque quo
            eligendi tenetur dignissimos quaerat est. Explicabo quia officiis in
            animi provident soluta nulla, fugiat autem fugit, labore, possimus
            cumque voluptatum quae accusamus est. Totam aspernatur minima
            molestias illo architecto veritatis eum numquam fugit pariatur nemo
            beatae dicta ab id necessitatibus expedita odio quidem hic, optio
            facilis {info}.
          </p>
        ) : (
          <p key={info} className="text-justify text-black/65 font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            repellat qui numquam ea aliquid esse. Quidem, optio cupiditate dolor
            praesentium placeat eius odio veniam autem velit quaerat, possimus
            neque distinctio. In dolore consequatur eveniet et aut a id
            assumenda autem sapiente! Dolorum quibusdam praesentium quia
            suscipit, et consequatur ipsa nihil nisi odio ipsam doloremque quo
            eligendi tenetur dignissimos quaerat est. Explicabo quia officiis in
            animi provident soluta nulla, fugiat autem fugit, labore, possimus
            cumque voluptatum quae accusamus est. Totam aspernatur minima
            molestias illo architecto veritatis eum numquam fugit pariatur nemo
            beatae dicta ab id necessitatibus expedita odio quidem hic, optio
            facilis {info}.
          </p>
        )}

        <div className="mt-5 flex justify-center gap-2">
          <button
            type="button"
            name="Education"
            className={clsx("w-14 py-1 rounded", {
              "bg-primary": info === "Education",
              "bg-gray-400 hover:bg-gray-500": info !== "Education",
            })}
            onClick={() => setInfo("Education")}
          />
          <button
            type="button"
            name="Experience"
            className={clsx("w-14 py-1 rounded", {
              "bg-primary": info === "Experience",
              "bg-gray-400 hover:bg-gray-500": info !== "Experience",
            })}
            onClick={() => setInfo("Experience")}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
