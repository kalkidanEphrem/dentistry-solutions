import { promises as fs } from "fs";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import Image from "next/image";

type data = {
  dentalWorks: [];
};

type items = {
  src: string;
  heading: string;
  content: string;
  link: string;
  id: string;
};

const DentalWorks = async () => {
  const file = await fs.readFile(
    process.cwd() + "/app/_components/home/(DentalWorks)/dentalWorks.json",
    "utf8"
  );
  const data: data = JSON.parse(file);
  const dentalWorks = data.dentalWorks;

  return (
    <section className="w-full relative bg-tertiary 2xl:px-24 xl:px-16 md:px-12 lg:py-24 p-10 overflow-hidden">
      {/* decorativ purpose div */}
      <div>
        {/* top right */}
        <Image
          src="/icons/dental-works-top-right.svg"
          width={427}
          height={393}
          alt="top-right decorative image"
          className="absolute -right-24 top-0 xl:right-0"
        />

        {/* bottom left */}
        <Image
          src="/icons/dental-works-bottom-left.svg"
          width={379}
          height={334}
          alt="bottom-left decorative image"
          className="hidden sm:block absolute bottom-0 -left-4 xl:left-0"
        />

        {/* right center */}
        <Image
          src="/icons/dental-works-right-center.svg"
          width={427}
          height={393}
          alt="bottom-left decorative image"
          className="absolute right-0 sm:-right-24 sm:top-1/2 sm:-translate-y-1/2 top-2/3 lg:hidden"
        />

        {/* left center */}
        <Image
          src="/icons/dental-works-left-center.svg"
          width={427}
          height={393}
          alt="bottom-left decorative image"
          className="absolute -left-40 sm:bottom-1/2 sm:translate-y-1/2 bottom-1/3 lg:hidden"
        />

        {/* top left */}
        <Image
          src="/icons/dental-works-top-left.svg"
          width={427}
          height={393}
          alt="bottom-left decorative image"
          className="absolute -left-32 xl:-left-10 sm:top-0 top-40"
        />

        {/* bottom right */}
        <Image
          src="/icons/dental-works-bottom-right.svg"
          width={427}
          height={393}
          alt="bottom-left decorative image"
          className="absolute -bottom-10 -right-16 lg:-right-4 xl:right-0"
        />
      </div>

      <div className="flex flex-col mb-10 z-10">
        {/* decorativ svg */}
        <Image
          src="/icons/heading.svg"
          width={56}
          height={25}
          alt="heading icon"
          className="self-center mr-16"
        />

        <h2 className="text-primary font-bold text-center text-3xl sm:text-4xl">
          Dental Works
        </h2>
      </div>

      <div className="flex flex-wrap gap-10 md:gap-5 justify-around items-center">
        {dentalWorks.map((item: items) => (
          <Link key={item.id} href={item.link} className="z-10">
            <ServiceCard
              src={item.src}
              heading={item.heading}
              content={item.content}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DentalWorks;
