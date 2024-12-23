import { Item } from "../assets/card.types.ts";
import { useState } from "react";

export default function Card({
  data,
  addToCart,
}: {
  data: Item;
  addToCart: (item: Item, qty: number) => void;
}) {
  const [quantity, setQuantity] = useState(0);

  function add() {
    setQuantity((current) => current + 1);
  }

  function deduct() {
    setQuantity((current) => (current !== 0 ? current - 1 : current));
  }

  return (
    <div className="border-solid border-2 rounded-xl">
      <div>
        <img src={data.image} className="w-28 h-28 rounded-xl"></img>
      </div>
      <div>
        <h2>{data.name}</h2>
        <h2>Price: ${data.price}</h2>
        <h2>Size: {data.size}gm</h2>
        <h2>
          Quantiy: <button onClick={deduct}>-</button>
          {quantity}
          <button onClick={add}>+</button>
        </h2>
        <button onClick={() => addToCart(data, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
}
