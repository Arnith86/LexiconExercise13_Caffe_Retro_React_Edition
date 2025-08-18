import { Suspense, type ReactElement, type ReactNode } from "react";
import type { ISuggestionProp } from "../types/ISuggestionProp";
import { Suggestions } from "./Suggestions";

interface IPageProp {
  // children: ReactNode;
  id: string;
  className: string;
  suggestions: ISuggestionProp;
  //menuItems: Imenu
}

export const Page = ({
  id,
  className,
  suggestions,
}: IPageProp): ReactElement => {
  return (
    <section id={id} className={className}>
      <h1>{id}</h1>
      <Suggestions
        mobileFriendly={suggestions.mobileFriendly}
        desktopFriendly={suggestions.desktopFriendly}
      />
    </section>
  );
};
