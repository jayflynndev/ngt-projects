import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  summary: string;
  link: string;
};

export default function ProjectCard({ image, title, summary, link }: Props) {
  return (
    <Link
      href={link}
      className="group block bg-white border rounded-xl overflow-hidden shadow hover:shadow-md transition"
    >
      <div className="relative h-48 md:h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <span className="text-white text-lg font-semibold">{title}</span>
        </div>
      </div>
      <div className="p-4 text-[var(--color-text)]">
        <h3 className="text-xl font-semibold mb-2 text-[var(--color-green)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-secondary)]">{summary}</p>
      </div>
    </Link>
  );
}
