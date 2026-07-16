import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const savedMatch = await prisma.savedMatch.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!savedMatch) {
      return NextResponse.json(
        {
          error: "Saved match not found",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.savedMatch.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Saved match deleted successfully",
    });
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