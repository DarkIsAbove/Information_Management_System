SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE DATABASE info_management;
USE info_management;
CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `statusId` int(11) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `status` (`id`, `name`, `createdAt`) VALUES
(1, 'Upcoming', '2024-06-12'),
(2, 'Pending', '2024-06-12'),
(3, 'Not Started', '2024-06-12'),
(4, 'Active', '2024-06-12'),
(5, 'Canceled', '2024-06-12');
CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `statusId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(30) NOT NULL DEFAULT 'EMPLOYEE',
  `employeeId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `foreign_key` (`departmentId`);
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_key` (`departmentId`),
  ADD KEY `status_key` (`statusId`);
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_fk` (`projectId`);
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_fk` (`employeeId`);
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `employee`
  ADD CONSTRAINT `foreign_key` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`);
ALTER TABLE `project`
  ADD CONSTRAINT `department_key` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`),
  ADD CONSTRAINT `status_key` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`);
ALTER TABLE `task`
  ADD CONSTRAINT `project_fk` FOREIGN KEY (`projectId`) REFERENCES `project` (`id`);
ALTER TABLE `user`
  ADD CONSTRAINT `employee_fk` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`);
COMMIT;