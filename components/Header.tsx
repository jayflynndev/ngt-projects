import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[var(--color-primary)] text-black p-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/logo.jpg"
          alt="NGT Projects Logo"
          width={150}
          height={50}
        />
      </Link>
      <nav className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
