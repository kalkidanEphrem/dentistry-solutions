import Image from "next/image";

const AboutInfo = () => {
  return (
    <section className="px-36 py-[88px] bg-tertiary">
      <div className="p-5">
        <h2 className="font-semibold text-5xl text-primary text-center mb-7">
          Dr. Kalkidan Ephrem
        </h2>

        <div className="flex gap-20 bg-white rounded-2xl p-4">
          <div className="flex flex-col gap-5 justify-center w-3/5">
            <h3 className="text-primary font-semibold text-4xl">Education</h3>

            <p className="text-xl">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
              quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut al
            </p>
          </div>

          <div className="w-2/5 overflow-hidden">
            <Image
              src="/images/istockphoto-1311511363-612x612.jpg"
              width={455}
              height={450}
              alt="Education image"
            />
          </div>
        </div>

        <div className="my-[70px] flex gap-20">
          <div className="flex flex-col gap-5 justify-center">
            <h3 className="text-primary font-semibold text-4xl">Education</h3>

            <p className="text-xl">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
              quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut al
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default AboutInfo;
