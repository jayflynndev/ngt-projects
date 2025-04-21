import AboutCardLeft from "../../components/AboutCardLeft";
import AboutCardRight from "../../components/AboutCardRight";

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="px-6 py-10 max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-green)] mb-4">
            About NGT Projects
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-secondary)]">
            Trusted interior refurbishments and fitouts for businesses across
            the UK.
          </p>
        </div>

        <AboutCardLeft
          image="/about-1.jpg"
          overlayText="PLACEHOLDER TEXT PROJECT NAME"
          description="NGT Projects was founded on the belief that commercial spaces should be as inspiring as they are functional... (PLACEHOLDER TEXT)"
          projectLink="/projects"
        />

        <AboutCardRight
          image="/about-2.jpg"
          overlayText="PLACEHOLDER TEXT PROJECT NAME"
          description="We specialise in transforming workspaces into places that support your brand, your team, and your goals... (PLACEHOLDER TEXT)"
          projectLink="/projects"
        />

        <AboutCardLeft
          image="/about-3.jpg"
          overlayText="PLACEHOLDER TEXT PROJECT NAME"
          description="Our team brings decades of combined experience in project management, design coordination, and on-site execution... (PLACEHOLDER TEXT)"
          projectLink="/projects"
        />

        <div className="bg-[var(--color-green)] text-white p-6 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-2">
            “Transforming your concept into reality.”
          </h2>
          <p className="text-white/90">– The NGT Projects Team</p>
        </div>
      </section>
    </div>
  );
}
