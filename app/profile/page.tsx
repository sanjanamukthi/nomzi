"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-orange-500">
              Profile
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your account information.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Dashboard
          </Link>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <div className="mb-6">
            <label className="mb-2 block font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              value="Sanjana Mukthi"
              readOnly
              className="w-full rounded-xl border border-gray-300 p-4 text-gray-900"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              value="sanjana@example.com"
              readOnly
              className="w-full rounded-xl border border-gray-300 p-4 text-gray-900"
            />
          </div>

          <div className="mb-8">
            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              value="********"
              readOnly
              className="w-full rounded-xl border border-gray-300 p-4 text-gray-900"
            />
          </div>

          <div className="flex gap-4">
            <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Edit Profile
            </button>

            <button className="rounded-xl border border-red-500 px-6 py-3 font-semibold text-red-500 transition hover:bg-red-500 hover:text-white">
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}