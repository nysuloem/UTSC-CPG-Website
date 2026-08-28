export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-grid">
        <div>
          <p className="brand-kicker">UTSC · CPG</p>
          <p className="footer-title">Computational physiology for discovery, teaching, and inclusion.</p>
        </div>
        <div className="footer-links">
          <a href="/research">Research</a><a href="/people">People</a>
          <a href="/hummod">HumMod</a><a href="/join">Join the group</a>
        </div>
      </div>
      <div className="content-width legal-row">
        <p>Unofficial review draft · HumMod is exclusively licensed to HC Simulation, LLC.</p>
        <a href="https://www.umc.edu/" target="_blank" rel="noreferrer">University of Mississippi Medical Center ↗</a>
      </div>
    </footer>
  );
}
