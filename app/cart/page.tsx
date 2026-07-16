"use client";

import Link from "next/link";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      quantity: 1,
      price: 249,
    },
    {
      id: 2,
      name: "Veg Biryani",
      quantity: 2,
      price: 199,
    },
  ];

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

        <div className="space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-gray-700">
                    Quantity: {item.quantity}
                  </p>

                  <p className="text-gray-700">
                    ₹{item.price}
                  </p>
                </div>

                <button className="rounded-xl border border-red-500 px-5 py-2 font-medium text-red-500 transition hover:bg-red-500 hover:text-white">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Total
            </h2>

            <span className="text-3xl font-bold text-orange-500">
              ₹{total}
            </span>
          </div>

          <button className="mt-6 w-full rounded-xl bg-orange-500 p-4 font-semibold text-white transition hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}