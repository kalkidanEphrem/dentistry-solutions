import Image from "next/image";

const DentalWorks = async () => {
  return (
    <section className="w-full mt-24 relative px-4 md:px-12 lg:px-24 py-16">
      <div className="relative flex flex-col items-center justify-center">
        {/* Decorative icon above heading */}
        <Image
          src="/icons/dental-works.png"
          width={160}
          height={160}
          alt="Heading Icon"
          className="mb-4"
        />

        {/* Heading */}
        <h2 className="font-bold text-center font-staatliches text-3xl sm:text-4xl">
          Dental Services
        </h2>

        <div className="relative w-full max-w-[600px] space-x-6 h-[400px] px-8">
          {/* Children Dentistry - top left */}
          <div className="absolute top-0 left-0 flex flex-col items-start">
            <Image src="/images/home/left-arrow.png" alt="" width={300} height={200} />
            <div className="flex flex-col items-start">
              <Image src="/images/home/children-dentistry.png" alt="" width={240} height={140} />
              <h2 className="font-staatliches text-xl mt-2">Children Dentistry</h2>
            </div>
          </div>

          {/* Cosmetic Dentistry - top right */}
          <div className="absolute top-0 right-0 flex flex-col items-end">
            <Image src="/images/home/right-arrow.png" alt="" width={300} height={700} />
            <div className="flex flex-col items-end">
              <Image src="/images/home/cosmetic-dentistry.png" alt="" width={240} height={140} />
              <h2 className="font-staatliches text-xl mt-2">Cosmetic Dentistry</h2>
            </div>
          </div>

          {/* General Dentistry - bottom center */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 flex flex-col items-center">
            <Image src="/images/home/bottom-arrow.png" alt="" width={520} height={400} />
            <div className="flex flex-col items-center">
              <Image src="/images/home/general-dentistry.png" alt="" width={240} height={140} />
              <h2 className="font-staatliches text-xl mt-2">General Dentistry</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalWorks;
