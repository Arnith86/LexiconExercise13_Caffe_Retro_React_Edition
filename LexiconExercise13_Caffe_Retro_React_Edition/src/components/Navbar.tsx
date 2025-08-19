import type { ReactElement } from "react";

/**
 * NavBar component
 *
 * Provides in-page navigation links for the main sections of the site:
 *  - Hot
 *  - Juicy
 *  - Cozy
 *
 * Each link anchors to a corresponding `<section>` in the page
 */

export function NavBar(): ReactElement {
  return (
    <nav className="nav-bar">
      <a href="#hot">Hot</a>
      <a href="#juicy">Juicy</a>
      <a href="#cozy">Cozy</a>
    </nav>
  );
}
