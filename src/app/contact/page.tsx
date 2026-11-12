import { ContactSection } from "@/components/contact/ContactSection";
import { constructMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Kontak & Diskusi Profesional",
  description:
    "Saluran komunikasi langsung dan profil GitHub untuk peluang rekayasa, pertanyaan teknis, dan kolaborasi open-source.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-8">
      <ContactSection />
    </div>
  );
}
