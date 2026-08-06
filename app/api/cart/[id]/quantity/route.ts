import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const cartItem = await prisma.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: body.quantity,
      },
    });

    return NextResponse.json(cartItem);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update quantity." },
      { status: 500 }
    );
  }
}