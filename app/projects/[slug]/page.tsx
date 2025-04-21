"use client";

import { useParams, notFound } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect } from "react";

const projects = [
  {
    slug: "project-1",
    title: "Corporate Office Refurbishment",
    summary: "A full redesign of a multi-floor office space in Central London.",
    description: `
      This project involved a complete strip-out and refit of a large-scale office.
      Our team managed everything from partitioning and flooring to lighting and final finishes.
      The result was a contemporary and functional workspace that reflects the client’s values.
    `,
    images: ["/about-1.jpg", "/about-2.jpg", "/about-3.jpg"],
  },
  {
    slug: "project-2",
    title: "Retail Unit Fitout",
    summary:
      "Transformed a bare unit into a branded, high-end retail environment.",
    description: `
      We worked closely with the client’s brand team to create a stylish and practical retail space.
      This included feature lighting, branded fixtures, and high-end flooring — all delivered on a tight schedule.
    `,
    images: ["/about-3.jpg", "/about-2.jpg"],
  },
  {
    slug: "project-3",
    title: "Education Sector Redesign",
    summary:
      "Upgraded classroom and communal areas with modern, practical design.",
    description: `
      For this education sector client, we focused on durability, comfort, and ease of maintenance.
      We redesigned classrooms, breakout zones, and admin spaces to better support staff and students.
    `,
    images: ["/about-3.jpg"],
  },
];

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

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

  if (!project) return notFound();

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="px-6 py-10 max-w-5xl mx-auto space-y-8">
        {/* Image Carousel */}
        <div
          ref={sliderRef}
          className="keen-slider rounded-xl overflow-hidden h-64 md:h-96"
        >
          {project.images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide relative">
              <Image
                src={src}
                alt={`${project.title} image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-green)]">
          {project.title}
        </h1>

        {/* Summary */}
        <p className="text-lg text-[var(--color-secondary)]">
          {project.summary}
        </p>

        {/* Description */}
        <p className="mt-4 whitespace-pre-line">{project.description}</p>
      </section>
      <div className="text-center mt-10">
        <a
          href="/projects"
          className="inline-block bg-[var(--color-orange)] text-white px-6 py-3 rounded font-medium hover:opacity-90 transition"
        >
          See More Projects
        </a>
      </div>
    </div>
  );
}
