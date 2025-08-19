import type { IMenuOptionProp } from "../components/types/IMenuOptionProp";
import type { ISuggestionProp } from "../components/types/ISuggestionProp";

export const suggestionHot: ISuggestionProp = {
  mobileFriendly: "Hot fresh ground black coffee or a cup of exquisite tea?",
  desktopFriendly: "We give you that perfect cup every time.",
};

export const suggestionJuicy: ISuggestionProp = {
  mobileFriendly: "Ripe fruit - freshly squeezed.",
  desktopFriendly:
    "It's as simple as that. Chunky or smooth - it's your choice.",
};

export const suggestionCozy: ISuggestionProp = {
  mobileFriendly: "Hang around. Enjoy the settings.",
  desktopFriendly: "Use our fast WiFi. Borrow a newspaper or a novel.",
};

export const menuHot: IMenuOptionProp[] = [
  { leftSide: "Mocha Latte", rightSide: "€ 7.50" },
  { leftSide: "Caffe Formaggio", rightSide: "€ 5.00" },
  { leftSide: "Espresso", rightSide: "€ 3.50" },
  {
    leftSide: "Chai Verde Latte",
    rightSide: "€ 5.50",
  },
];

export const menuJuicy: IMenuOptionProp[] = [
  { leftSide: "Branched Apricots", rightSide: "€ 4.20" },
  { leftSide: "Deep Rasberries", rightSide: "€ 3.50" },
  { leftSide: "Smooth Oranges", rightSide: "€ 6.50" },
];

export const menuCozy: IMenuOptionProp[] = [
  { leftSide: "Mon - Sun", rightSide: "8am – 11pm" },
  { leftSide: "Caffe Retro", rightSide: "Canto VI" },
  { leftSide: "0123-45 67 89", rightSide: "caffe@lorem.pge" },
];
