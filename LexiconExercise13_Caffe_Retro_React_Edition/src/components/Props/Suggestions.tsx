import type { ReactElement } from "react";
import type { ISuggestionProp } from "../types/ISuggestionProp";

/**
 * Suggestions component
 *
 * Displays text suggestions for mobile and desktop views.
 *
 * Props:
 *  - mobileFriendly: string — text meant for mobile users
 *  - desktopFriendly: string — text displayed when the screens is of desktop size.
 *
 * This component separates mobile and desktop suggestions into
 * distinct paragraphs for responsive styling.
 */

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
