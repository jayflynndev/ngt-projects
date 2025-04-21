"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";

const services = [
  {
    slug: "office-fitouts",
    title: "Office Fitouts - (PLACEHOLDER)",
    summary:
      "Complete office transformations tailored to your team’s needs. (PLACEHOLDER)",
    description: `
      We provide a complete end-to-end fitout service for office spaces, including layout planning, partitioning,
      electricals, finishes, and final touches — all designed to create a productive and inspiring workspace. (PLACEHOLDER)
    `,
    images: ["/about-1.jpg", "/about-2.jpg", "/about-3.jpg"],
  },
  {
    slug: "retail-refurbishments",
    title: "Retail Refurbishments - (PLACEHOLDER)",
    summary:
      "Modernise your retail unit to reflect your brand and customer journey. (PLACEHOLDER)",
    description: `
      We help businesses transform their retail environments with high-quality refurbishments, feature lighting,
      signage, and customer-centric layouts that align with your brand’s vision and goals. (PLACEHOLDER)
    `,
    images: ["/about-3.jpg", "/about-1.jpg"],
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interiors - (PLACEHOLDER)",
    summary:
      "Design and build services for commercial spaces of all sizes. (PLACEHOLDER)",
    description: `
      Whether it's a full interior renovation or a tailored commercial redesign, we handle planning, delivery and finishes
      with precision and attention to detail — helping you get the most out of your space. (PLACEHOLDER)
    `,
    images: ["/about-3.jpg"],
  },
];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (slider) {
      const interval = setInterval(() => {
        slider.current?.next();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [slider]);

  if (!service) return notFound();

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="px-6 py-10 max-w-5xl mx-auto space-y-8">
        {/* Image Carousel */}
        <div
          ref={sliderRef}
          className="keen-slider rounded-xl overflow-hidden h-64 md:h-96"
        >
          {service.images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide relative">
              <Image
                src={src}
                alt={`${service.title} image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-green)]">
          {service.title}
        </h1>

        {/* Summary */}
        <p className="text-lg text-[var(--color-secondary)]">
          {service.summary}
        </p>

        {/* Description */}
        <p className="mt-4 whitespace-pre-line">{service.description}</p>

        {/* Back Button */}
        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-block bg-[var(--color-orange)] text-white px-6 py-3 rounded font-medium hover:opacity-90 transition"
          >
            Back to Services
          </a>
        </div>
      </section>
    </div>
  );
}
