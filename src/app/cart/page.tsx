"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some games to your cart to see them here.
        </p>
        <Link href="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <header className="w-full">
        <h1 className="text-4xl font-bold w-full mb-16 mt-12 ">Your Cart</h1>
        <p>3 items</p>
      </header>

      <section className="mx-auto max-w-7xl flex flex-wrap">
        <ul className="w-full lg:w-3/5">
          {cart.items.map((item) => (
            <li className="flex relative mr-8 py-6 border-b border-darkgray" key={item.id}>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={256}
                height={156}
                className="mr-4"
              />

              <div className="text-lg">
                <p className="mb-2 font-bold uppercase text-darkgray">{item.genre}</p>
                <h3 className="mb-2 font-bold">{item.name}</h3>
                <span className="">${item.price}</span>
                {item.isNew}
              </div>

              <Image
                width="24"
                height="24"
                src="/x.png"
                alt="remove item icon"
                className="absolute right-3 top-3"
                onClick={() => removeFromCart(item.id)}
              />
            </li>
          ))}
        </ul>

        <aside className="w-full lg:w-2/5 border border-darkgray p-3">
          <div className="w-full">
            <h5>Order Summary</h5>
            <span>3 items</span>
          </div>

          <ul className="w-full">
            <li className="flex justify-between">
              <span>Product name</span>
              <span>$00.00</span>
            </li>
          </ul>

          <div className="flex justify-between">
            <h6>Order Total</h6>
            <b>$ 00.00</b>
          </div>
        </aside>
      </section>
    </>
  );
}
