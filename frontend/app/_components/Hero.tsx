import Link from "next/link";
import { RiChatQuoteFill } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="w-full relative flex flex-col-reverse xl:flex-row 2xl:px-24 xl:px-16 md:px-12 sm:px-6 sm:py-10 p-2 overflow-clip">
      <div className="w-1/2 p-5 z-10">
        <h1 className="hidden sm:block text-black font-bold text-2xl sm:text-4xl">
          DR. Kalkidan Ephrem
        </h1>

        <div className="flex flex-col justify-around gap-12 sm:mt-14">
          <p className="text-black font-bold text-2xl lg:text-xl md:text-justify w-full">
            Your Dental Choice, I strive to be dedicate and treat your teeth,
            Try to think of me for you and your family's health
          </p>

          <div className="hidden bg-white py-4 px-5 max-w-md rounded-xl lg:flex shadow-lg lg:order-last">
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
    </section>
  );
}
