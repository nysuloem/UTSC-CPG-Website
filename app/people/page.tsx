import type { Metadata } from "next";
import Image from "next/image";
import { PageFrame } from "@/components/PageFrame";
import { people } from "@/lib/content";

export const metadata: Metadata = { title: "People", description: "Meet the project leads, undergraduate researchers, and alumni of UTSC CPG." };

const byFirstName = (a: { name: string }, b: { name: string }) =>
  a.name.replace(/^Dr\.\s+/, "").localeCompare(b.name.replace(/^Dr\.\s+/, ""));

const isTiffany = (name: string) => name === "Tiffany Bishun";

export default function PeoplePage() {
  const leads = people.filter((person) => person.status === "lead" || isTiffany(person.name)).sort(byFirstName);
  const current = people.filter((person) => person.status === "current" && !isTiffany(person.name)).sort(byFirstName);
  const alumni = people.filter((person) => person.status === "alumni").sort(byFirstName);
  return <PageFrame>
    <section className="page-hero content-width"><p className="eyebrow">People</p><h1>A research group built around student questions.</h1><p className="page-deck">Faculty mentorship, student ownership, and an unusually large physiological model create room for many kinds of expertise.</p></section>
    <section className="content-width" style={{ marginBottom: "3rem" }}>
      <figure style={{ margin: 0 }}>
        <Image
          src="/images/utsc-cpg-group-2026.webp"
          alt="Members of the UTSC Computational Physiology Group gathered around a conference table"
          width={1714}
          height={967}
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "1rem" }}
        />
        <figcaption style={{ marginTop: "0.65rem", fontSize: "0.9rem", opacity: 0.72 }}>UTSC Computational Physiology Group, 2026</figcaption>
      </figure>
    </section>
    <section className="content-width people-section"><div className="section-heading"><div><p className="eyebrow">Leadership</p><h2>Project co-leads</h2></div></div><div className="lead-grid">{leads.map((person) => <article className="person-card person-lead" key={person.name}><div className="person-initials" aria-hidden="true">{person.name.replace("Dr. ", "").split(" ").map((part) => part[0]).slice(0,2).join("")}</div><div><p className="card-label">{isTiffany(person.name) ? "Project co-lead" : person.role}</p><h3>{person.name}</h3><p>{person.projects[0]}</p></div></article>)}</div></section>
    <section className="content-width people-section"><div className="section-heading"><div><p className="eyebrow">Current team</p><h2>Undergraduate researchers</h2></div><p className="count-note">{current.length} current members</p></div><div className="people-grid">{current.map((person) => <article className="person-card" key={person.name}><div className="person-initials person-initials-small" aria-hidden="true">{person.name.split(" ").map((part) => part[0]).slice(0,2).join("")}</div><div><p className="card-label">{person.role}</p><h3>{person.name}</h3>{person.projects.map((project) => <p key={project}>{project}</p>)}</div></article>)}</div></section>
    <section className="alumni-band"><div className="content-width"><p className="eyebrow eyebrow-light">Alumni</p><h2>Former undergraduate members</h2><ul className="alumni-list">{alumni.map((person) => <li key={person.name}>{person.name}</li>)}</ul></div></section>
  </PageFrame>;
}
