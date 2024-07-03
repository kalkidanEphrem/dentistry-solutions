import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse gap-10 lg:gap-28 lg:items-center lg:flex-row 2xl:px-24 xl:px-16 md:px-12 sm:px-6 px-2 pt-10 pb-20 lg:py-20 overflow-clip">
      <div className="basis-1/2 mx-auto grid place-items-center">
        <div className="max-w-lg">
          <h1 className="font-semibold text-5xl my-2.5 text-primary">
            We’re welcoming new patients and can’t wait to meet you.
          </h1>

          <p className="text-lg text-black/65 text-justify my-2.5">
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
        </div>
      </div>
      <div className="basis-1/2 grid place-items-center mx-auto">
        <div className="relative rounded-[10px]">
          <Image
            src="/images/dental-services/hero-bg.svg"
            width={413}
            height={362}
            className="object-cover rounded-[10px]"
            alt="service hero image"
          />

          <Image
            src="/images/istockphoto-1311511363-612x612.jpg"
            width={413}
            height={362}
            className="absolute -left-1 sm:-left-[30px] top-[30px] object-cover rounded-[10px]"
            alt="service hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
