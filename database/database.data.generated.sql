SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP DATABASE IF EXISTS info_management;
CREATE DATABASE info_management;
USE info_management;

CREATE TABLE `assigned_task` (
  `taskId` int(11) NOT NULL,
  `employeeId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `assigned_task` (`taskId`, `employeeId`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2024-06-13 10:00:00', '2024-06-13 10:00:00'),
(3, 4, '2024-06-13 10:02:00', '2024-06-13 10:02:00'),
(4, 5, '2024-06-13 10:03:00', '2024-06-13 10:03:00'),
(5, 6, '2024-06-13 10:04:00', '2024-06-13 10:04:00'),
(6, 7, '2024-06-13 10:05:00', '2024-06-13 10:05:00'),
(7, 8, '2024-06-13 10:06:00', '2024-06-13 10:06:00'),
(8, 9, '2024-06-13 10:07:00', '2024-06-13 10:07:00'),
(9, 10, '2024-06-13 10:08:00', '2024-06-13 10:08:00'),
(10, 11, '2024-06-13 10:09:00', '2024-06-13 10:09:00'),
(11, 2, '2024-06-13 10:10:00', '2024-06-13 10:10:00'),
(13, 4, '2024-06-13 10:12:00', '2024-06-13 10:12:00'),
(14, 5, '2024-06-13 10:13:00', '2024-06-13 10:13:00'),
(15, 6, '2024-06-13 10:14:00', '2024-06-13 10:14:00'),
(16, 7, '2024-06-13 10:15:00', '2024-06-13 10:15:00'),
(17, 8, '2024-06-13 10:16:00', '2024-06-13 10:16:00'),
(18, 9, '2024-06-13 10:17:00', '2024-06-13 10:17:00'),
(19, 10, '2024-06-13 10:18:00', '2024-06-13 10:18:00'),
(20, 11, '2024-06-13 10:19:00', '2024-06-13 10:19:00'),
(21, 2, '2024-06-13 10:20:00', '2024-06-13 10:20:00'),
(23, 4, '2024-06-13 10:22:00', '2024-06-13 10:22:00'),
(24, 5, '2024-06-13 10:23:00', '2024-06-13 10:23:00'),
(25, 6, '2024-06-13 10:24:00', '2024-06-13 10:24:00'),
(26, 7, '2024-06-13 10:25:00', '2024-06-13 10:25:00'),
(27, 8, '2024-06-13 10:26:00', '2024-06-13 10:26:00'),
(28, 9, '2024-06-13 10:27:00', '2024-06-13 10:27:00'),
(29, 10, '2024-06-13 10:28:00', '2024-06-13 10:28:00'),
(30, 11, '2024-06-13 10:29:00', '2024-06-13 10:29:00'),
(31, 2, '2024-06-13 10:30:00', '2024-06-13 10:30:00'),
(33, 4, '2024-06-13 10:32:00', '2024-06-13 10:32:00'),
(34, 5, '2024-06-13 10:33:00', '2024-06-13 10:33:00'),
(35, 6, '2024-06-13 10:34:00', '2024-06-13 10:34:00'),
(36, 7, '2024-06-13 10:35:00', '2024-06-13 10:35:00'),
(37, 8, '2024-06-13 10:36:00', '2024-06-13 10:36:00'),
(38, 9, '2024-06-13 10:37:00', '2024-06-13 10:37:00'),
(39, 10, '2024-06-13 10:38:00', '2024-06-13 10:38:00'),
(40, 11, '2024-06-13 10:39:00', '2024-06-13 10:39:00'),
(41, 2, '2024-06-13 10:40:00', '2024-06-13 10:40:00'),
(43, 4, '2024-06-13 10:42:00', '2024-06-13 10:42:00'),
(44, 5, '2024-06-13 10:43:00', '2024-06-13 10:43:00'),
(45, 6, '2024-06-13 10:44:00', '2024-06-13 10:44:00'),
(46, 7, '2024-06-13 10:45:00', '2024-06-13 10:45:00'),
(47, 8, '2024-06-13 10:46:00', '2024-06-13 10:46:00'),
(48, 9, '2024-06-13 10:47:00', '2024-06-13 10:47:00'),
(49, 10, '2024-06-13 10:48:00', '2024-06-13 10:48:00'),
(50, 11, '2024-06-13 10:49:00', '2024-06-13 10:49:00');
CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `department` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Marketing', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(2, 'Finance', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(3, 'Human Resources', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(4, 'Sales', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(5, 'Information Technology', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(6, 'Research and Development', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(7, 'Customer Service', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(8, 'Operations', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(9, 'Public Relations', '2024-06-12 16:06:05', '0000-00-00 00:00:00'),
(10, 'Legal', '2024-06-12 16:06:05', '0000-00-00 00:00:00');
CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `employee` (`id`, `firstname`, `lastname`, `departmentId`, `createdAt`, `updatedAt`) VALUES
(2, 'John', 'Doe', 1, '2024-06-13 10:00:00', '2024-06-13 10:00:00'),
(4, 'Michael', 'Johnson', 1, '2024-06-13 10:02:00', '2024-06-13 10:02:00'),
(5, 'Emily', 'Brown', 3, '2024-06-13 10:03:00', '2024-06-13 10:03:00'),
(6, 'James', 'Wilson', 2, '2024-06-13 10:04:00', '2024-06-13 10:04:00'),
(7, 'Emma', 'Martinez', 1, '2024-06-13 10:05:00', '2024-06-13 10:05:00'),
(8, 'Daniel', 'Anderson', 3, '2024-06-13 10:06:00', '2024-06-13 10:06:00'),
(9, 'Olivia', 'Taylor', 2, '2024-06-13 10:07:00', '2024-06-13 10:07:00'),
(10, 'William', 'Thomas', 1, '2024-06-13 10:08:00', '2024-06-13 10:08:00'),
(11, 'Sophia', 'Jackson', 3, '2024-06-13 10:09:00', '2024-06-13 10:09:00'),
(25, 'Manuel', 'Roberto', 3, '2024-06-14 04:00:19', '2024-06-14 04:08:00'),
(26, 'Roro', 'Noa', 6, '2024-06-14 04:18:00', '2024-06-14 04:26:24'),
(27, 'Romarie', 'Jose', 9, '2024-06-14 04:30:11', '0000-00-00 00:00:00'),
(28, 'Samuel', 'Jackson', 7, '2024-06-14 04:31:20', '0000-00-00 00:00:00');
CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `statusId` int(11) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `project` (`id`, `name`, `statusId`, `departmentId`, `createdAt`, `updatedAt`) VALUES
(1, 'Website Redesign', 4, 1, '2024-06-13 10:10:00', '2024-06-13 10:10:00'),
(2, 'Mobile App Development', 2, 2, '2024-06-13 10:11:00', '2024-06-13 10:11:00'),
(3, 'Product Launch', 3, 1, '2024-06-13 10:12:00', '2024-06-13 10:12:00'),
(4, 'Marketing Campaign', 4, 3, '2024-06-13 10:13:00', '2024-06-13 10:13:00'),
(5, 'Sales Training', 1, 2, '2024-06-13 10:14:00', '2024-06-13 10:14:00'),
(6, 'Research Project', 2, 1, '2024-06-13 10:15:00', '2024-06-13 10:15:00'),
(7, 'New Product Development', 3, 3, '2024-06-13 10:16:00', '2024-06-13 10:16:00'),
(8, 'Customer Support Enhancement', 4, 2, '2024-06-13 10:17:00', '2024-06-13 10:17:00'),
(9, 'Event Planning', 1, 1, '2024-06-13 10:18:00', '2024-06-13 10:18:00'),
(10, 'Quality Assurance Improvements', 2, 3, '2024-06-13 10:19:00', '2024-06-13 10:19:00'),
(11, 'Talk to someone.', 1, 7, '2024-06-14 12:36:32', '0000-00-00 00:00:00');
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
(5, 'Canceled', '2024-06-12'),
(6, 'Completed', '2024-06-13');
CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `statusId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `task` (`id`, `name`, `statusId`, `projectId`, `createdAt`, `updatedAt`) VALUES
(1, 'Design UI Mockups', 1, 1, '2024-06-13 10:20:00', '2024-06-13 10:20:00'),
(2, 'Develop Backend APIs', 2, 2, '2024-06-13 10:21:00', '2024-06-13 10:21:00'),
(3, 'Create Marketing Plan', 3, 3, '2024-06-13 10:22:00', '2024-06-13 10:22:00'),
(4, 'Launch Social Media Campaign', 4, 4, '2024-06-13 10:23:00', '2024-06-13 10:23:00'),
(5, 'Train Sales Team', 1, 5, '2024-06-13 10:24:00', '2024-06-13 10:24:00'),
(6, 'Conduct Market Research', 2, 6, '2024-06-13 10:25:00', '2024-06-13 10:25:00'),
(7, 'Prototype Development', 3, 7, '2024-06-13 10:26:00', '2024-06-13 10:26:00'),
(8, 'Handle Customer Inquiries', 4, 8, '2024-06-13 10:27:00', '2024-06-13 10:27:00'),
(9, 'Plan Event Logistics', 1, 9, '2024-06-13 10:28:00', '2024-06-13 10:28:00'),
(10, 'Test Software Quality', 2, 10, '2024-06-13 10:29:00', '2024-06-13 10:29:00'),
(11, 'Review UI Feedback', 3, 1, '2024-06-13 10:30:00', '2024-06-13 10:30:00'),
(12, 'Optimize Database Performance', 4, 2, '2024-06-13 10:31:00', '2024-06-13 10:31:00'),
(13, 'Create Content Strategy', 1, 3, '2024-06-13 10:32:00', '2024-06-13 10:32:00'),
(14, 'Manage Project Budget', 2, 4, '2024-06-13 10:33:00', '2024-06-13 10:33:00'),
(15, 'Handle Customer Support Tickets', 3, 5, '2024-06-13 10:34:00', '2024-06-13 10:34:00'),
(16, 'Perform Code Review', 4, 6, '2024-06-13 10:35:00', '2024-06-13 10:35:00'),
(17, 'Coordinate Event Vendors', 1, 7, '2024-06-13 10:36:00', '2024-06-13 10:36:00'),
(18, 'Document Software Requirements', 2, 8, '2024-06-13 10:37:00', '2024-06-13 10:37:00'),
(19, 'Develop Training Materials', 3, 9, '2024-06-13 10:38:00', '2024-06-13 10:38:00'),
(20, 'Implement User Feedback', 4, 10, '2024-06-13 10:39:00', '2024-06-13 10:39:00'),
(21, 'Present Marketing Strategy', 1, 1, '2024-06-13 10:40:00', '2024-06-13 10:40:00'),
(22, 'Deploy Software Updates', 2, 2, '2024-06-13 10:41:00', '2024-06-13 10:41:00'),
(23, 'Promote Event', 3, 3, '2024-06-13 10:42:00', '2024-06-13 10:42:00'),
(24, 'Analyze Sales Data', 4, 4, '2024-06-13 10:43:00', '2024-06-13 10:43:00'),
(25, 'Develop Product Prototype', 1, 5, '2024-06-13 10:44:00', '2024-06-13 10:44:00'),
(26, 'Create Customer Support Documentation', 2, 6, '2024-06-13 10:45:00', '2024-06-13 10:45:00'),
(27, 'Develop homepage layout', 4, 1, '2024-06-13 10:15:00', '2024-06-13 10:15:00'),
(28, 'Fix database connection issue', 3, 2, '2024-06-13 10:16:00', '2024-06-13 10:16:00'),
(29, 'Write unit tests for authentication module', 2, 3, '2024-06-13 10:17:00', '2024-06-13 10:17:00'),
(30, 'Design logo for new product', 1, 4, '2024-06-13 10:18:00', '2024-06-13 10:18:00'),
(31, 'Implement search functionality', 4, 5, '2024-06-13 10:19:00', '2024-06-13 10:19:00'),
(32, 'Optimize database queries', 2, 1, '2024-06-13 10:20:00', '2024-06-13 10:20:00'),
(33, 'Create user registration form', 1, 2, '2024-06-13 10:21:00', '2024-06-13 10:21:00'),
(34, 'Develop RESTful APIs for mobile app', 3, 3, '2024-06-13 10:22:00', '2024-06-13 10:22:00'),
(35, 'Write documentation for API endpoints', 4, 4, '2024-06-13 10:23:00', '2024-06-13 10:23:00'),
(36, 'Test website compatibility across browsers', 5, 5, '2024-06-13 10:24:00', '2024-06-13 10:24:00'),
(37, 'Review code for security vulnerabilities', 2, 1, '2024-06-13 10:25:00', '2024-06-13 10:25:00'),
(38, 'Update UI components based on feedback', 3, 2, '2024-06-13 10:26:00', '2024-06-13 10:26:00'),
(39, 'Fix broken links on website', 1, 3, '2024-06-13 10:27:00', '2024-06-13 10:27:00'),
(40, 'Create user personas for marketing campaign', 4, 4, '2024-06-13 10:28:00', '2024-06-13 10:28:00'),
(41, 'Deploy website to production server', 5, 5, '2024-06-13 10:29:00', '2024-06-13 10:29:00'),
(42, 'Implement two-factor authentication', 2, 1, '2024-06-13 10:30:00', '2024-06-13 10:30:00'),
(43, 'Conduct load testing on application servers', 3, 2, '2024-06-13 10:31:00', '2024-06-13 10:31:00'),
(44, 'Create wireframes for new feature', 1, 3, '2024-06-13 10:32:00', '2024-06-13 10:32:00'),
(45, 'Resolve performance issues in backend services', 4, 4, '2024-06-13 10:33:00', '2024-06-13 10:33:00'),
(46, 'Integrate payment gateway with e-commerce platform', 5, 5, '2024-06-13 10:34:00', '2024-06-13 10:34:00'),
(47, 'Write content for blog posts', 2, 1, '2024-06-13 10:35:00', '2024-06-13 10:35:00'),
(48, 'Create user guides for new software release', 3, 2, '2024-06-13 10:36:00', '2024-06-13 10:36:00'),
(49, 'Design email templates for marketing campaign', 1, 3, '2024-06-13 10:37:00', '2024-06-13 10:37:00'),
(50, 'Implement caching mechanism for better performance', 4, 4, '2024-06-13 10:38:00', '2024-06-13 10:38:00'),
(51, 'Review and update privacy policy', 5, 5, '2024-06-13 10:39:00', '2024-06-13 10:39:00'),
(52, 'Setup continuous integration and deployment pipeline', 2, 1, '2024-06-13 10:40:00', '2024-06-13 10:40:00'),
(53, 'Develop dashboard for data visualization', 3, 2, '2024-06-13 10:41:00', '2024-06-13 10:41:00'),
(54, 'Test website accessibility for users with disabilities', 1, 3, '2024-06-13 10:42:00', '2024-06-13 10:42:00'),
(55, 'Create landing page for product launch', 4, 4, '2024-06-13 10:43:00', '2024-06-13 10:43:00'),
(56, 'Optimize images and media files for faster loading', 5, 5, '2024-06-13 10:44:00', '2024-06-13 10:44:00'),
(57, 'Implement single sign-on functionality', 2, 1, '2024-06-13 10:45:00', '2024-06-13 10:45:00'),
(58, 'Develop integration with third-party services', 3, 2, '2024-06-13 10:46:00', '2024-06-13 10:46:00'),
(59, 'Setup monitoring and alerting system', 1, 3, '2024-06-13 10:47:00', '2024-06-13 10:47:00'),
(60, 'Write technical documentation for API endpoints', 4, 4, '2024-06-13 10:48:00', '2024-06-13 10:48:00'),
(61, 'Create marketing materials for trade show', 5, 5, '2024-06-13 10:49:00', '2024-06-13 10:49:00'),
(62, 'Conduct user testing sessions', 2, 1, '2024-06-13 10:50:00', '2024-06-13 10:50:00'),
(63, 'Implement password strength validation', 3, 2, '2024-06-13 10:51:00', '2024-06-13 10:51:00'),
(64, 'Setup disaster recovery plan', 1, 3, '2024-06-13 10:52:00', '2024-06-13 10:52:00'),
(65, 'Migrate data to new server infrastructure', 4, 4, '2024-06-13 10:53:00', '2024-06-13 10:53:00'),
(66, 'Perform security audit of application', 5, 5, '2024-06-13 10:54:00', '2024-06-13 10:54:00'),
(67, 'Create training materials for new employees', 2, 1, '2024-06-13 10:55:00', '2024-06-13 10:55:00'),
(68, 'Implement role-based access control system', 3, 2, '2024-06-13 10:56:00', '2024-06-13 10:56:00'),
(69, 'Design user interface for mobile app', 1, 3, '2024-06-13 10:57:00', '2024-06-13 10:57:00'),
(70, 'Write API documentation for developers', 4, 4, '2024-06-13 10:58:00', '2024-06-13 10:58:00'),
(71, 'Conduct usability testing on website', 5, 5, '2024-06-13 10:59:00', '2024-06-13 10:59:00');
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(30) NOT NULL DEFAULT 'EMPLOYEE',
  `employeeId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
INSERT INTO `user` (`id`, `username`, `password`, `role`, `employeeId`, `createdAt`, `updatedAt`) VALUES
(14, 'john_doe', '$2b$15$R93UKR91Feb/MQJRsuKiPeNmkfvEPPnsHkPpJrM84YmB/OShf7z6.', 'EMPLOYEE', 2, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(15, 'alice_smith', '$2b$15$lHH/oKqguhwgd6pQLehPBuF.uNRmb2j1lhNHhhNVIIuyT9QxBBEIW', 'ADMIN', NULL, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(16, 'michael_johnson', '$2b$15$8afqu0yitmjEC0R3BScADOFoFxnOKqQhGT6lmWQIHu64fIGOnJiiG', 'EMPLOYEE', 4, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(17, 'emily_brown', '$2b$15$MMiMfuJeCJjR8ezWZX/7Au6tZRN8ZxincK6AMP6Y8gDO25eBYrEiS', 'EMPLOYEE', 5, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(18, 'james_wilson', '$2b$15$oBDEoTLGo2nHGLAj1gnZjeFt8BtcjQ6ka/qVjJen9OmBfWHvddkuS', 'EMPLOYEE', 6, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(19, 'emma_martinez', '$2b$15$vSxYIZaIVOxzmmNJGCJW0O25AuJB3p5019.gtzBxD./CLwOrhVJyK', 'EMPLOYEE', 7, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(20, 'daniel_anderson', '$2b$15$IfLy4ep5Fi1uWdjfgVYzLOBo9B8G0azdfAMRKbL6PLniRsKN8Y.7y', 'EMPLOYEE', 8, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(21, 'olivia_taylor', '$2b$15$iYgpjbCZ0gNQQPrTnjBTX.i86IBvuwIHNzntmXRF5us4wfRpDVYi2', 'EMPLOYEE', 9, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(22, 'william_thomas', '$2b$15$gKqIJ.AOiTTPyYkZ78ELPeM4PM2vavhHfVV9WOcxEmUms9bwQheAe', 'EMPLOYEE', 10, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(23, 'sophia_jackson', '$2b$15$.Ghi4rR0S3Czuqb4y67nbeJLZy6yS6IFbLdx1omGdB5A1af/QM/Wy', 'EMPLOYEE', 11, '2024-06-13 07:43:09', '0000-00-00 00:00:00'),
(27, 'manuelski', '$2b$15$CinusP.fDhHuXd3Ufgr2Pe2xjCASGGx4GRPOzyOWQHsUPSyZ7oIhi', 'EMPLOYEE', 25, '2024-06-14 04:00:19', '2024-06-14 04:08:00'),
(28, 'goro', '$2b$15$4VGMyXKWZjGPwJLqvKtthezAF9BtdvGQKHT9P6tFzEG3e1XqFFoQG', 'EMPLOYEE', 26, '2024-06-14 04:18:00', '0000-00-00 00:00:00'),
(29, 'romarsie', '$2b$15$1PUjVSVxdgT8OVk8XQp9te6QufVQGAJEN9N1VM4aGc5xfJnRt0phy', 'EMPLOYEE', 27, '2024-06-14 04:30:11', '0000-00-00 00:00:00'),
(30, 'samj', '$2b$15$AJNwT.DZgUfO9s8dde/fgu4Pz13L1IZKuSCYLKEE2pBd6WkOG6BLu', 'EMPLOYEE', 28, '2024-06-14 04:31:20', '0000-00-00 00:00:00');
ALTER TABLE `assigned_task`
  ADD UNIQUE KEY `taskId` (`taskId`),
  ADD KEY `assigned_employee` (`employeeId`);
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
  ADD KEY `project_fk` (`projectId`),
  ADD KEY `task_status` (`statusId`);
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_fk` (`employeeId`);
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
ALTER TABLE `assigned_task`
  ADD CONSTRAINT `assigned_employee` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`),
  ADD CONSTRAINT `task_todo` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`);
ALTER TABLE `employee`
  ADD CONSTRAINT `foreign_key` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`);
ALTER TABLE `project`
  ADD CONSTRAINT `department_key` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`),
  ADD CONSTRAINT `status_key` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`);
ALTER TABLE `task`
  ADD CONSTRAINT `project_fk` FOREIGN KEY (`projectId`) REFERENCES `project` (`id`),
  ADD CONSTRAINT `task_status` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`);
ALTER TABLE `user`
  ADD CONSTRAINT `employee_fk` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`);
COMMIT;