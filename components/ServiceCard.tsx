import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  summary: string;
  link?: string; // <- make it optional
};

export default function ServiceCard({ image, title, summary, link }: Props) {
  const cardContent = (
    <>
      <div className="relative h-48 md:h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {link && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
            <span className="text-white text-lg font-semibold">{title}</span>
          </div>
        )}
      </div>
      <div className="p-4 text-[var(--color-text)]">
        <h3 className="text-xl font-semibold mb-2 text-[var(--color-green)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-secondary)]">{summary}</p>
      </div>
    </>
  );

  return link ? (
    <Link
      href={link}
      className="group block bg-white border rounded-xl overflow-hidden shadow hover:shadow-md transition"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="group block bg-white border rounded-xl overflow-hidden shadow transition">
      {cardContent}
    </div>
  );
}
