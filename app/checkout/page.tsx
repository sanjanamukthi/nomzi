import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-orange-500">
              Checkout
            </h1>

            <p className="mt-2 text-gray-600">
              Review your order before placing it.
            </p>
          </div>

          <Link
            href="/cart"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Back to Cart
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Order Summary
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Paneer Butter Masala ×1</span>
              <span>₹249</span>
            </div>

            <div className="flex justify-between">
              <span>Veg Biryani ×2</span>
              <span>₹398</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold text-orange-600">
              <span>Total</span>
              <span>₹647</span>
            </div>
          </div>

          <div className="mt-8">

            <label className="mb-2 block font-semibold text-gray-900">
              Delivery Address
            </label>

            <textarea
              rows={4}
              placeholder="Enter your delivery address..."
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-orange-500"
            />

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-semibold text-gray-900">
              Payment Method
            </label>

            <select className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-orange-500">
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Credit / Debit Card</option>
            </select>

          </div>

          <Link
            href="/order-success"
            className="mt-8 block rounded-xl bg-orange-500 py-4 text-center text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            Place Order
          </Link>

        </div>

      </div>
    </div>
  );
}