-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 
-- サーバのバージョン： 10.4.6-MariaDB
-- PHP のバージョン: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `gsmsdemo`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `game_soft_info_demo`
--

CREATE TABLE `game_soft_info_demo` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `memo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `game_soft_info_demo`
--

INSERT INTO `game_soft_info_demo` (`id`, `title`, `model`, `genre_id`, `state_id`, `memo`, `created_at`, `updated_at`) VALUES
(7, 'test34', 'Switch', 1, 3, NULL, '2019-12-01 01:53:45', '2019-12-01 03:57:40'),
(8, 'test99', 'PS3', 1, 3, NULL, '2019-12-01 01:54:29', '2019-12-01 05:12:56'),
(10, 'test34', '3DS', 1, 2, NULL, '2019-12-01 03:47:31', '2019-12-01 03:47:31'),
(11, 'test9', 'PS4', 1, 5, NULL, '2019-12-01 03:48:01', '2019-12-02 03:42:35'),
(12, 'test22', 'PS4', 6, 3, 'test', '2019-12-01 03:48:45', '2019-12-02 05:57:59'),
(16, 'test22', 'Switch', 1, 2, NULL, '2019-12-02 03:54:01', '2019-12-02 03:54:01'),
(17, 'test99', 'Switch', 1, 1, NULL, '2019-12-02 03:54:09', '2019-12-02 03:54:09'),
(18, 'test34', 'PS3', 1, 1, NULL, '2019-12-02 03:54:24', '2019-12-02 03:54:24'),
(19, 'test34', 'PS2', 1, 1, NULL, '2019-12-02 03:54:30', '2019-12-02 03:54:30'),
(20, 'test5', '3DS', 1, 1, NULL, '2019-12-02 03:54:36', '2019-12-02 03:54:36'),
(21, 'test22', 'PS2', 1, 1, NULL, '2019-12-02 03:54:46', '2019-12-02 03:54:46'),
(22, 'test100', 'PS3', 1, 2, NULL, '2019-12-02 03:54:56', '2019-12-02 03:54:56'),
(23, 'test22', 'PS2', 1, 1, NULL, '2019-12-02 03:55:08', '2019-12-02 03:55:08'),
(24, 'test34', 'PS3', 1, 2, NULL, '2019-12-02 03:55:15', '2019-12-02 03:55:15'),
(25, 'test22', 'PS2', 1, 1, NULL, '2019-12-02 03:55:20', '2019-12-02 03:55:20'),
(26, 'test100', 'PS4', 6, 1, NULL, '2019-12-02 03:55:30', '2019-12-02 03:55:30'),
(27, 'test22', 'PS4', 1, 1, NULL, '2019-12-02 06:13:36', '2019-12-02 06:13:36'),
(28, 'test22', 'PS3', 2, 2, NULL, '2019-12-02 13:49:00', '2019-12-02 13:49:00'),
(29, 'AAA', 'PS3', 1, 4, NULL, '2019-12-02 13:49:32', '2019-12-02 13:49:32'),
(30, 'test34', 'PS3', 6, 2, NULL, '2019-12-03 01:09:33', '2019-12-03 01:09:33'),
(32, 'test22', 'Switch', 2, 1, NULL, '2019-12-03 01:20:03', '2019-12-03 01:20:03'),
(33, 'test22', 'PS2', 2, 3, NULL, '2019-12-03 01:20:20', '2019-12-03 01:20:20'),
(34, 'test99', 'PS3', 3, 1, 'AA', '2019-12-03 01:52:51', '2019-12-03 01:52:51'),
(35, 'BB', 'Switch', 2, 2, 'qq', '2019-12-03 13:35:11', '2019-12-03 13:35:11');

-- --------------------------------------------------------

--
-- テーブルの構造 `genre_info`
--

CREATE TABLE `genre_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `genre` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `genre_info`
--

INSERT INTO `genre_info` (`id`, `genre`, `created_at`, `updated_at`) VALUES
(1, 'RPG', NULL, NULL),
(2, 'アクション', NULL, NULL),
(3, 'シューティング', NULL, NULL),
(4, 'アドベンチャー', NULL, NULL),
(5, 'シュミレーション', NULL, NULL),
(6, '音楽', NULL, NULL),
(7, 'スポーツ', NULL, NULL),
(8, 'パズル・テーブル', NULL, NULL),
(9, 'レース', NULL, NULL);

-- --------------------------------------------------------

--
-- テーブルの構造 `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_11_30_224157_create_game_soft_info', 1),
(2, '2019_11_30_235828_create_state_info', 1),
(3, '2019_12_01_052304_create_genre_info', 2),
(4, '2019_12_02_122301_create_one_info', 3);

-- --------------------------------------------------------

--
-- テーブルの構造 `one_info`
--

CREATE TABLE `one_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `page_kensu` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `one_info`
--

INSERT INTO `one_info` (`id`, `page_kensu`, `created_at`, `updated_at`) VALUES
(1, 50, NULL, '2019-12-03 13:33:56');

-- --------------------------------------------------------

--
-- テーブルの構造 `state_info`
--

CREATE TABLE `state_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `state` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- テーブルのデータのダンプ `state_info`
--

INSERT INTO `state_info` (`id`, `state`, `created_at`, `updated_at`) VALUES
(1, '', NULL, NULL),
(2, 'プレイ中', NULL, NULL),
(3, '完了', NULL, NULL),
(4, 'やり込み完了', NULL, NULL),
(5, '長期間放置', NULL, NULL);

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `game_soft_info_demo`
--
ALTER TABLE `game_soft_info_demo`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `genre_info`
--
ALTER TABLE `genre_info`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `one_info`
--
ALTER TABLE `one_info`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `state_info`
--
ALTER TABLE `state_info`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルのAUTO_INCREMENT
--

--
-- テーブルのAUTO_INCREMENT `game_soft_info_demo`
--
ALTER TABLE `game_soft_info_demo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- テーブルのAUTO_INCREMENT `genre_info`
--
ALTER TABLE `genre_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- テーブルのAUTO_INCREMENT `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- テーブルのAUTO_INCREMENT `one_info`
--
ALTER TABLE `one_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- テーブルのAUTO_INCREMENT `state_info`
--
ALTER TABLE `state_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
