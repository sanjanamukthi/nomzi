"use client";

import { useState } from "react";

interface AddToCartButtonProps {
  dishName: string;
  price: string;
}

export default function AddToCartButton({
  dishName,
  price,
}: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  async function addToCart() {
    setLoading(true);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dishName,
          quantity: 1,
          price: Number(price.replace("₹", "")),
          userId: 1,
        }),
      });

      if (response.ok) {
        alert("✅ Added to cart!");
      } else {
        alert("❌ Failed to add to cart.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <button
      onClick={addToCart}
      disabled={loading}
      className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}