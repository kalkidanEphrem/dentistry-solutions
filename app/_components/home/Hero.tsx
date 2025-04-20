import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
     <section className="w-full relative flex bg-[url('/images/home/cover.png')] bg-cover min-h-screen">
      <div className="w-full p-5 z-10">
        <Image src="/images/home/kalkidan.png" alt="Dr.Kalkidan" width={2800} height={3900}/>
      </div>

        <div className="flex flex-col items-start mt-16 mr-24">
          <div className="flex flex-col items-center gap-0">
            <h1 className="text-black font-bold text-6xl uppercase md:text-justify font-staatliches">
            Showing Your <br/>Best Smile
          </h1>
          <Image src="/images/home/brush.png" alt="hero" className="" width={200} height={5}/>
        </div>


            <p className="text-black font-extralight self-center mt-6 font-poppins">
              We work to provide the smile you’ve always wished for, combining personalized care with advanced technique.
            </p>
    

          <Link
            href="/"
            className="py-3 px-9 mx-auto rounded-full sm:mt-8 font-semibold text-center bg-black text-white hover:cursor-pointer animate-bounce shadow-md"
          >
            Schedule Now
          </Link>
        </div>
    </section>
  );
};

export default Hero;
