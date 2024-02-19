import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/dental-services/hero-image.svg"
        width={1000}
        height={1000}
        alt="services background image"
        className="object-cover w-full"
      />

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-1">
        <h1
          className={`uppercase pb-4 pl-2 pr-4 text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white text-center leading-5 ${styles.border}`}
        >
          services
        </h1>
      </div>
    </section>
  );
};

export default Hero;
