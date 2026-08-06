import Image from "next/image";
import Link from "next/link";
import { dishes } from "@/app/data/dishes";
import AddToCartButton from "@/app/components/AddToCartButton";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const restaurant = dishes.find(
    (item) => item.id === Number(id)
  );
  
  if (!restaurant) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
        Restaurant not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8F2] p-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-8 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
        >
          ← Back
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-[420px] w-full">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-10">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-gray-900">
                {restaurant.name}
              </h1>

              <span className="rounded-lg bg-green-600 px-3 py-2 font-bold text-white">
                ⭐ {restaurant.match}%
              </span>
            </div>

            <p className="mt-3 text-lg text-gray-700">
              Mood: {restaurant.mood}
            </p>

            <p className="mt-6 leading-8 text-gray-800">
              {restaurant.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl bg-orange-50 p-6">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold text-orange-600">
                  {restaurant.price}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Comfort Score</p>
                <p className="text-2xl font-bold text-green-600">
                  {restaurant.comfortScore}/10
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                🕒 {restaurant.time}
              </span>

              <AddToCartButton
                dishName={restaurant.name}
                price={restaurant.price}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}