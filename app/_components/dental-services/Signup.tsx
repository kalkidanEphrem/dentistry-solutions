import Image from "next/image";
import SignupForm from "./SignupForm";

const Signup = () => {
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

        <div className="w-full relative flex flex-col items-center gap-10 justify-between">
          <div className="flex flex-col sm:w-max">
            {/* icon above heading */}
            <Image
              src="/icons/heading.svg"
              width={56}
              height={25}
              alt="heading icon"
              className="sm:self-start mr-2"
            />

            <h2 className="text-primary font-bold text-3xl sm:text-4xl">
              Schedule Appointment
            </h2>
          </div>

          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default Signup;
