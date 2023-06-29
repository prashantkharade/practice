-- DropForeignKey
ALTER TABLE `college` DROP FOREIGN KEY `College_studentId_fkey`;

-- AddForeignKey
ALTER TABLE `College` ADD CONSTRAINT `College_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
