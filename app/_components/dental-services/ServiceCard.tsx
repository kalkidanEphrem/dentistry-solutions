"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import styles from "./ServiceCard.module.css";

type prop = {
  imageSrc: string;
  title: string;
  description: string;
  index: number;
  id: string;
};

const ServiceCard = (props: prop) => {
  const isMultipleOfTwo = props.index % 2;
  const iconSrc = props.index % 3;

  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // cleanup
    return () => {
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
    };
  }, [cardRef]);

  return (
    <div
      className="flex items-center gap-12 my-3 max-w-5xl xl:max-w-7xl duration-300 ease-in-out"
      ref={cardRef}
    >
      <div
        className={clsx(
          `overflow-clip hidden lg:block shadow-lg ${isVisible ? (!isMultipleOfTwo ? `shrink ${styles.leftImage}` : `shrink ${styles.rightImage}`) : "shrink"}`,
          {
            "rounded-r-3xl": !!isMultipleOfTwo,
            "rounded-l-3xl": !isMultipleOfTwo,
          },
        )}
      >
        <Image
          src={props.imageSrc}
          width={500}
          height={500}
          alt={`${props.title}`}
          className="hover:scale-110 duration-300 ease-in-out"
        />
      </div>

      <div
        className={clsx(
          `flex flex-col gap-5 lg:basis-1/2 justify-between bg-tertiary shadow-lg p-2 sm:p-5 ${isVisible ? (!isMultipleOfTwo ? `shrink ${styles.rightImage}` : `shrink ${styles.leftImage}`) : "shrink"}`,
          {
            "-order-1 rounded-3xl lg:rounded-r-none lg:rounded-l-2xl":
              !!isMultipleOfTwo,
            "lg:rounded-r-3xl lg:rounded-l-none rounded-2xl": !isMultipleOfTwo,
          },
        )}
      >
        <Image
          src={props.imageSrc}
          width={500}
          height={500}
          alt={`${props.title}`}
          className={clsx({ "shrink lg:hidden rounded-xl": isVisible })}
        />

        <Image
          src={`/images/dental-services/${iconSrc}.svg`}
          width={150}
          height={140}
          alt="service icon"
          className={clsx({ "lg:block hidden self-center": isVisible })}
        />

        <h3
          className={clsx({
            "sm:text-4xl text-2xl font-semibold text-primary lg:mb-5":
              isVisible,
          })}
        >
          {props.title}
        </h3>

        <p
          className={clsx({
            "sm:text-2xl text-black/65 text-base max-w-96": isVisible,
          })}
        >
          {props.description}
        </p>

        <Link
          href={`/dental-services/${props.id}`}
          className="border-footer-primary border px-4 py-2 text-sm sm:text-base ml-auto rounded-lg hover:scale-105 duration-300 ease-in-out"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
