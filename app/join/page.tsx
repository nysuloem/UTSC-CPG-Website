import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";

export const metadata: Metadata = { title: "Join", description: "Join or collaborate with the UTSC Computational Physiology Group." };

export default function JoinPage() {
  return <PageFrame>
    <section className="page-hero content-width"><p className="eyebrow">Join the group</p><h1>Your first model can begin with one good question.</h1><p className="page-deck">We welcome undergraduate students from UTSC and other Ontario universities, as well as educators and researchers interested in computational physiology.</p></section>
    <section className="join-paths content-width"><article><span>01</span><p className="card-label">Undergraduate students</p><h2>Learn through a real research problem.</h2><p>You do not need to arrive as a modeller. Curiosity about physiology, patience with complex systems, and a willingness to learn are the best starting points.</p><ul><li>Choose or develop a physiological question</li><li>Learn HumMod structure and simulation practice</li><li>Connect model changes to evidence</li><li>Communicate the result as research</li></ul></article><article><span>02</span><p className="card-label">Collaborators</p><h2>Connect expertise across disciplines.</h2><p>We welcome conversations with physiologists, educators, modellers, and partners who can help validate, extend, or use the group’s work.</p><ul><li>Physiological data and domain expertise</li><li>Model validation and methods</li><li>Teaching and undergraduate research design</li><li>Research dissemination and partnerships</li></ul></article></section>
    <section className="contact-band"><div className="content-width contact-grid"><div><p className="eyebrow eyebrow-light">Contact</p><h2>Tell us what you want to understand.</h2></div><div><p>Introduce yourself, your institution or program, the physiological question that interests you, and any relevant experience. A short message is enough.</p><a className="button button-light" href="mailto:nysuloem.brown@utoronto.ca">Email Dr. Jason Brown</a><p className="small-note light-note">Contact address should be confirmed before public launch.</p></div></div></section>
  </PageFrame>;
}
