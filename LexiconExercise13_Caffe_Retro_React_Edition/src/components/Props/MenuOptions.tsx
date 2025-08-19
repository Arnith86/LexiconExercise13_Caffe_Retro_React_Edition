import type { ReactElement } from "react";
import type { IMenuOptionProp } from "../types/IMenuOptionProp";

interface IMenuOptionsProps {
  menuOptions: IMenuOptionProp[];
}

/**
 * MenuOptions component
 *
 * Renders a list of menu items, each showing a left and right text.
 *
 * Props:
 *  - menuOptions: IMenuOptionProp[] — array of menu items which have a leftside and rightside
 */

export const MenuOptions = ({
  menuOptions = [],
}: IMenuOptionsProps): ReactElement => {
  return (
    <article className="menu">
      {menuOptions.map((option, index) => (
        <div key={index} className="menu-option">
          <p>{option.leftSide}</p>
          <p>{option.rightSide}</p>
        </div>
      ))}
    </article>
  );
};
