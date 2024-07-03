import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="xl:h-screen relative flex flex-col-reverse lg:items-center lg:flex-row 2xl:px-24 xl:px-16 md:px-12 sm:px-6 px-2 pt-10 pb-20 lg:py-20 overflow-clip">
      {/* decorative image */}
      <Image
        src="/images/about/hero-decoration.svg"
        alt="decorative background image"
        width={400}
        height={632}
        className="absolute xl:-left-32 2xl:left-0 -left-32 -bottom-64 xl:-bottom-20 2xl:bottom-0"
      />

      <div className="mx-auto basis-1/2 z-10 flex flex-col self-start mt-5">
        <h1 className="font-bold xl:text-8xl sm:text-7xl text-5xl text-primary">
          Hi, I am <br /> <span className="text-secondary">DR. Kalkidan</span>
        </h1>

        <div className="sm:p-12 pt-12 sm:self-end self-center max-w-[75%]">
          <Image
            src="/icons/about/quote-icon.svg"
            alt="icon"
            width={40}
            height={40}
          />

          <p className="mt-4 text-black/85 font-semibold xl:text-[28px] sm:text-2xl text-xl">
            I believe dentistry should be affordable for everyone
          </p>
        </div>
      </div>

      <div className="basis-1/2 z-10 max-w-lg sm:max-w-2xl xl:max-w-none mx-auto">
        <Image
          src="/images/istockphoto-1311511363-612x612.jpg"
          className="mx-auto object-contain shadow-lg rounded-lg"
          width={700}
          height={592}
          alt="head shot of DR. Kalkidan Ephrem"
        />
      </div>
    </section>
  );
};

export default AboutHero;
