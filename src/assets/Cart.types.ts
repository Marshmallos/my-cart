import { Item } from "./card.types";

export type Cart = Item & {
  quantity: number;
};
