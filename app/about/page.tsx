import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";

export const metadata: Metadata = { title: "About", description: "The mission, history, and teaching model of the UTSC Computational Physiology Group." };

export default function AboutPage() {
  return <PageFrame>
    <section className="page-hero content-width"><p className="eyebrow">About the group</p><h1>Build the model. Build the modeller.</h1><p className="page-deck">Established as an undergraduate computational physiology initiative at the University of Toronto Scarborough, the group combines ambitious whole-body modelling with hands-on research training.</p></section>
    <section className="split-section content-width"><div><p className="section-number">01</p><h2>Our mission</h2></div><div className="prose"><p>We bring together professors, industry experts, and undergraduate students to advance mathematical modelling of human physiology using HumMod.</p><p>Our work has two inseparable goals: improve what the model can represent, and create meaningful research opportunities for students who want to understand human systems by building and testing them.</p></div></section>
    <section className="principles-section"><div className="content-width"><p className="eyebrow">How we work</p><div className="principle-grid"><article><span>01</span><h3>Systems first</h3><p>We study physiology as interacting feedback loops across organs, time scales, and environments.</p></article><article><span>02</span><h3>Learn by doing</h3><p>Students move from a question to equations, code, simulations, validation, and scientific communication.</p></article><article><span>03</span><h3>Representation matters</h3><p>We work toward models that better reflect variation across sex, age, physiology, and population contexts.</p></article></div></div></section>
    <section className="split-section content-width"><div><p className="section-number">02</p><h2>Part of a larger lineage</h2></div><div className="prose"><p>HumMod grew from decades of integrative physiological modelling led by Dr. Thomas Coleman and collaborators. UTSC-CPG carries that systems approach into new teaching and research contexts.</p><div className="link-stack"><a href="https://hummod.org/origin-story/" target="_blank" rel="noreferrer">Read HumMod’s origin story ↗</a><a href="https://www.ahajournals.org/doi/full/10.1161/HYPERTENSIONAHA.121.17287" target="_blank" rel="noreferrer">Read about Dr. Coleman’s career ↗</a></div></div></section>
    <section className="page-cta content-width"><p className="eyebrow">Next</p><h2>See what the group is modelling now.</h2><Link className="button button-primary" href="/research">Explore the research</Link></section>
  </PageFrame>;
}
