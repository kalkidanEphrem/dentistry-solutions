import Image from "next/image";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <section className="flex justify-center  items-center sm:mb-12 md:mb-24 min-h-screen shad  w-full xl:px-28 xl:py-36 md:px-20 md:py-24 px-10 py-16 overflow-clip">
      <div className="p-6 md:p-8 lg:px-16 border border-primary lg:py-8 rounded-xl relative w-full max-w-4xl">
        <div className="w-full flex flex-col items-center gap-10 z-10">
          <h2 className="font-staatliches font-bold text-3xl sm:text-4xl">
            Schedule Appointment
          </h2>

          <p className="font-inter text-primary mt-3 mb-5 text-xl">
            Your Perfect Smile Awaits: Schedule Your Dental Care Appointment
            Today for a Lifetime of Radiant, Healthy Teeth and Unmatched Oral
            Wellness!
          </p>

          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default Signup;
