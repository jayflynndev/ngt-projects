import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  overlayText: string;
  description: string;
  projectLink: string;
};

export default function AboutCardLeft({
  image,
  overlayText,
  description,
  projectLink,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <Link href={projectLink} className="md:w-1/2 relative group">
        <Image
          src={image}
          alt={overlayText}
          width={600}
          height={400}
          className="rounded-xl object-cover w-full"
        />
        <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span className="text-white text-xl font-semibold">
            {overlayText}
          </span>
        </div>
      </Link>
      <div className="md:w-1/2 space-y-4">
        <p>{description}</p>
      </div>
    </div>
  );
}
