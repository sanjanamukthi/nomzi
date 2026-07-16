import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { dishName, mood, situation, note } = body;

    if (!dishName || !mood || !situation) {
      return NextResponse.json(
        {
          error: "dishName, mood and situation are required",
        },
        {
          status: 400,
        }
      );
    }

    // Temporary until we add authentication sessions
    const userId = 1;

    const savedMatch = await prisma.savedMatch.create({
      data: {
        dishName,
        mood,
        situation,
        note,
        userId,
      },
    });

    return NextResponse.json(
      {
        message: "Recommendation saved successfully",
        savedMatch,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET() {
  try {
    // Temporary until authentication is added
    const userId = 1;

    const savedMatches = await prisma.savedMatch.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(savedMatches);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}