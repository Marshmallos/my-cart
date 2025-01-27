import { useState } from "react";
import { Cart } from "../assets/Cart.types";

export default function NavBar({ cart }: { cart?: Array<Cart> }) {
  const [showCart, setShowCart] = useState(false);

  function toggleShow() {
    setShowCart((current) => !current);
  }
  return (
    <div className="grid grid-cols-3 place-items-center shadow-md">
      <div className="place-self-auto">logo</div>
      <h1>MyCart</h1>
      <div onClick={toggleShow}>Shopping cart</div>
      {showCart && (
        <div>
          <div className="absolute border-solid border-2 rounded-lg shadow-md bg-slate-300 inset-0 flex items-center justify-center w-60 h-60">
            {cart === undefined ? (
              <div>Have not added anything</div>
            ) : (
              cart.map((item) => {
                return (
                  <div key={item.id} className="flex-col">
                    Name: {item.name}
                    Price: {parseInt(item.price) * item.quantity}
                    Qty: {item.quantity}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
