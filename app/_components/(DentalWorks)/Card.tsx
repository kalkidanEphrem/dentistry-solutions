import Image from "next/image";

type prop = {
  src: string;
  heading: string;
  content: string;
};

export default function Card(props: prop) {
  return (
    <div className="flex flex-col bg-white rounded-xl max-w-xs hover:scale-105 shrink-0 shadow-lg">
      <Image
        src={props.src}
        height={100}
        width={400}
        alt="card image"
        className="object-contain rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-primary uppercase font-bold text-lg mt-2">
          {props.heading}
        </h3>
        <p className="mt-5 font-semibold text-justify text-base text-card-paragraph">
          {props.content}
        </p>
      </div>
    </div>
  );
}
