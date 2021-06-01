-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 03, 2021 at 09:23 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vjezba9`
--

-- --------------------------------------------------------

--
-- Table structure for table `adresar`
--

DROP TABLE IF EXISTS `adresar`;
CREATE TABLE IF NOT EXISTS `adresar` (
  `id` int(11) NOT NULL,
  `idKontakta` int(11) NOT NULL,
  `idPoznanik` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idKontakta` (`idKontakta`),
  KEY `idPoznanik` (`idPoznanik`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `adresar`
--

INSERT INTO `adresar` (`id`, `idKontakta`, `idPoznanik`) VALUES
(1, 1, 2),
(2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `imenik`
--

DROP TABLE IF EXISTS `imenik`;
CREATE TABLE IF NOT EXISTS `imenik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime_prezime` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresa` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `broj_telefona` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `imenik`
--

INSERT INTO `imenik` (`id`, `ime_prezime`, `adresa`, `broj_telefona`) VALUES
(1, 'Mujo Mujic', 'Ferhadija 8', '033123123'),
(2, 'Fata Fatic', 'Ferhadija 8', '033123123');

-- --------------------------------------------------------

--
-- Table structure for table `pocetna`
--

DROP TABLE IF EXISTS `pocetna`;
CREATE TABLE IF NOT EXISTS `pocetna` (
  `ime` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prezime` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresa` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `broj telefona` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pocetna`
--

INSERT INTO `pocetna` (`ime`, `prezime`, `adresa`, `broj telefona`) VALUES
('Mujo', 'Mujic', 'Ferhadija 8', '033 123 123'),
('Fata', 'Fatic', 'Ferhadija 8', '033 123 123'),
('Mujo', 'Mujic', 'Ferhadija 8', '033 123 123'),
('Fata', 'Fatic', 'Ferhadija 8', '033 123 123'),
('Medina', 'Kapo', 'Dobrinjske bolnice 7', '062941555');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
