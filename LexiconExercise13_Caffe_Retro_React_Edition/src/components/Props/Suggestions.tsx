import type { ReactElement } from "react";
import type { ISuggestionProp } from "../types/ISuggestionProp";

export const Suggestions = ({
  mobileFriendly,
  desktopFriendly,
}: ISuggestionProp): ReactElement => {
  return (
    <article className="suggestion">
      <p className="mobile-line">{mobileFriendly}</p>
      <p className="desktop-line">{desktopFriendly}</p>
    </article>
  );
};
