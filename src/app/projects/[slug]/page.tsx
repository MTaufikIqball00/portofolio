import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { getProjectBySlug } from "@/lib/github/client";
import { VERIFIED_FALLBACK_PROJECTS } from "@/lib/github/fallback-data";
import { constructMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VERIFIED_FALLBACK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
    });
  }

  return constructMetadata({
    title: project.displayName,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-8">
      <ProjectDetailView project={project} />
    </div>
  );
}
