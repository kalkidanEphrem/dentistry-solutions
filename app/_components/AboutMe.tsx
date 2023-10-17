import Image from "next/image";

export default function About() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row lg:justify-between items-center 2xl:px-24 xl:px-16 md:px-12 px-10 lg:py-20 xl:pb-28 py-10">
      <div className="mt-10 lg:mt-0 flex flex-col self-start 2xl:self-center lg:w-1/2 justify-start p-6">
        {/* icon above heading */}
        <svg
          width="56"
          height="25"
          viewBox="0 0 46 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:ml-10"
        >
          <path
            d="M41 23C41 18.2261 39.1036 13.6477 35.7279 10.2721C32.3523 6.89642 27.7739 5 23 5C18.2261 5 13.6477 6.89642 10.2721 10.2721C6.89642 13.6477 5 18.2261 5 23"
            stroke="#00E5CC"
            stroke-width="10"
          />
        </svg>
        <h2 className="text-primary font-bold text-3xl sm:text-4xl">
          About Me
        </h2>
        <p className="mt-3 mb-5 font-semibold text-justify text-xl text-card-paragraph">
          Dr Shenilee Hazell Graduated from the University of Bristol in 2007.
          After graduating from Bristol, she settled in the City of London where
          she has been successfully practising dentistry for over 11 years,
          providing aesthetic and cosmetic dentistry. Over the years she has
          undergone extensive training in the North America, UK and Europe. Dr
          Hazell has a passion in restorative dentistry, aligning teeth using
          Invisalign and other short term cosmetic alignment systems and
          providing patients with the latest effective tooth whitening
          treatments.
        </p>
      </div>

      <div className="flex items-center lg:w-1/2 2xl:w-2/3 pt-10">
        <Image
          src="/images/istockphoto-1311511363-612x612.jpg"
          className="object-contain rounded-lg"
          width={1000}
          height={1000}
          alt="head shot of DR. Kalkidan Ephrem"
        />
      </div>
    </section>
  );
}
