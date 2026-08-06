"use client";

import { useState } from "react";
import Link from "next/link";

export default function RestaurantsPage() {
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);
  const restaurants = [
  {
    id: 1,
  name: "Green Bowl Café",
  category: "Healthy",
    cuisine: "Healthy • Salads • Smoothies",
    rating: "4.9",
    time: "20–25 min",
    image: "/images/avocado-toast.jpg",
  },
  {
    id: 2,
    name: "Paneer Palace",
    category: "North Indian",
    cuisine: "North Indian • Veg",
    rating: "4.8",
    time: "25–30 min",
    image: "/images/paneer-butter-masala.jpg",
  },
  {
    id: 3,
    name: "Pasta Point",
    category: "Italian",
    cuisine: "Italian • Pasta",
    rating: "4.7",
    time: "15–20 min",
    image: "/images/creamy-paneer-pasta.jpg",
  },
];

const filteredRestaurants = restaurants.filter((restaurant) => {
  const matchesSearch = restaurant.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCuisine === "All" ||
    restaurant.category === selectedCuisine;

  return matchesSearch && matchesCategory;
});

const toggleFavorite = (id: number) => {
  if (favorites.includes(id)) {
    setFavorites(favorites.filter((fav) => fav !== id));
  } else {
    setFavorites([...favorites, id]);
  }
};
  return (
    <main className="min-h-screen bg-[#FFF9F2]">

      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <div>
            <h1 className="text-4xl font-extrabold text-[#2D2926]">
              Restaurants
            </h1>

            <p className="mt-2 text-gray-500">
              Discover delicious places near you.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            ← Back to Home
          </Link>

        </div>
      </section>

<section className="mx-auto mt-10 max-w-7xl px-8">

  <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
    DISCOVER
  </p>

  <h2 className="mt-2 text-4xl font-extrabold text-[#2D2926]">
    Find your next favourite restaurant
  </h2>

  <p className="mt-3 max-w-2xl text-lg text-gray-500">
    Browse handpicked vegetarian restaurants, discover new flavours,
    and order your favourite meals with Nomzi.
  </p>

</section>

      {/* Search */}
      <section className="mx-auto mt-10 max-w-7xl px-8">

        <div className="relative">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>

  <input
    type="text"
    placeholder="Search restaurants..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-2xl border border-orange-100 bg-white py-4 pl-14 pr-6 text-lg shadow-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
  />

</div>

      </section>
<section className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-3 px-8">

  {["All", "Healthy", "Italian", "North Indian"].map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCuisine(category)}
      className={`rounded-full px-5 py-2 font-semibold transition ${
        selectedCuisine === category
          ? "bg-orange-500 text-white"
          : "bg-white text-[#2D2926] shadow hover:bg-orange-100"
      }`}
    >
      {category}
    </button>
  ))}

</section>
      <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">

  {filteredRestaurants.map((restaurant) => (

    <article
  key={restaurant.id}
  className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(255,107,0,0.15)]"
>

      <div className="relative h-56">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
          ★ {restaurant.rating}
        </span>

<button
  onClick={() => toggleFavorite(restaurant.id)}
  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
>
  {favorites.includes(restaurant.id) ? "❤️" : "🤍"}
</button>
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-[#2D2926]">
          {restaurant.name}
        </h2>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
  🟢 PURE VEG
</div>

        <p className="mt-2 text-gray-500">
          {restaurant.cuisine}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="font-semibold text-gray-600">
            🕒 {restaurant.time}
          </span>

          <Link
  href={`/restaurant/${restaurant.id}`}
  className="rounded-full bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
>
  View Menu
</Link>

        </div>

      </div>

    </article>

  ))}

</section>

    </main>
  );
}