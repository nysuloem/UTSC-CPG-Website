import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/PageFrame";
import { getOutput, outputs } from "@/lib/content";

export function generateStaticParams() { return outputs.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = getOutput(slug);
  if (!item) return { title: "Output not found" };
  return { title: item.title, description: item.summary, openGraph: { title: item.title, description: item.summary, images: [] }, twitter: { card: "summary", title: item.title, description: item.summary, images: [] } };
}

export default async function OutputDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = getOutput(slug); if (!item) notFound();
  return <PageFrame>
    <article>
      <header className="output-hero content-width"><div className="output-meta"><span className={`type-tag type-${item.type.toLowerCase()}`}>{item.type}</span><time>{item.date}</time><span>{item.venue}</span></div><h1>{item.title}</h1><p className="page-deck">{item.summary}</p></header>
      <section className="output-body content-width"><aside><p className="card-label">Contributors</p>{item.authors.map((author) => <p key={author}>{author}</p>)}</aside><div className="prose">{item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{item.links && <div className="link-stack">{item.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>)}</div>}</div></section>
      <div className="content-width back-row"><Link className="text-link" href="/outputs">← Back to all outputs</Link></div>
    </article>
  </PageFrame>;
}
