import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-orange-500">
              Nomzi.
            </h1>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Welcome back 
            </h2>

            <p className="mt-2 text-gray-500">
              Ready to discover something delicious today?
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Home
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          <Link
  href="/saved-matches"
  className="block rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
  <h3 className="text-2xl font-bold text-gray-900">
     Saved Matches
  </h3>

  <p className="mt-3 text-gray-500">
    View all your saved meal recommendations.
  </p>
</Link>
          <Link
  href="/cart"
  className="block rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  <h3 className="text-2xl font-bold text-gray-900">
    Cart
  </h3>

  <p className="mt-3 text-gray-500">
    Review meals you've added to your cart.
  </p>
</Link>
          <Link
  href="/offers"
  className="block rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  <h3 className="text-2xl font-bold text-gray-900">
    Offers
  </h3>

  <p className="mt-3 text-gray-500">
    Explore today's exclusive deals.
  </p>
</Link>

          <Link
  href="/profile"
  className="block rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  <h3 className="text-2xl font-bold text-gray-900">
    Profile
  </h3>

  <p className="mt-3 text-gray-500">
    Manage your account information.
  </p>
</Link>

        </div>

      </div>
    </div>
  );
}