import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

export default function HomePage() {
  const services = [
    {
      image: "/about-1.jpg",
      title: "Office Fitouts (PLACEHOLDER)",
      summary:
        "Functional, modern office spaces tailored to your business. (PLACEHOLDER)",
    },
    {
      image: "/about-2.jpg",
      title: "Retail Refurbishment (PLACEHOLDER)",
      summary:
        "We transform retail environments to reflect your brand and vision. (PLACEHOLDER)",
    },
    {
      image: "/about-3.jpg",
      title: "Commercial Interiors (PLACEHOLDER)",
      summary:
        "End-to-end commercial refurb and fitout services across the UK.(PLACEHOLDER)",
    },
  ];

  return (
    <div className="space-y-16 px-6 py-10 bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-green)] mb-6 text-center">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--color-green)] rounded-xl shadow-inner max-w-4xl mx-auto p-8 text-center text-white">
        <h3 className="text-2xl font-semibold mb-2">Have a project in mind?</h3>
        <p className="mb-6">
          Let’s talk about how we can help bring your space to life.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[var(--color-orange)] text-white px-6 py-3 rounded hover:opacity-90 transition font-medium"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
