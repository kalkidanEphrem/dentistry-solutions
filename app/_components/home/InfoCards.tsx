import Image from "next/image";
import Link from "next/link";

const InfoCards = () => {
  return (
    <section className="w-full xl:px-28 md:px-20 px-10 pt-16">
      <div className="flex justify-center">
        <p className="inline-flex items-center font-staatliches text-3xl font-semibold text-black">
          I'll have you showing your best
          {/* wrap smile+icon in a vertical flex so “smile” sits above the image */}
          <span className="flex flex-col items-center text-primary px-2 mt-5">
            smile
            <Image
              src="/images/home/smile.png"
              width={56}
              height={25}
              alt="decorative smile icon"
            />
          </span>
          in no time
        </p>
      </div>

      {/* cards */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 xl:gap-6 2xl:gap-28 mt-10 pb-5 pt-10">
        {/* 1st card */}
        <div className="flex flex-col items-center text-center border border-primary max-w-md p-4 translate-y-16 rounded-3xl hover:scale-105 duration-300">
          <Link href="/">
            <Image
              src="/icons/home/package.png"
              width={170}
              height={172}
              alt="package icon"
              className="mt-8 mx-auto"
            />
            <h3 className="font-bold font-staatliches text-xl mt-8">
              Choose Packages
            </h3>
            <p className="mt-5 text-base">
              Explore my dental packages for personalized care. Start your
              journey to optimal oral health today.
            </p>
          </Link>
        </div>

        {/* 2nd card */}
        <div className="flex flex-col items-center text-center mx-auto border border-primary max-w-md p-6 rounded-3xl md:col-span-2 lg:col-start-2 xl:col-span-1 xl:shadow-xl order-2 xl:order-1 hover:scale-105 duration-300">
          <Link href="/">
            <Image
              src="/icons/home/services.png"
              width={170}
              height={177}
              alt="calendar icon"
              className="mt-8 mx-auto"
            />
            <h3 className="font-bold font-staatliches text-xl mt-8">
              Schedule Appointment
            </h3>
            <p className="mt-5 text-base">
              Your Perfect Smile Awaits: Schedule Your Dental Care Appointment
              Today for a Lifetime of Radiant, Healthy Teeth and Unmatched Oral
              Wellness!
            </p>
          </Link>
        </div>

        {/* 3rd card */}
        <div className="flex flex-col items-center text-center mx-auto border border-primary max-w-md p-6 translate-y-16 rounded-3xl order-1 hover:scale-105 duration-300">
          <Link href="/">
            <Image
              src="/icons/home/schedule.png"
              width={170}
              height={170}
              alt="graph icon"
              className="mt-8 mx-auto"
            />
            <h3 className="font-bold font-staatliches text-xl mt-8">
              Services
            </h3>
            <p className="mt-5 text-base">
              I'm now offering a variety of dental services including cosmetic
              dentistry and children's dentistry.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
