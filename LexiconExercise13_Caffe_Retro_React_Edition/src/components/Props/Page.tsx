import { Suspense, type ReactElement, type ReactNode } from "react";
import type { ISuggestionProp } from "../types/ISuggestionProp";
import { Suggestions } from "./Suggestions";
import type { IMenuOptionProp } from "../types/IMenuOptionProp";
import { MenuOptions } from "./MenuOptions";

interface IPageProp {
  id: string;
  className: string;
  suggestions: ISuggestionProp;
  menuData: IMenuOptionProp[];
}

/**
 * Page component
 *
 * Represents a single content section (e.g., Hot drinks, Juices, or Cozy info).
 * Renders:
 *  - A heading (`id` as the title)
 *  - Suggestions text (contextual tagline for the section)
 *  - Menu options (list of items with name/price or info)
 *
 * This component is used by `<Pages />` to compose the full app layout.
 */

export const Page = ({
  id,
  className,
  suggestions,
  menuData,
}: IPageProp): ReactElement => {
  return (
    <section id={id} className={className}>
      <h1>{id}</h1>
      <Suggestions
        mobileFriendly={suggestions.mobileFriendly}
        desktopFriendly={suggestions.desktopFriendly}
      />
      <MenuOptions menuOptions={menuData} />
    </section>
  );
};
