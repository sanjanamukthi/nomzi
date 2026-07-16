"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful!");

        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF8F2] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-xl rounded-3xl bg-white p-12 shadow-2xl"
      >
        <Link
  href="/"
  className="mb-8 inline-block text-sm font-medium text-orange-500 hover:underline"
>
  ← Back to Home
</Link>
        <div className="mb-10 text-center">
  <h1 className="text-5xl font-extrabold tracking-tight text-orange-500">
    Nomzi.
  </h1>

  <h2 className="mt-5 text-3xl font-bold text-gray-900">
    Welcome back
  </h2>

  <p className="mt-3 text-gray-500">
    Sign in to discover your next favorite meal.
  </p>
</div>

        <input
          type="email"
          placeholder="Email"
          className="mb-5 w-full rounded-xl border border-gray-300 p-4 text-gray-900 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-7 w-full rounded-xl border border-gray-300 p-4 text-gray-900 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-orange-500 p-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {message && (
          <p className="mt-4 text-center font-medium">
            {message}
          </p>
        )}
        <p className="mt-8 text-center text-gray-600">
  Don't have an account?{" "}
  <Link
    href="/register"
    className="font-semibold text-orange-500 hover:underline"
  >
    Register
  </Link>
</p>
      </form>
    </div>
  );
}