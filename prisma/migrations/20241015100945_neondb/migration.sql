/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Todo_userEmail_key" ON "Todo"("userEmail");
