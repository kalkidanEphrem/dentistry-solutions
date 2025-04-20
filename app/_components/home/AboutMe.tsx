import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full">
      {/* Top-left decorative image */}
      <Image
        src="/icons/dots.png"
        alt="decorative top left"
        width={150}
        height={150}
        className="absolute top-0 left-0 z-10"
      />

      {/* Bottom-right decorative image */}
      <Image
        src="/icons/dots.png"
        alt="decorative bottom right"
        width={150}
        height={150}
        className="absolute bottom-0 right-0 z-10"
      />

      {/* Background section with about content (DO NOT TOUCH THIS) */}
      <div className="w-full bg-[url('/images/home/about-me.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full lg:py-32 xl:pb-28 py-10">
          {/* Text Content */}
          <div className="mt-10 flex flex-col items-center self-start w-full lg:w-1/2 px-10 ml-24 md:ml-32">
            <h2 className="font-staatliches font-bold text-4xl sm:text-2xl mt-10 border-b-2 border-primary">
              About Me
            </h2>

            <p className="mt-3 mb-5 my-4 leading-relaxed text-center">
              Dr Kalkidan Graduated from the University of Addis Ababa. After graduating from AAU Dentistry school, she settled in the City of Addis Ababa where she has been successfully practicing dentistry for over 4 years, providing general, children and cosmetic dentistry. Over the years she has undergone extensive training. Dr Kalkidan has a passion in restorative dentistry, aligning teeth using Invisalign and other short term cosmetic alignment systems and providing patients with the latest effective tooth whitening treatments.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center w-full lg:w-1/2 px-10 md:px-12 xl:px-16 2xl:px-24">
            <Image
              src="/images/home/kalkidan-about-me.png"
              className="object-contain rounded-lg"
              width={400}
              height={400}
              alt="head shot of DR. Kalkidan Ephrem"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
