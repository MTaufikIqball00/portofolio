import { AboutContent } from "@/components/about/AboutContent";
import { constructMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Tentang Saya & Prinsip Rekayasa",
  description:
    "Latar belakang teknis, filosofi rekayasa perangkat lunak, dan ranah fokus aktif pada kecerdasan buatan, pemrograman sistem, dan robotika.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-8">
      <AboutContent />
    </div>
  );
}
