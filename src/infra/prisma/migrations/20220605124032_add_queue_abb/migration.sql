/*
  Warnings:

  - Added the required column `queue_abb` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "queue_abb" TEXT NOT NULL;
