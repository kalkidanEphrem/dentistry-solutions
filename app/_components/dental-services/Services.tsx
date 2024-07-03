import ServiceCard from "./ServiceCard";
import { services } from "./data";

const Services = () => {
  return (
    <section className="flex flex-col gap-10 items-center px-10 pt-10 overflow-hidden">
      <h2 className="font-bold text-4xl">
        What I <span className="text-secondary">Provide</span>
      </h2>

      {services.map((service, idx) => (
        <ServiceCard
          key={service.id}
          imageSrc={service.src}
          title={service.heading}
          description={service.content}
          index={idx}
          id={service.id}
        />
      ))}
    </section>
  );
};

export default Services;
