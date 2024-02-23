-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 23 feb 2024 kl 12:11
-- Serverversion: 5.7.39
-- PHP-version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `notes`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `content` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `documents`
--

INSERT INTO `documents` (`id`, `user`, `name`, `content`, `created`, `updated`) VALUES
(3, 1, 'Hello World', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2024-02-18 15:40:26', '2024-02-18 15:40:26'),
(5, 1, 'My thesis', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2024-02-19 11:03:08', '2024-02-19 11:03:08'),
(6, 1, 'Recipes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2024-02-19 11:03:17', '2024-02-19 11:03:17'),
(7, 1, 'My notes', '<p><span style=\"color: rgb(224, 62, 45);\"><strong>Lorem ipsum dolor sit amet,</strong></span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', '2024-02-19 11:03:35', '2024-02-19 11:03:35'),
(8, 1, 'My to dos', 'Eat, pray, love', '2024-02-19 22:15:43', '2024-02-19 22:15:43'),
(9, 1, 'My favourite films', '<p><span style=\"background-color: rgb(191, 237, 210);\">Terminator 2</span></p>', '2024-02-19 22:17:41', '2024-02-19 22:17:41'),
(11, 2, 'Hello Disney World', '<p><span style=\"background-color: rgb(236, 202, 250);\">Lorem ipsum dolor sit ame</span>t, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', '2024-02-20 10:15:28', '2024-02-20 10:15:28'),
(12, 1, 'My book list', '<p><span style=\"color: rgb(45, 194, 107);\">Lorem ipsum</span> <span style=\"background-color: rgb(224, 62, 45);\">hello hello&nbsp;</span></p>', '2024-02-20 11:55:13', '2024-02-20 11:55:13'),
(13, 1, 'My diary', '<p><strong>Lorem ipsum</strong></p>', '2024-02-20 11:55:58', '2024-02-20 11:55:58'),
(16, 1, 'My docs', '<p><strong><em>Lorem ipsum blah blah blah</em></strong></p>', '2024-02-20 13:14:53', '2024-02-20 13:14:53'),
(18, 4, 'My shopping list', 'Pink dress, pink bow, pink biscuits, and more pink stuff, and a big pink ring and other jewellery', '2024-02-22 11:30:09', '2024-02-22 11:30:09'),
(19, 4, 'My hobbies', 'Dance, music, travel, stuff and more and more more more MORE and watch disney films with Mickey Mouse and friends', '2024-02-22 11:30:56', '2024-02-22 11:30:56'),
(20, 5, 'Goofy activities', '1. Goof around\n2. Watch goofy films\n', '2024-02-22 19:08:17', '2024-02-22 19:08:17'),
(21, 7, 'My sparkly party', '<p><span style=\"background-color: rgb(236, 202, 250);\">Sparkles everywhere!</span></p>\n<p>&nbsp;</p>\n<p><span style=\"background-color: rgb(236, 202, 250); color: rgb(224, 62, 45);\">Glitter!</span></p>\n<p><span style=\"background-color: rgb(45, 194, 107); color: rgb(224, 62, 45);\">hallo</span></p>', '2024-02-22 19:09:12', '2024-02-22 19:09:12'),
(22, 7, 'My sparkly world', '<p><span style=\"color: rgb(53, 152, 219);\">I\'m a sparkly girl,</span><span style=\"color: rgb(236, 202, 250);\"> living in a sparkly world.&nbsp;</span></p>', '2024-02-22 19:52:01', '2024-02-22 19:52:01'),
(23, 7, 'Sparkles everywhere', '<p>Tinkly winkly wonkly doo!</p>', '2024-02-22 19:52:47', '2024-02-22 19:52:47'),
(24, 1, 'My books', '<p><span style=\"background-color: rgb(45, 194, 107);\"><strong>Walt Disney - Donald Duck &amp; Friends</strong></span></p>', '2024-02-22 19:56:03', '2024-02-22 19:56:03');

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`) VALUES
(1, 'Kajsa Anka', 'Kajsa24', 'test'),
(2, 'Kalle Anka', 'Kalle24', 'test'),
(3, 'Musse Pigg', 'Musse24', 'test'),
(4, 'Mimmi Pigg', 'Mimmi24', 'test'),
(5, 'Goofy', 'Goofy24', 'test'),
(7, 'Tingeling', 'Tingeling24', 'test');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
