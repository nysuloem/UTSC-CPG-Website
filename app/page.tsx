import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { featuredOutputs, featuredProjects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero-shell">
        <SiteHeader />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Human physiology, made computable</p>
            <h1>Model the whole system. Make the model include everyone.</h1>
            <p className="hero-intro">We bring students, educators, and researchers together to extend HumMod—an integrative model of human physiology—for discovery, teaching, and more representative virtual populations.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/research">Explore our research</Link>
              <Link className="button button-secondary" href="/join">Work with us</Link>
            </div>
          </div>
          <div className="system-visual">
            <img
              className="hummod-character"
              src="/hummod-character.png"
              alt="Smiling illustrated computer character representing HumMod"
              width="400"
              height="400"
            />
          </div>
        </div>
        <div className="hero-proof" aria-label="Group focus areas">
          <div><strong>Whole-body</strong><span>systems modelling</span></div>
          <div><strong>Student-led</strong><span>research experiences</span></div>
          <div><strong>Inclusive</strong><span>virtual physiology</span></div>
        </div>
      </section>

      <main>
        <section className="section content-width" id="research">
          <div className="section-heading">
            <div><p className="eyebrow">Research atlas</p><h2>One model. Many physiological questions.</h2></div>
            <Link className="text-link" href="/research">View all projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article className="project-card" key={project.slug}>
                <span className="card-index">0{index + 1}</span><p className="card-label">{project.theme}</p>
                <h3>{project.title}</h3><p>{project.summary}</p>
                <div className="member-line">{project.members.join(" · ")}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="hummod-band">
          <div className="content-width band-grid">
            <div><p className="eyebrow eyebrow-light">Open the black box</p><h2>Physiology is a network, not a list of organs.</h2></div>
            <div>
              <p>HumMod represents thousands of time-dependent relationships across the body. We use it as a research environment and as a way for students to ask ambitious questions safely, iteratively, and quantitatively.</p>
              <div className="band-actions"><Link className="button button-light" href="/hummod">Learn about HumMod</Link><a className="inline-light" href="https://forms.gle/F4FLtTzbN2eJgxR17" target="_blank" rel="noreferrer">Request the UTSC release ↗</a></div>
            </div>
          </div>
        </section>

        <section className="section content-width">
          <div className="section-heading"><div><p className="eyebrow">Recent work</p><h2>From the model to the room.</h2></div><Link className="text-link" href="/outputs">Browse all outputs <span aria-hidden="true">↗</span></Link></div>
          <div className="output-list">
            {featuredOutputs.map((item) => (
              <Link className="output-row" href={`/outputs/${item.slug}`} key={item.slug}>
                <span className={`type-tag type-${item.type.toLowerCase()}`}>{item.type}</span>
                <div><h3>{item.title}</h3><p>{item.venue}</p></div><time>{item.date}</time><span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="join-band">
          <div className="content-width join-grid"><div><p className="eyebrow eyebrow-light">Students & collaborators</p><h2>Bring a question. Learn to model the system.</h2></div><div><p>Undergraduates from UTSC and other Ontario universities are welcome to get in touch. We also welcome conversations with educators and physiological modelling collaborators.</p><Link className="button button-light" href="/join">How to join</Link></div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
