"use client";

import Link from "next/link";

export default function OffersPage() {
  const offers = [
    {
      id: 1,
      title: "20% OFF",
      description: "Get 20% off on all vegetarian meals.",
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Enjoy free delivery on orders above ₹499.",
    },
    {
      id: 3,
      title: "Buy 1 Get 1",
      description: "Buy one pizza and get another absolutely free.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-orange-500">
              Offers
            </h1>

            <p className="mt-2 text-gray-600">
              Discover today's best deals.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Dashboard
          </Link>
        </div>

        <div className="grid gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-orange-500">
                {offer.title}
              </h2>

              <p className="mt-3 text-gray-700">
                {offer.description}
              </p>

              <button className="mt-6 rounded-xl bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600">
                Claim Offer
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}