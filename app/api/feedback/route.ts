import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || "file:./dev.db",
});

const prisma = new PrismaClient({ adapter });


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { dishName, mood, situation, feedback } = body;

    if (!dishName || !mood || !situation || !feedback) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (feedback !== "liked" && feedback !== "disliked") {
      return NextResponse.json(
        { error: "Invalid feedback value." },
        { status: 400 }
      );
    }

    const savedFeedback = await prisma.matchFeedback.create({
      data: {
        dishName,
        mood,
        situation,
        feedback,
      },
    });

    return NextResponse.json(
      {
        success: true,
        feedback: savedFeedback,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("FULL PRISMA ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to save feedback.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}