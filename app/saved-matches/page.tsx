"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SavedMatch {
  id: number;
  dishName: string;
  mood: string;
  situation: string;
  note?: string;
}

export default function SavedMatchesPage() {
  const [matches, setMatches] = useState<SavedMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

const [editDishName, setEditDishName] = useState("");
const [editMood, setEditMood] = useState("");
const [editSituation, setEditSituation] = useState("");
const [editNote, setEditNote] = useState("");

  async function deleteMatch(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this saved match?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/saved-matches/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMatches((previousMatches) =>
          previousMatches.filter((match) => match.id !== id)
        );
      } else {
        alert("Failed to delete saved match.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }
async function updateMatch(id: number) {
  try {
    const response = await fetch(`/api/saved-matches/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dishName: editDishName,
        mood: editMood,
        situation: editSituation,
        note: editNote,
      }),
    });

    if (response.ok) {
      setEditingId(null);
      fetchMatches();
    } else {
      alert("Failed to update.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
}
  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    try {
      const response = await fetch("/api/saved-matches");
      const data = await response.json();
      setMatches(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-orange-500">
              Saved Matches
            </h1>

            <p className="mt-2 text-gray-600">
              Your saved meal recommendations.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Dashboard
          </Link>
        </div>

        {/* Content */}
        <div className="mb-6">
  <input
    type="text"
    placeholder="Search saved meals..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
</div>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : matches.length === 0 ? (
          <p className="text-gray-500">No saved matches yet.</p>
        ) : (
          <div className="grid gap-6">
            {matches.filter((match) =>
  match.dishName.toLowerCase().includes(searchTerm.toLowerCase())
).length === 0 ? (
  <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
    <p className="text-lg font-medium text-gray-600">
      No matching meals found.
    </p>
  </div>
) : (
  matches
    .filter((match) =>
      match.dishName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((match) => (
              <div
                key={match.id}
                className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl"
              >
                {editingId === match.id ? (
  <div className="space-y-4">
    <input
      value={editDishName}
      onChange={(e) => setEditDishName(e.target.value)}
      className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
      placeholder="Dish Name"
    />

    <input
      value={editMood}
      onChange={(e) => setEditMood(e.target.value)}
      className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
      placeholder="Mood"
    />

    <input
      value={editSituation}
      onChange={(e) => setEditSituation(e.target.value)}
      className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
      placeholder="Situation"
    />

    <textarea
      value={editNote}
      onChange={(e) => setEditNote(e.target.value)}
      className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
      placeholder="Note"
    />
  </div>
) : (
  <>
    <h2 className="text-2xl font-bold text-gray-900">
      {match.dishName}
    </h2>

    <p className="mt-4 text-gray-700">
      <span className="font-semibold text-gray-900"> Mood:</span>{" "}
      {match.mood}
    </p>

    <p className="mt-2 text-gray-700">
      <span className="font-semibold text-gray-900"> Situation:</span>{" "}
      {match.situation}
    </p>

    {match.note && (
      <p className="mt-2 text-gray-700">
        <span className="font-semibold text-gray-900"> Note:</span>{" "}
        {match.note}
      </p>
    )}
  </>
)}

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
  {editingId === match.id ? (
    <>
      <button
        onClick={() => updateMatch(match.id)}
        className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700"
      >
         Save
      </button>

      <button
        onClick={() => setEditingId(null)}
        className="rounded-lg bg-gray-400 px-4 py-2 font-medium text-white transition hover:bg-gray-500"
      >
        Cancel
      </button>
    </>
  ) : (
    <>
      <button
  onClick={() => {
    setEditingId(match.id);
    setEditDishName(match.dishName);
    setEditMood(match.mood);
    setEditSituation(match.situation);
    setEditNote(match.note ?? "");
  }}
  className="rounded-xl border border-orange-500 px-5 py-2 font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white"
>
   Edit
</button>

      <button
  onClick={() => deleteMatch(match.id)}
  className="rounded-xl border border-red-500 px-5 py-2 font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
>
   Delete
</button>
    </>
  )}
</div>
              </div>
            ))
)}
          </div>
        )}
      </div>
    </div>
  );
}