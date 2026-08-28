import Link from "next/link";

const links = [
  ["About", "/about"], ["Research", "/research"], ["People", "/people"],
  ["HumMod", "/hummod"], ["Outputs", "/outputs"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header content-width">
      <Link className="brand" href="/" aria-label="UTSC Computational Physiology Group home">
        <span className="brand-kicker">University of Toronto Scarborough</span>
        <span className="brand-name">Computational Physiology Group</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link className="nav-cta" href="/join">Join us</Link>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/join">Join us</Link>
        </nav>
      </details>
    </header>
  );
}
