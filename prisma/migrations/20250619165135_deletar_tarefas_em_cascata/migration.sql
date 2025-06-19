-- DropForeignKey
ALTER TABLE `tarefa` DROP FOREIGN KEY `tarefa_usuarioId_fkey`;

-- DropIndex
DROP INDEX `tarefa_usuarioId_fkey` ON `tarefa`;

-- AddForeignKey
ALTER TABLE `tarefa` ADD CONSTRAINT `tarefa_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
