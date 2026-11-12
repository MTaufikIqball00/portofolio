import { AboutContent } from "@/components/about/AboutContent";
import { constructMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Tentang Saya & Pendidikan Terakhir",
  description:
    "Latar belakang pendidikan di Universitas Komputer Indonesia (IPK 3.39) dengan tugas akhir autonomous drone pertanian, filosofi rekayasa perangkat lunak, dan ranah fokus teknis.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-8">
      <AboutContent />
    </div>
  );
}
