import type { ReactElement } from "react";

export function NavBar(): ReactElement {
  return (
    <nav className="nav-bar">
      <a href="#hot">Hot</a>
      <a href="#juicy">Juicy</a>
      <a href="#cozy">Cozy</a>
    </nav>
  );
}
