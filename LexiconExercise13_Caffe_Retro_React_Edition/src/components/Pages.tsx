import type { ReactElement } from "react";
import { Page } from "./Props/Page";
import {
  menuHot,
  menuJuicy,
  menuCozy,
  suggestionHot,
  suggestionJuicy,
  suggestionCozy,
} from "../assets/data";

/**
 * Pages component
 *
 * Renders all sections of the Caffe Retro menu:
 *  - Hot drinks
 *  - Juicy drinks
 *  - Cozy (info section)
 *
 * Each section is represented by a <Page> component,
 * receiving its own suggestion text and menu data.
 *
 * This component acts as the central "router" for
 * the different menu categories on the site.
 */

export function Pages(): ReactElement {
  return (
    <>
      <Page
        id={"hot"}
        className="page"
        suggestions={suggestionHot}
        menuData={menuHot}
      />
      <Page
        id={"juicy"}
        className="page"
        suggestions={suggestionJuicy}
        menuData={menuJuicy}
      />
      <Page
        id={"cozy"}
        className="page"
        suggestions={suggestionCozy}
        menuData={menuCozy}
      />
    </>
  );
}
