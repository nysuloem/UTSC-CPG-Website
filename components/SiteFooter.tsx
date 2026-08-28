import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-grid">
        <div>
          <p className="brand-kicker">UTSC · CPG</p>
          <p className="footer-title">Computational physiology for discovery, teaching, and inclusion.</p>
        </div>
        <div className="footer-links">
          <Link href="/research">Research</Link><Link href="/people">People</Link>
          <Link href="/hummod">HumMod</Link><Link href="/join">Join the group</Link>
        </div>
      </div>
      <div className="content-width legal-row">
        <p>HumMod is exclusively licensed to HC Simulation, LLC.</p>
        <a href="https://www.umc.edu/" target="_blank" rel="noreferrer">University of Mississippi Medical Center ↗</a>
      </div>
    </footer>
  );
}
