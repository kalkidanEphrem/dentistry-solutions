import Image from "next/image";
import Link from "next/link";
import { RiChatQuoteFill } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="w-full bg-tertiary relative flex flex-col-reverse xl:flex-row 2xl:px-24 xl:px-16 md:px-12 sm:px-6 sm:py-10 p-2 overflow-clip">
      {/* decorative purpose divs */}
      <div className="flex xl:max-w-[350px] xl:h-1/3 p-20 md:p-28 xl:p-52 rounded-full border-white opacity-50 border-[3.5rem] absolute top-96 sm:top-1/2 -right-32 xl:left-1/2 xl:-translate-x-1/2 sm:-translate-y-1/3 xl:sm:-translate-y-1/2 justify-center items-center">
        <div className="max-w-lg h-1/2 p-24  border-white opacity-60 border-[3.5rem] rounded-full"></div>
      </div>
      <div className="flex xl:max-w-[350px] xl:h-1/3 p-20 md:p-28 xl:p-52 rounded-full border-white opacity-50 border-[3.5rem] absolute xl:-top-20 top-0 md:-top-40 right-2/3 xl:-right-20 justify-center items-center">
        <div className="max-w-lg h-1/2 p-24  border-white opacity-60 border-[3.5rem] rounded-full"></div>
      </div>
      <div className="hidden sm:flex xl:max-w-[350px] xl:h-1/3 p-20 md:p-28 xl:p-52 rounded-full border-white opacity-50 border-[3.5rem] absolute -bottom-20 xl:-bottom-44 right-2/3 xl:-right-10 justify-center items-center">
        <div className="max-w-lg h-1/2 p-24  border-white opacity-60 border-[3.5rem] rounded-full"></div>
      </div>

      <div className="xl:w-2/5 p-5 z-10">
        <div className="bg-white px-10 pb-8 xl:pb-4 pt-8 xl:px-20 max-w-md rounded-xl relative left-4 sm:left-5 lg:left-4 xl:-left-1/4 shadow-lg xl:mt-8">
          <h1 className="text-secondary font-bold text-2xl sm:text-4xl xl:flex flex-col items-center">
            DR. Kalkidan <span className="xl:mt-2 xl:self-end">Ephrem</span>
          </h1>
        </div>

        <div className="flex xl:flex-col flex-wrap justify-around items-center gap-16 mt-14 xl:mt-32">
          <p className="text-primary font-semibold text-xl text-center lg:text-justify xl:text-center lg:w-2/3 xl:w-full">
            Your Dental Choice, I strive to be dedicate and treat your teeth,
            Try to think of me for you and your family's health
          </p>

          <div className="bg-white py-4 px-5 max-w-md rounded-xl flex shadow-lg lg:order-last">
            <RiChatQuoteFill size={40} className="text-secondary" />

            <p className="text-primary font-bold self-center mt-6">
              I believe dentistry should be affordable for everyone
            </p>
          </div>

          <Link
            href="/"
            className="py-3 px-9 rounded-md sm:mt-8 font-semibold text-center max-w-min bg-primary text-white hover:cursor-pointer animate-bounce shadow-md"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>

      <div className="xl:w-3/5 flex items-end xl:items-center p-10 z-10">
        <Image
          src="/images/istockphoto-1311511363-612x612.jpg"
          className="object-contain shadow-lg rounded-lg"
          width={1000}
          height={1000}
          alt="head shot of DR. Kalkidan Ephrem"
        />
      </div>
    </section>
  );
}
