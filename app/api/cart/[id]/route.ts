import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function DELETE(
  request: Request,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    await prisma.cartItem.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Item removed from cart.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to remove item.",
      },
      {
        status: 500,
      }
    );
  }
}
export async function PATCH(
  request: Request,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const updatedItem = await prisma.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: body.quantity,
      },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to update quantity.",
      },
      {
        status: 500,
      }
    );
  }
}