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
