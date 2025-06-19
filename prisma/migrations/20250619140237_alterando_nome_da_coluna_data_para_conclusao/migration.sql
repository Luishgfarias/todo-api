/*
  Warnings:

  - You are about to drop the column `dataDeParaConclusao` on the `tarefa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tarefa` DROP COLUMN `dataDeParaConclusao`,
    ADD COLUMN `dataParaConclusao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
