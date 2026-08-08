import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const cartItems = await prisma.cartItem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch cart items.",
      },
      {
        status: 500,
      }
    );
  }
}
console.log(Object.keys(prisma));
console.log("cartItem =", prisma.cartItem);
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("POST body:", body);

    // Check if the dish already exists
const existingItem = await prisma.cartItem.findFirst({
  where: {
    dishName: body.dishName,
    userId: body.userId,
  },
});

if (existingItem) {
  console.log("Existing item found:", existingItem);
  const updatedItem = await prisma.cartItem.update({
    where: {
      id: existingItem.id,
    },
    data: {
      quantity: existingItem.quantity + body.quantity,
    },
  });

  return NextResponse.json(updatedItem);
}
console.log("Creating new cart item");

let user = await prisma.user.findUnique({
  where: { id: body.userId },
});

if (!user) {
  user = await prisma.user.create({
    data: {
      name: "Demo User",
      email: "demo@nomzi.app",
      passwordHash: "demo",
    },
  });

  body.userId = user.id;
}

const newItem = await prisma.cartItem.create({
  data: {
    dishName: body.dishName,
    quantity: body.quantity,
    price: body.price,
    userId: body.userId,
  },
});

return NextResponse.json(newItem, {
  status: 201,
});

let cartItem;


  } catch (error) {
    console.error("Cart API Error:", error);

    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}