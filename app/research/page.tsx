import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Research", description: "Current UTSC CPG research across computational physiology, metabolism, reproduction, renal function, sleep, and aging." };

export default function ResearchPage() {
  return <PageFrame>
    <section className="page-hero content-width"><p className="eyebrow">Research atlas</p><h1>Questions that cross system boundaries.</h1><p className="page-deck">Each project begins with one physiological question and follows its consequences through the whole-body model.</p></section>
    <section className="content-width research-list">
      {projects.map((project, index) => <article className="research-row" key={project.slug}><div className="research-meta"><span>0{index + 1}</span><p>{project.theme}</p><span className={`status status-${project.status}`}>{project.status}</span></div><div><h2>{project.title}</h2><p>{project.summary}</p><div className="member-line">Researchers: {project.members.join(" · ")}</div>{project.outputs.length > 0 && <div className="related-links">{project.outputs.map((slug) => <Link key={slug} href={`/outputs/${slug}`}>Related output ↗</Link>)}</div>}</div></article>)}
    </section>
    <section className="page-cta content-width"><p className="eyebrow">Collaborate</p><h2>Have a physiological question that needs a whole-body view?</h2><Link className="button button-primary" href="/join">Start a conversation</Link></section>
  </PageFrame>;
}
