import type { ReactElement } from "react";
import type { IMenuOptionProp } from "../types/IMenuOptionProp";

interface IMenuOptionsProps {
  menuOptions: IMenuOptionProp[];
}

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
