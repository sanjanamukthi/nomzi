-- CreateTable
CREATE TABLE "CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dishName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "CartItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "CartItem_userId_idx" ON "CartItem"("userId");
