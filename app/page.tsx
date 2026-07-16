"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const [selectedMood, setSelectedMood] = useState("Comfort Me");
  const [selectedSituation, setSelectedSituation] = useState("Solo Night");
  const [selectedPriority, setSelectedPriority] = useState("Best Overall");
  const [showPerfectMatch, setShowPerfectMatch] = useState(false);
  const [surpriseIndex, setSurpriseIndex] = useState<number | null>(null);
  const [matchFeedback, setMatchFeedback] = useState<"liked" | "disliked" | null>(null);
  const [showDishDetails, setShowDishDetails] = useState(false);
  const matchMessages: Record<string, Record<string, string>> = {
  "Comfort Me": {
    "Solo Night":
      "Tonight calls for something warm, familiar and deeply comforting—picked just for you.",
    "Study Fuel":
      "Cozy, satisfying food to keep you going through every chapter, deadline and late-night thought.",
    "Date Night":
      "Warm, comforting flavours to make your time together feel even more special.",
    "Friends Over":
      "Familiar favourites and comforting crowd-pleasers made for sharing with your favourite people.",
    "Quick Break":
      "A quick dose of comfort—warm, satisfying and ready to make your day a little better.",
  },

  "Spice It Up": {
    "Solo Night":
      "Turn up the heat with bold, fiery flavours picked for your perfect solo feast.",
    "Study Fuel":
      "A spicy kick to wake up your senses and power you through your next study session.",
    "Date Night":
      "Bold flavours, a little heat and just enough drama for an unforgettable date night.",
    "Friends Over":
      "Bring the energy with fiery crowd-pleasers made for passing around and sharing.",
    "Quick Break":
      "Fast, fiery and full of flavour—the perfect kick before you get back to your day.",
  },

  "Healthy & Light": {
    "Solo Night":
      "Fresh, nourishing and beautifully balanced—because a quiet night can still feel special.",
    "Study Fuel":
      "Light, wholesome food that keeps you focused, energised and ready to keep going.",
    "Date Night":
      "Fresh and elegant choices for a date night that feels special without feeling heavy.",
    "Friends Over":
      "Colourful, wholesome plates everyone can share, enjoy and feel good about.",
    "Quick Break":
      "Fresh, balanced and quick—something satisfying that won't slow down your day.",
  },

  "Sweet Escape": {
    "Solo Night":
      "A little indulgence, just for you—because some evenings deserve something wonderfully sweet.",
    "Study Fuel":
      "A sweet little reward to keep you going through notes, deadlines and one more chapter.",
    "Date Night":
      "A little indulgence for a moment worth making extra special.",
    "Friends Over":
      "Sweet treats, shared smiles and desserts made for passing around the table.",
    "Quick Break":
      "A quick moment of sweetness before you head back into the rest of your day.",
  },
};
  const moods = [
  {
    name: "Comfort Me",
    emoji: "🫶",
    subtitle: "Warm, familiar & satisfying",
  },
  {
    name: "Spice It Up",
    emoji: "🌶️",
    subtitle: "Bold flavours with a kick",
  },
  {
    name: "Healthy & Light",
    emoji: "🥗",
    subtitle: "Fresh, nourishing & balanced",
  },
  {
    name: "Sweet Escape",
    emoji: "🍰",
    subtitle: "A little happiness on a plate",
  },
];

const situations = [
  {
    name: "Solo Night",
    subtitle: "Something comforting, just for you",
    image: "/images/solo-night.jpg",
  },
  {
    name: "Study Fuel",
    subtitle: "Stay focused without slowing down",
    image: "/images/study-fuel.jpg",
  },
  {
    name: "Date Night",
    subtitle: "Make the moment feel a little special",
    image: "/images/date-night.jpg",
  },
  {
    name: "Friends Over",
    subtitle: "Crowd-pleasers made for sharing",
    image: "/images/friends-over.jpg",
  },
  {
    name: "Quick Break",
    subtitle: "Fast, satisfying and back to your day",
    image: "/images/quick-break.jpg",
  },
];const moodRecommendations = {
  "Comfort Me": [
    {
      name: "Creamy Paneer Pasta",
      description: "Rich, creamy and deeply comforting.",
      time: "25–30 min",
      price: "₹289",
      match: 97,
      comfortScore: 10,
      image: "/images/creamy-paneer-pasta.jpg",
    },
    {
      name: "Paneer Butter Masala",
      description: "Warm, familiar flavours made for cozy days.",
      time: "30–35 min",
      price: "₹319",
      match: 95,
      comfortScore: 9,
      image: "/images/paneer-butter-masala.jpg",
    },
    {
      name: "Cheesy Baked Momos",
      description: "Golden, cheesy and impossible not to love.",
      time: "20–25 min",
      price: "₹229",
      match: 92,
      comfortScore: 9,
      image: "/images/cheesy-baked-momos.jpg",
    },
  ],

  "Spice It Up": [
    {
      name: "Fiery Chilli Paneer",
      description: "Bold, smoky and packed with serious heat.",
      time: "20–25 min",
      price: "₹269",
      match: 98,
      comfortScore: 7,
      image: "/images/fiery-chilli-paneer.jpg",
    },
    {
      name: "Schezwan Noodles",
      description: "Wok-tossed noodles with a fiery kick.",
      time: "20–25 min",
      price: "₹239",
      match: 96,
      comfortScore: 8,
      image: "/images/schezwan-noodles.jpg",
    },
    {
      name: "Spicy Tandoori Momos",
      description: "Smoky, juicy and unapologetically spicy.",
      time: "25–30 min",
      price: "₹249",
      match: 94,
      comfortScore: 7,
      image: "/images/spicy-tandoori-momos.jpg",
    },
  ],

  "Healthy & Light": [
    {
      name: "Paneer Power Bowl",
      description: "Protein-packed, colourful and satisfying.",
      time: "20–25 min",
      price: "₹299",
      match: 97,
      comfortScore: 7,
      image: "/images/paneer-power-bowl.jpg",
    },
    {
      name: "Avocado Toast",
      description: "Fresh, creamy and perfectly balanced.",
      time: "15–20 min",
      price: "₹259",
      match: 94,
      comfortScore: 6,
      image: "/images/avocado-toast.jpg",
    },
    {
      name: "Mediterranean Salad",
      description: "Crisp vegetables and bright, fresh flavours.",
      time: "15–20 min",
      price: "₹279",
      match: 92,
      comfortScore: 5,
      image: "/images/mediterranean-salad.jpg",
    },
  ],

  "Sweet Escape": [
    {
      name: "Chocolate Lava Cake",
      description: "Warm outside, molten chocolate inside.",
      time: "15–20 min",
      price: "₹199",
      match: 99,
      comfortScore: 9,
      image: "/images/chocolate-lava-cake.jpg",
    },
    {
      name: "Classic Tiramisu",
      description: "Creamy, delicate and beautifully indulgent.",
      time: "20–25 min",
      price: "₹249",
      match: 96,
      comfortScore: 8,
      image: "/images/classic-tiramisu.jpg",
    },
    {
      name: "Belgian Waffle",
      description: "Crisp, golden and finished with chocolate.",
      time: "15–20 min",
      price: "₹219",
      match: 94,
      comfortScore: 8,
      image: "/images/belgian-waffle.jpg",
    },
  ],
};

const priorityMessages: Record<string, string> = {
  "Best Overall":
    "Nomzi is balancing your mood and situation to find the strongest overall match for this moment.",

  "Quickest":
    "Short on time? Nomzi is finding the fastest option that still fits your mood and moment.",

  "Budget-friendly":
    "Great food doesn't need to stretch your budget—Nomzi is finding the most affordable match for you.",

  "Most comforting":
    "You chose comfort above all else, so Nomzi is finding the coziest, most satisfying option for this moment.",

  "Something new":
    "Ready to break from the usual? Nomzi is choosing something different that still fits the mood you're in.",
};

const currentRecommendations =
  moodRecommendations[selectedMood as keyof typeof moodRecommendations];
  const situationDishIndex: Record<string, number> = {
  "Solo Night": 0,
  "Study Fuel": 1,
  "Date Night": 2,
  "Friends Over": 1,
  "Quick Break": 2,
};

const baseMatchIndex = situationDishIndex[selectedSituation];

const cheapestDishIndex = currentRecommendations.reduce(
  (cheapestIndex, dish, currentIndex, dishes) => {
    const currentPrice = Number(dish.price.replace(/[^\d]/g, ""));
    const cheapestPrice = Number(
      dishes[cheapestIndex].price.replace(/[^\d]/g, "")
    );
        return currentPrice < cheapestPrice ? currentIndex : cheapestIndex;
  },
  0
);
    const quickestDishIndex = currentRecommendations.reduce(
  (quickestIndex, dish, currentIndex, dishes) => {
    const getMinimumTime = (time: string) =>
      Number(time.match(/\d+/)?.[0] ?? Infinity);

    const currentTime = getMinimumTime(dish.time);
    const quickestTime = getMinimumTime(dishes[quickestIndex].time);

    return currentTime < quickestTime ? currentIndex : quickestIndex;
  },
  0
);


const mostComfortingDishIndex = currentRecommendations.reduce(
  (mostComfortingIndex, dish, currentIndex, dishes) => {
    const currentComfortScore = dish.comfortScore;
    const highestComfortScore = dishes[mostComfortingIndex].comfortScore;

    return currentComfortScore > highestComfortScore
      ? currentIndex
      : mostComfortingIndex;
  },
  0
);
const somethingNewDishIndex = currentRecommendations.reduce(
  (leastObviousIndex, dish, currentIndex, dishes) => {
    const currentMatchScore = dish.match;
    const lowestMatchScore = dishes[leastObviousIndex].match;

    return currentMatchScore < lowestMatchScore
      ? currentIndex
      : leastObviousIndex;
  },
  0
);

const priorityDishIndex: Record<string, number> = {
  "Best Overall": baseMatchIndex,
  "Quickest": quickestDishIndex,
  "Budget-friendly": cheapestDishIndex,
  "Most comforting": mostComfortingDishIndex,
  "Something new": somethingNewDishIndex,
};


const perfectMatch =
  currentRecommendations[priorityDishIndex[selectedPriority]];

const displayedMatch =
  surpriseIndex !== null
    ? currentRecommendations[surpriseIndex]
    : perfectMatch;
    const saveMatchFeedback = async (feedback: "liked" | "disliked") => {
  setMatchFeedback(feedback);

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dishName: displayedMatch.name,
        mood: selectedMood,
        situation: selectedSituation,
        feedback,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save feedback");
    }
  } catch (error) {
    console.error("Error saving match feedback:", error);
  }
};
  return (
    <main className="min-h-screen bg-[#FFF9F2] text-[#2D2926]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 md:px-16 lg:px-24">

        {/* Brand name */}
        <div className="text-3xl font-extrabold tracking-tight text-orange-500">
          Nomzi<span className="text-[#2D2926]">.</span>
        </div>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 font-medium md:flex">
          <a href="#" className="transition hover:text-orange-500">
            Home
          </a>

          <a href="#explore" className="transition hover:text-orange-500">
            Explore
          </a>

          <a href="#offers" className="transition hover:text-orange-500">
            Offers
          </a>
        </div>

        {/* Sign in and cart */}
        <div className="flex items-center gap-4">
          <Link
  href="/login"
  className="hidden font-semibold transition hover:text-orange-500 sm:block"
>
  Sign In
</Link>

          <button
            aria-label="Open shopping cart"
            className="rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-orange-600"
          >
            Cart 🛒
          </button>
        </div>
      </nav>

      {/* Hero section */}
      <section className="grid min-h-[75vh] items-center gap-12 px-8 py-12 md:px-16 lg:grid-cols-2 lg:px-24">

        {/* Left side: Hero content */}
        <div className="max-w-3xl">

          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-orange-500">
            Fast • Fresh • Delicious
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Craving something{" "}
            <span className="text-orange-500">
              delicious?
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
            Discover local favourites and delicious meals, delivered straight
            to your doorstep.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-lg sm:flex-row">
            <input
              type="text"
              placeholder="Search for dishes or restaurants..."
              aria-label="Search for dishes or restaurants"
              className="flex-1 rounded-xl px-5 py-4 outline-none"
            />

            <button className="rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600">
              Find Food
            </button>
          </div>

          {/* Trust message */}
          <p className="mt-5 text-sm text-gray-500">
            🍕 Great food &nbsp; • &nbsp; ⚡ Fast delivery &nbsp; • &nbsp; ❤️ Made for every craving
          </p>

        </div>

        {/* Right side: Premium food visual will go here */}
        {/* Right side: Premium food visual */}
<div className="relative hidden min-h-[550px] items-center justify-center lg:flex">

  {/* Soft decorative background */}
  <div className="absolute h-[470px] w-[470px] rounded-full bg-orange-100/70" />

  {/* Main food image */}
  <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full border-[10px] border-white shadow-[0_30px_80px_rgba(70,45,25,0.18)]">
    <Image
      src="/images/hero-pasta.png"
      alt="Fresh vegetarian pasta with tomato sauce, vegetables and basil"
      fill
      priority
      className="object-cover"
    />
  </div>

  {/* Rating card */}
  <div className="absolute right-2 top-16 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
    <p className="text-sm font-medium text-gray-500">
      Customer rating
    </p>
    <div className="mt-1 flex items-center gap-2">
      <span className="text-xl font-bold text-[#2D2926]">4.9</span>
      <span className="text-amber-500">★</span>
      <span className="text-sm text-gray-500">2k+ foodies</span>
    </div>
  </div>

  {/* Delivery card */}
  <div className="absolute bottom-16 left-0 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
    <p className="text-sm font-medium text-gray-500">
      Average delivery
    </p>
    <p className="mt-1 text-xl font-bold text-[#2D2926]">
      25–30 min
    </p>
  </div>

  {/* Small accent badge */}
  <div className="absolute bottom-4 right-12 rounded-full bg-[#2D2926] px-5 py-3 text-sm font-semibold text-white shadow-lg">
    Freshly prepared 🌿
  </div>

</div>

      </section>
      {/* Mood Discovery Section */}
<section
  id="mood-discovery"
  className="bg-[#FFF9F2] px-8 py-24 md:px-16 lg:px-24"
>
  {/* Section heading */}
  <div className="mx-auto mb-14 max-w-3xl text-center">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
      Made for your mood
    </p>

    <h2 className="text-4xl font-extrabold tracking-tight text-[#2D2926] md:text-5xl">
      What are you in the mood for?
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
      Tell us how you feel. Nomzi will help you discover food that fits the
      moment.
    </p>
  </div>

  {/* Mood cards */}
  <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {moods.map((mood) => {
      const isSelected = selectedMood === mood.name;

      return (
        <button
          key={mood.name}
          type="button"
          onClick={() => setSelectedMood(mood.name)}
          aria-pressed={isSelected}
          className={`group relative overflow-hidden rounded-[2rem] border p-7 text-left transition duration-300 ${
            isSelected
              ? "border-orange-500 bg-orange-500 text-white shadow-[0_20px_50px_rgba(249,115,22,0.25)]"
              : "border-orange-100 bg-white text-[#2D2926] shadow-[0_12px_40px_rgba(45,41,38,0.06)] hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(45,41,38,0.12)]"
          }`}
        >
          {/* Decorative background circle */}
          <div
            className={`absolute -right-8 -top-8 h-28 w-28 rounded-full transition duration-500 group-hover:scale-125 ${
              isSelected ? "bg-white/10" : "bg-orange-50"
            }`}
          />

          {/* Mood icon */}
          <div
            className={`relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition duration-300 ${
              isSelected
                ? "bg-white/15"
                : "bg-[#FFF9F2] group-hover:bg-orange-50"
            }`}
          >
            {mood.emoji}
          </div>

          {/* Mood information */}
          <div className="relative">
            <h3 className="text-xl font-bold">
              {mood.name}
            </h3>

            <p
              className={`mt-3 text-sm leading-6 ${
                isSelected ? "text-orange-50" : "text-gray-500"
              }`}
            >
              {mood.subtitle}
            </p>
          </div>

          {/* Selected indicator */}
          {isSelected && (
            <div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-orange-500">
              ✓
            </div>
          )}
        </button>
      );
    })}
  </div>

  {/* Dynamic selected mood message */}
  <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-orange-100 bg-white px-6 py-5 text-center shadow-sm">
    <p className="text-sm font-medium text-gray-500">
      Your current mood
    </p>

    <p className="mt-1 text-lg font-bold text-[#2D2926]">
      {selectedMood} — we&apos;re finding something that fits.
    </p>
  </div>
  {/* Dynamic mood recommendations */}
<div className="mx-auto mt-16 max-w-7xl">

  {/* Recommendation heading */}
  <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
        Picked for your mood
      </p>

      <h3 className="text-3xl font-extrabold tracking-tight text-[#2D2926] md:text-4xl">
        Your perfect matches
      </h3>

      <p className="mt-3 text-base text-gray-500">
        Handpicked dishes that match your{" "}
        <span className="font-semibold text-orange-500">
          {selectedMood}
        </span>{" "}
        mood.
      </p>
    </div>

    <div className="w-fit rounded-full border border-orange-100 bg-white px-5 py-3 text-sm font-semibold text-[#2D2926] shadow-sm">
      ✨ Personalised for you
    </div>
  </div>

  {/* Recommendation cards */}
  <div className="grid gap-6 md:grid-cols-3">
    {currentRecommendations.map((food) => (
      <article
        key={food.name}
        className="group overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_50px_rgba(45,41,38,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(45,41,38,0.14)]"
      >
        {/* Temporary visual area — real food images come next */}
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-[#FFF9F2] to-amber-50">

          <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-md">
            {food.match}% MATCH
          </div>

          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-orange-100 bg-white text-5xl shadow-lg">
            <Image
  src={food.image}
  alt={food.name}
  fill
  className="object-cover transition duration-500 group-hover:scale-105"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
          </div>
        </div>

        {/* Card information */}
        <div className="p-6">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h4 className="text-xl font-extrabold text-[#2D2926]">
              {food.name}
            </h4>

            <span className="shrink-0 text-lg font-bold text-orange-500">
              {food.price}
            </span>
          </div>

          <p className="min-h-[48px] text-sm leading-6 text-gray-500">
            {food.description}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-orange-100 pt-5">
            <span className="text-sm font-medium text-gray-500">
              ◷ {food.time}
            </span>

            <button
              type="button"
              className="rounded-full bg-[#2D2926] px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-orange-500"
            >
              View dish →
            </button>
          </div>
        </div>
      </article>
    ))}
  </div>
</div>
</section>
      
      
      {/* Situation Discovery Section */}
<section
  id="situation-discovery"
  className="relative overflow-hidden bg-[#2D2926] px-8 py-24 text-white md:px-16 lg:px-24"
>
  {/* Decorative background glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
        YOUR MOMENT MATTERS
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        What&apos;s your situation?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
        Because the perfect food depends on more than hunger. Tell Nomzi what
        kind of moment you&apos;re in.
      </p>
    </div>

    {/* Situation cards */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {situations.map((situation) => {
        const isSelected = selectedSituation === situation.name;

        return (
          <button
            key={situation.name}
            type="button"
            onClick={() => setSelectedSituation(situation.name)}
            className={`group relative min-h-[250px] overflow-hidden rounded-[2rem] border p-6 text-left transition-all duration-300 ${
              isSelected
                ? "border-orange-400 bg-orange-500 text-white shadow-[0_20px_60px_rgba(249,115,22,0.28)] -translate-y-2"
                : "border-white/10 bg-white/[0.06] text-white hover:-translate-y-2 hover:border-orange-400/50 hover:bg-white/[0.1]"
            }`}
          >
            {/* Card number */}
            <span
              className={`mb-10 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition ${
                isSelected
                  ? "bg-white text-orange-500"
                  : "bg-white/10 text-white/70 group-hover:bg-orange-500"
              }`}
            >
              {String(situations.indexOf(situation) + 1).padStart(2, "0")}
            </span>

            <div className="mt-auto">
              <h3 className="text-xl font-extrabold">
                {situation.name}
              </h3>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  isSelected ? "text-white/90" : "text-white/55"
                }`}
              >
                {situation.subtitle}
              </p>
            </div>

            {/* Selected indicator */}
            {isSelected && (
              <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-orange-500">
                ✓
              </div>
            )}
          </button>
        );
      })}
    </div>

    {/* Combined personalisation result */}
    {/* Priority Discovery */}
<div className="mx-auto mt-12 max-w-5xl text-center">
  <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-orange-400">
    One last thing
  </p>

  <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
    What matters most right now?
  </h3>

  <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/60">
    Give Nomzi one more clue to make your match feel even more personal.
  </p>

  <div className="mt-7 flex flex-wrap justify-center gap-3">
    {[
      "Best Overall",
      "Quickest",
      "Budget-friendly",
      "Most comforting",
      "Something new",
    ].map((priority) => {
      const isSelected = selectedPriority === priority;

      return (
        <button
          key={priority}
          type="button"
          onClick={() => {
            setSelectedPriority(priority);
            setSurpriseIndex(null);
            setShowPerfectMatch(false);
          }}
          className={`rounded-full border px-5 py-3 text-sm font-bold transition duration-300 ${
            isSelected
              ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
              : "border-white/15 bg-white/[0.06] text-white/70 hover:-translate-y-1 hover:border-orange-400/60 hover:text-white"
          }`}
        >
          {priority}
        </button>
      );
    })}
  </div>
</div>
    <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center backdrop-blur-xl md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
        Your Nomzi Match
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white">
          {selectedMood}
        </span>

        <span className="text-white/30">+</span>

        <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold text-white">
          {selectedSituation}
        </span>
        <span className="text-white/30">+</span>

<span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-sm font-bold text-orange-300">
  {selectedPriority}
</span>
      </div>

      <div className="mx-auto mt-6 max-w-2xl">
  <p className="text-xl font-semibold leading-relaxed text-white md:text-2xl">
    {matchMessages[selectedMood][selectedSituation]}
  </p>

  <div className="mx-auto mt-5 max-w-xl rounded-2xl border border-orange-400/20 bg-orange-500/[0.08] px-5 py-4">
    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-400">
      Why this match?
    </p>

    <p className="mt-2 text-sm font-medium leading-relaxed text-white/70 md:text-base">
      {priorityMessages[selectedPriority]}
    </p>
  </div>
</div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
  <button
    type="button"
    onClick={() => {
      setSurpriseIndex(null);
      setMatchFeedback(null);
      setShowPerfectMatch(true);
    }}
    className="rounded-full bg-white px-7 py-3.5 font-bold text-[#2D2926] shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
  >
    Find my perfect match →
  </button>

  <button
    type="button"
    onClick={() => {
      let randomIndex = Math.floor(
        Math.random() * currentRecommendations.length
      );

      if (
        currentRecommendations.length > 1 &&
        randomIndex === surpriseIndex
      ) {
        randomIndex =
          (randomIndex + 1) % currentRecommendations.length;
      }

      setSurpriseIndex(randomIndex);
      setMatchFeedback(null);
      setShowPerfectMatch(true);
    }}
    className="rounded-full border border-orange-400/50 bg-orange-500 px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-400"
  >
    Surprise me ✨
  </button>
</div>
    </div>
    {showPerfectMatch && (
  <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2.5rem] border border-orange-400/20 bg-[#FFF9F2] text-[#2D2926] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
    <div className="grid md:grid-cols-2">

      {/* Real food image */}
      <div className="relative min-h-[360px] overflow-hidden">
        <Image
          src={displayedMatch.image}
          alt={displayedMatch.name}
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute left-6 top-6 rounded-full bg-orange-500 px-4 py-2 text-sm font-extrabold text-white shadow-lg">
          {displayedMatch.match}% MATCH
        </div>
      </div>

      {/* Match information */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-orange-500">
          Your Nomzi Moment Match
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
            {selectedMood}
          </span>

          <span className="font-bold text-gray-400">×</span>

          <span className="rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold">
            {selectedSituation}
          </span>
        </div>

        <h3 className="mt-7 text-3xl font-extrabold tracking-tight md:text-4xl">
          {displayedMatch.name}
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          {matchMessages[selectedMood][selectedSituation]}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
            ◷ {displayedMatch.time}
          </span>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
            {displayedMatch.price}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowDishDetails(true)}
          className="mt-8 w-fit rounded-full bg-[#2D2926] px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-orange-500"
        >
          View this dish →
        </button>
        {showDishDetails && (
  <div className="mt-8 rounded-[2rem] border border-orange-200 bg-orange-50 p-6">
    <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">
      A little more about your match
    </p>

    <h3 className="mt-3 text-2xl font-black text-[#2D2926]">
      Why {displayedMatch.name} fits this moment
    </h3>

    <p className="mt-3 text-base leading-relaxed text-[#5F5A56]">
      {displayedMatch.description} With a {displayedMatch.match}% match,
      this pick fits your <strong>{selectedMood}</strong> mood and your{" "}
      <strong>{selectedSituation}</strong> moment.
    </p>

    <div className="mt-5 flex flex-wrap gap-3">
      <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2D2926] shadow-sm">
        Match: {displayedMatch.match}%
      </span>

      <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2D2926] shadow-sm">
        Time: {displayedMatch.time}
      </span>

      <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2D2926] shadow-sm">
        Price: {displayedMatch.price}
      </span>

      <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2D2926] shadow-sm">
        Comfort: {displayedMatch.comfortScore}/10
      </span>
    </div>

    <button
      type="button"
      onClick={() => setShowDishDetails(false)}
      className="mt-5 text-sm font-bold text-orange-600 transition hover:text-orange-700"
    >
      Show less ↑
    </button>
  </div>
)}
        <div className="mt-8 border-t border-[#2D2926]/10 pt-6">
  <p className="text-sm font-bold text-[#2D2926]">
    Was this a good match?
  </p>

  <div className="mt-3 flex items-center gap-3">
    <button
      type="button"
      onClick={() => saveMatchFeedback("liked")}
      className={`rounded-full border px-4 py-2 text-lg transition ${
        matchFeedback === "liked"
          ? "border-green-500 bg-green-100"
          : "border-[#2D2926]/15 bg-white hover:-translate-y-1"
      }`}
      aria-label="Like this recommendation"
    >
      👍
    </button>

    <button
      type="button"
      onClick={() => saveMatchFeedback("disliked")}
      className={`rounded-full border px-4 py-2 text-lg transition ${
        matchFeedback === "disliked"
          ? "border-orange-500 bg-orange-100"
          : "border-[#2D2926]/15 bg-white hover:-translate-y-1"
      }`}
      aria-label="Dislike this recommendation"
    >
      👎
    </button>
  </div>

  {matchFeedback && (
    <p className="mt-3 text-sm font-medium text-[#2D2926]/60">
      {matchFeedback === "liked"
        ? "Glad this one feels right — looks like Nomzi understood the assignment. ✨"
        : "Not quite the one? No worries — try another match and let's find something better."}
    </p>
  )}
</div>
      </div>

    </div>
  </div>
)}
  </div>
</section>
{/* Explore Section */}
<section
  id="explore"
  className="bg-white px-8 py-20 md:px-16 lg:px-24"
>
  {/* Section heading */}
  <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
        Explore Nomzi
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight text-[#2D2926] md:text-5xl">
        What are you craving today?
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
        Discover handpicked dishes and local favourites made for every mood.
      </p>
    </div>

    <button className="w-fit rounded-full border border-gray-200 bg-[#FFF9F2] px-6 py-3 font-semibold text-[#2D2926] transition duration-300 hover:border-orange-500 hover:text-orange-500">
      View all restaurants →
    </button>
  </div>

  {/* Food categories */}
  <div className="mb-16 flex flex-wrap gap-3">
    {[
      "🍕 Pizza",
      "🍔 Burgers",
      "🍛 Indian",
      "🥗 Healthy",
      "🍰 Desserts",
      "☕ Café",
    ].map((category) => (
      <button
        key={category}
        className="rounded-full border border-gray-200 bg-[#FFF9F2] px-6 py-3 font-semibold text-[#2D2926] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
      >
        {category}
      </button>
    ))}
  </div>

  {/* Popular section heading */}
  <div className="mb-8 flex items-center justify-between">
    <div>
      <h3 className="text-2xl font-bold text-[#2D2926] md:text-3xl">
        More ways to discover
      </h3>
      <p className="mt-2 text-gray-500">
        Not sure what you're craving yet? Explore a few delicious directions.
      </p>
    </div>

    <span className="hidden rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 sm:block">
      ✨ Explore your way
    </span>
  </div>

  {/* Restaurant cards */}
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        image: "/images/creamy-paneer-pasta.jpg",
        name: "Creamy Comforts",
        cuisine: "Pasta • Paneer • Cozy Picks",
        rating: "4.8",
        time: "20–25 min",
        price: "Comfort",
        offer: "COMFORT PICK",
      },
      {
        image: "/images/fiery-chilli-paneer.jpg",
        name: "Spice & Sizzle",
        cuisine: "Paneer • Indo-Chinese • Bold Flavours",
        rating: "4.7",
        time: "25–30 min",
        price: "Bold",
        offer: "BOLD & SPICY",
      },
      {
        image: "/images/avocado-toast.jpg",
        name: "Fresh & Feel-Good",
        cuisine: "Avocado • Healthy • Light Bites",
        rating: "4.9",
        time: "15–20 min",
        price: "Fresh",
        offer: "FRESH PICK",
      },
    ].map((restaurant) => (
      <article
        key={restaurant.name}
        className="group overflow-hidden rounded-[2rem] border border-orange-100 bg-[#FFF9F2] shadow-[0_12px_40px_rgba(45,41,38,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(45,41,38,0.14)]"
      >
        {/* Temporary visual area */}
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-orange-50 to-amber-100">
          <Image
  src={restaurant.image}
  alt={restaurant.name}
  fill
  className="object-cover transition duration-500 group-hover:scale-105"
/>

          <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
            {restaurant.offer}
          </span>

          <button
            aria-label={`Save ${restaurant.name} to favourites`}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110"
          >
            ♡
          </button>
        </div>

        {/* Restaurant information */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold text-[#2D2926]">
                {restaurant.name}
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                {restaurant.cuisine}
              </p>
            </div>

            <span className="rounded-lg bg-green-600 px-2.5 py-1.5 text-sm font-bold text-white">
              ★ {restaurant.rating}
            </span>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-orange-100 pt-5 text-sm font-medium text-gray-600">
            <span>🕒 {restaurant.time}</span>
            <span>{restaurant.price}</span>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

    </main>
  );
}