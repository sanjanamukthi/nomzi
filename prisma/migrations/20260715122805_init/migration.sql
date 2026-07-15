-- CreateTable
CREATE TABLE "MatchFeedback" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dishName" TEXT NOT NULL,
    "mood" TEXT NOT NULL,
    "situation" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
