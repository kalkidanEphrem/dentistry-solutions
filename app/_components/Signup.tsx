import Image from "next/image";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <section className="w-full xl:px-28 xl:py-36 md:px-20 md:py-24 px-10 py-16 overflow-clip">
      <div className="bg-tertiary p-6 md:p-8 lg:px-16 lg:py-8 rounded-xl relative">
        {/* decorative svg */}
        <Image
          src="/icons/signup.svg"
          width={510}
          height={350}
          alt="About me icon"
          className="hidden lg:block absolute 2xl:right-0 2xl:top-16 xl:-right-[70px] lg:-right-32 lg:-top-20"
        />

        <div className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 flex flex-col gap-10 justify-between z-10">
          <div className="flex flex-col sm:w-max">
            {/* icon above heading */}
            <Image
              src="/icons/heading.svg"
              width={56}
              height={25}
              alt="heading icon"
              className="sm:self-end mr-2"
            />

            <h2 className="text-primary font-bold text-3xl sm:text-4xl">
              Schedule Appointment
            </h2>
          </div>
          <p className="text-primary text-justify mt-3 mb-5 font-semibold text-xl">
            Your Perfect Smile Awaits: Schedule Your Dental Care Appointment
            Today for a Lifetime of Radiant, Healthy Teeth and Unmatched Oral
            Wellness!
          </p>

          <SignupForm />
        </div>
      </div>
    </section>
  );
}
