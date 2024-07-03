import Image from "next/image";

const Goals = () => {
  return (
    <section className="2xl:px-24 xl:px-16 md:px-12 sm:px-6 px-2 py-5 flex flex-col lg:flex-row-reverse items-center justify-evenly">
      <div className="basis-1/2 max-w-2xl mx-auto xl:max-w-none">
        <h2 className="font-semibold text-5xl text-primary mb-6 sm:mb-16">
          My Goal
        </h2>

        <p className="sm:text-lg text-base text-justify font-medium max-w-3xl text-black/65">
          To be your Dental Choice, I strive to be dedicate and treat your
          teeth, Try to think of me for you and your family's health
        </p>
      </div>

      <div className="basis-1/2 max-w-2xl mx-auto object-cover xl:max-w-none">
        <Image
          src="/images/about/26.png"
          width={500}
          height={800}
          alt="photo collage"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Goals;
