import Image from "next/image";

const MyStory = () => {
  return (
    <section className="bg-[url('/images/about/my-story-bg.svg')] bg-cover">
      <div className="xl:px-28 px-12 py-10 lg:flex items-center justify-evenly top-0 left-0">
        <div>
          <h2 className="font-semibold text-5xl text-primary mb-16">
            My <br className="hidden xl:block 2xl:hidden" /> Story
          </h2>

          <p className="text-2xl max-w-3xl">
            We're an international non-profit founded in 2003, with offices in
            London, New York, New Delhi, Amsterdam and Beijing. In that time,
            we've grown our network to include over 500 multinational businesses
            in 175 markets worldwide. The Under2 Coalition, for which we are the
            Secretariat, is made up of over 260 governments globally,
            representing 1.75 billion people and 50% of the global economy.
          </p>
        </div>

        <Image
          src="/images/about/26.png"
          width={500}
          height={800}
          alt="photo collage"
        />
      </div>
    </section>
  );
};

export default MyStory;
