import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF8F2] p-8">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl text-green-600">✓</span>
        </div>

        <h1 className="text-4xl font-extrabold text-green-600">
          Order Placed!
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Thank you for ordering with Nomzi.
        </p>

        <p className="mt-2 text-gray-500">
          Your food is being prepared and will be delivered soon.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/dashboard"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Dashboard
          </Link>

          <Link
            href="/cart"
            className="rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            Back to Cart
          </Link>

        </div>

      </div>
    </div>
  );
}