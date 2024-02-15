import Image from "next/image";
import Link from "next/link";

const InfoCards = () => {
  return (
    <section className="w-full xl:px-28 md:px-20 px-10 pt-16">
      <div className="flex flex-col">
        {/* icon above heading */}
        <Image
          src="/icons/heading.svg"
          width={56}
          height={25}
          alt="heading decorative icon"
          className="sm:self-center sm:ml-32"
        />

        <h2 className="text-primary font-bold sm:text-center text-3xl sm:text-4xl">
          DR. Kalkidan Ephrem
        </h2>
        <p className="mt-3 mb-5 font-semibold text-xl sm:text-center text-card-paragraph">
          I'll have you showing your best smile in no time
        </p>
      </div>

      {/* cards */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 xl:gap-6 2xl:gap-28 mt-10 pb-5 pt-10">
        {/* 1st card */}
        <div className="flex flex-col max-w-sm border-r-2 shadow-sm border-b-2 p-4 rounded-lg md:col-span-2 xl:col-span-1 hover:scale-105 duration-300">
          <Link href="/">
            {/* 1st card icon */}
            <Image
              src="/icons/package.svg"
              width={70}
              height={72}
              alt="package icon"
            />

            <h3 className="text-primary font-bold text-xl mt-14">
              Choose Packages
            </h3>

            <p className="mt-5 font-semibold text-justify text-base text-card-paragraph">
              Explore my dental packages for personalized care. Start your
              journey to optimal oral health today.
            </p>
          </Link>
        </div>

        {/* 2nd card */}
        <div className="flex flex-col max-w-sm p-4 xl:border-hidden border-r-2 shadow-sm border-b-2 rounded-lg md:col-span-2 lg:col-start-2 xl:col-span-1 xl:shadow-xl order-2 xl:order-1 hover:scale-105 duration-300">
          <Link href="/">
            {/* 2nd card icon */}
            <Image
              src="/icons/calander.svg"
              width={70}
              height={77}
              alt="calander icon"
            />

            <h3 className="text-primary font-bold text-xl mt-14">
              Schedule appointment
            </h3>

            <p className="mt-5 font-semibold text-justify text-base text-card-paragraph">
              Your Perfect Smile Awaits: Schedule Your Dental Care Appointment
              Today for a Lifetime of Radiant, Healthy Teeth and Unmatched Oral
              Wellness!
            </p>
          </Link>
        </div>

        {/* 3rd card */}
        <div className="flex flex-col max-w-sm p-4 border-r-2 shadow-sm border-b-2 md:col-start-2 lg:col-start-3 rounded-lg order-1 hover:scale-105 duration-300">
          <Link href="/">
            {/* 3rd card icon */}
            <Image
              src="/icons/graph.svg"
              width={70}
              height={70}
              alt="graph icon"
            />

            <h3 className="text-primary font-bold text-lg mt-14">Services</h3>

            <p className="mt-5 font-semibold text-justify text-base text-card-paragraph">
              I'm now offering a variety of dental services including cosmetic
              dentistry and children's dentistry
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
