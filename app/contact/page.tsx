import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Ready to discuss your next project? Get in touch below:</p>
      <ContactForm />
    </section>
  );
}
