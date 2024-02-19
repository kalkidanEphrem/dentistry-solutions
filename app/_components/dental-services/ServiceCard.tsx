"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ServiceCard.module.css";

type prop = {
  imageSrc: string;
  title: string;
  description: string;
  index: number;
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
      className="flex items-center gap-5 my-3 max-w-5xl xl:max-w-7xl lg:p-5 lg:rounded-lg hover:scale-105 lg:shadow-lg duration-300 ease-in-out"
      ref={cardRef}
    >
      <Image
        src={props.imageSrc}
        width={500}
        height={500}
        alt={`${props.title}`}
        className={
          isVisible
            ? !isMultipleOfTwo
              ? `hidden shrink lg:block ${styles.leftImage}`
              : `hidden shrink lg:block ${styles.rightImage}`
            : "hidden shrink lg:block"
        }
      />

      <div
        className={clsx(
          "flex flex-col gap-5 lg:basis-1/2 justify-between shadow-lg rounded-lg border p-5 lg:shadow-none lg:rounded-none border-none",
          {
            "-order-1": !!isMultipleOfTwo,
          }
        )}
      >
        <Image
          src={props.imageSrc}
          width={500}
          height={500}
          alt={`${props.title}`}
          className={
            isVisible
              ? !isMultipleOfTwo
                ? `shrink lg:hidden rounded-xl ${styles.leftImage}`
                : `shrink lg:hidden rounded-xl ${styles.rightImage}`
              : "shrink lg:hidden rounded-xl"
          }
        />

        <Image
          src={`/images/dental-services/${iconSrc}.svg`}
          width={150}
          height={140}
          alt="service icon"
          className={
            isVisible
              ? !isMultipleOfTwo
                ? `hidden lg:block ${styles.rightIcon}`
                : `hidden lg:block ${styles.leftIcon}`
              : "hidden lg:block"
          }
        />

        <h3
          className={
            isVisible
              ? !isMultipleOfTwo
                ? `text-4xl font-semibold text-primary mb-5 lg:mb-10 ${styles.rightHeading}`
                : `text-4xl font-semibold text-primary mb-5 lg:mb-10 ${styles.leftHeading}`
              : "text-4xl font-semibold text-primary mb-5 lg:mb-10"
          }
        >
          {props.title}
        </h3>

        <p
          className={
            isVisible
              ? !isMultipleOfTwo
                ? `text-2x max-w-96 ${styles.rightParagraph}`
                : `text-2x max-w-96 ${styles.leftParagraph}`
              : "text-2x max-w-96"
          }
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
