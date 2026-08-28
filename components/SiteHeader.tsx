/* eslint-disable @next/next/no-html-link-for-pages -- full page loads avoid the deployed client-router navigation failure */
const links = [
  ["About", "/about"], ["Research", "/research"], ["People", "/people"],
  ["HumMod", "/hummod"], ["Outputs", "/outputs"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header content-width">
      <a className="brand" href="/" aria-label="UTSC Computational Physiology Group home">
        <span className="brand-kicker">University of Toronto Scarborough</span>
        <span className="brand-name">Computational Physiology Group</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a className="nav-cta" href="/join">Join us</a>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="/join">Join us</a>
        </nav>
      </details>
    </header>
  );
}
