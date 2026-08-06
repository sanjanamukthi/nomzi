"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface CartItem {
  id: number;
  dishName: string;
  quantity: number;
  price: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  async function fetchCartItems() {
  try {
    const response = await fetch("/api/cart");
    const data = await response.json();

    console.log("Fetched cart:", data);

    setCartItems(data);
  } catch (error) {
    console.error(error);
  }
}

  async function removeCartItem(id: number) {
    try {
      const response = await fetch(`/api/cart/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchCartItems();
      } else {
        alert("Failed to remove item.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  async function updateQuantity(id: number, quantity: number) {
  if (quantity < 1) {
    removeCartItem(id);
    return;
  }

  try {
    const response = await fetch(`/api/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity,
      }),
    });

    if (response.ok) {
      fetchCartItems();
    } else {
      alert("Failed to update quantity.");
    }
  } catch (error) {
    console.error(error);
  }
}

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-orange-500">
              Cart
            </h1>

            <p className="mt-2 text-gray-600">
              Review your selected meals.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Dashboard
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <p className="text-lg font-medium text-gray-600">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-6 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {item.dishName}
                    </h2>

                    <div className="mt-4 flex items-center gap-3">

  <button
    onClick={() => updateQuantity(item.id, item.quantity - 1)}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-600 hover:bg-orange-200"
  >
    −
  </button>

  <span className="w-8 text-center text-lg font-bold text-gray-900">
  {item.quantity}
</span>

  <button
    onClick={() => updateQuantity(item.id, item.quantity + 1)}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white hover:bg-orange-600"
  >
    +
  </button>

</div>

                    <p className="text-gray-700">
                      ₹{item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="rounded-xl border border-red-500 px-5 py-2 font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Total
            </h2>

            <span className="text-3xl font-bold text-orange-500">
              ₹{total}
            </span>
          </div>

          <Link
            href="/checkout"
            className="block w-full rounded-xl bg-orange-500 py-4 text-center text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}