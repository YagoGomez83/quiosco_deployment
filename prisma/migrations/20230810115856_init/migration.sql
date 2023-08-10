/*
  Warnings:

  - You are about to drop the column `estado` on the `orden` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `estado`,
    ADD COLUMN `est` BOOLEAN NOT NULL DEFAULT false;
