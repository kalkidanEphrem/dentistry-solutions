import Image from "next/image";

const MyStory = () => {
  return (
    <section className="2xl:px-24 xl:px-16 md:px-12 sm:px-6 px-2 pb-5 pt-10 lg:flex items-center justify-evenly">
      <div className="basis-1/2 max-w-2xl mx-auto xl:max-w-none">
        <h2 className="font-semibold text-5xl text-primary mb-6 sm:mb-16">
          My Story
        </h2>

        <p className="sm:text-lg text-base text-justify font-medium max-w-3xl text-black/65">
          We're an international non-profit founded in 2003, with offices in
          London, New York, New Delhi, Amsterdam and Beijing. In that time,
          we've grown our network to include over 500 multinational businesses
          in 175 markets worldwide. The Under2 Coalition, for which we are the
          Secretariat, is made up of over 260 governments globally, representing
          1.75 billion people and 50% of the global economy.
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

export default MyStory;
