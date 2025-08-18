import type { ReactElement } from "react";
import { Page } from "./Props/Page";
import { menuHot, suggestionHot } from "../assets/data";

export function Pages(): ReactElement {
  return <Page id={"hot"} className="page" suggestions={suggestionHot}></Page>;
}
