import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { outputs } from "@/lib/content";

export const metadata: Metadata = { title: "Outputs", description: "Papers, posters, presentations, awards, and news from UTSC CPG." };

export default function OutputsPage() {
  return <PageFrame>
    <section className="page-hero content-width"><p className="eyebrow">Outputs & news</p><h1>Research, presented in public.</h1><p className="page-deck">Papers, posters, presentations, and student milestones from the group’s growing research program.</p></section>
    <section className="content-width output-archive">{outputs.map((item) => <Link className="archive-row" href={`/outputs/${item.slug}`} key={item.slug}><span className={`type-tag type-${item.type.toLowerCase()}`}>{item.type}</span><div><h2>{item.title}</h2><p>{item.summary}</p><span>{item.venue}</span></div><time>{item.date}</time><span className="archive-arrow" aria-hidden="true">↗</span></Link>)}</section>
  </PageFrame>;
}
