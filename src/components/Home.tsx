import { useQuery } from "@tanstack/react-query";
import Card from "./Card.tsx";
import { Item } from "../assets/card.types.ts";
import { useState } from "react";
import { Cart } from "../assets/Cart.types.ts";
import NavBar from "./navBar.tsx";
function useData() {
  return [
    {
      id: 1,
      image:
        "https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/1:1/w_2560%2Cc_limit/chocolate-chip-cookie.jpg",
      name: "Cookie",
      price: "1.50",
      size: 500,
    },
    {
      id: 2,
      image:
        "https://www.rainbownourishments.com/wp-content/uploads/2024/02/heart-shaped-cake-decorating-tutorial-vegan-raspberry-lemon-1.jpg",
      name: "Cake",
      price: "2.50",
      size: 1000,
    },
  ];
}

export default function Home() {
  const { data, status } = useQuery({ queryKey: ["data"], queryFn: useData });
  const [cart, setCart] = useState<Array<Cart>>([]);

  function addToCart(itemToAdd: Item, quantity: number) {
    const exist = cart.find((item) => item.id === itemToAdd.id);
    if (exist === undefined) {
      setCart((current) => [...current, { ...itemToAdd, quantity }]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === itemToAdd.id) {
          item.quantity = quantity;
        }
        return item;
      });
      setCart(newCart);
    }
  }

  function checkout() {
    console.log("Route to payment...");
    console.log(cart);
  }

  return (
    <>
      <NavBar cart={cart} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl underline pb-4">Catalog</h1>
        <div className="grid grid-cols-2 gap-4">
          {status === "success" &&
            data.map((item) => (
              <Card data={item} addToCart={addToCart} key={item.id} />
            ))}
        </div>
        <button onClick={checkout}>Checkout</button>
      </div>
    </>
  );
}
