import ServiceCard from "../../components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      image: "/about-1.jpg",
      title: "Office Fitouts - (PLACEHOLDER)",
      summary:
        "Complete office transformations tailored to your team’s needs.(PLACEHOLDER)",
      link: "/services/office-fitouts",
    },
    {
      image: "/about-2.jpg",
      title: "Retail Refurbishments - (PLACEHOLDER)",
      summary:
        "Modernise your retail unit to reflect your brand and customer journey. (PLACEHOLDER)",
      link: "/services/retail-refurbishments",
    },
    {
      image: "/about-3.jpg",
      title: "Commercial Interiors - (PLACEHOLDER)",
      summary:
        "Design and build services for commercial spaces of all sizes. (PLACEHOLDER)",
      link: "/services/commercial-interiors",
    },
  ];

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-green)] mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-secondary)]">
            We specialise in delivering professional fitouts, refurbishments and
            full-service interior solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}
