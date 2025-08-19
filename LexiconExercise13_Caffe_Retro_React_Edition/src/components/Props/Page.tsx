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

export const Page = ({
  id,
  className,
  suggestions,
  menuData,
}: IPageProp): ReactElement => {
  console.log("suggestions: ", suggestions);
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
