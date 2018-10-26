-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2018 at 01:08 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ewallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accounts`
--

CREATE TABLE `tbl_accounts` (
  `no` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `AccountNumber` varchar(50) NOT NULL DEFAULT '10001403',
  `PIN` varchar(50) NOT NULL,
  `AccountBalance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_accounts`
--

INSERT INTO `tbl_accounts` (`no`, `UserID`, `AccountNumber`, `PIN`, `AccountBalance`) VALUES
(1, 1, '10000132083', '1234', 6000),
(2, 2, '10000132084', '1235', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pay_bills`
--

CREATE TABLE `tbl_pay_bills` (
  `BillsPaidNo` int(11) NOT NULL,
  `AccountNo` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_transaction`
--

CREATE TABLE `tbl_transaction` (
  `TransactionNo` int(11) NOT NULL,
  `AccountNo` varchar(50) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Amount` int(11) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_transaction`
--

INSERT INTO `tbl_transaction` (`TransactionNo`, `AccountNo`, `Type`, `Amount`, `Date`) VALUES
(1, '10000132083', 'Deposit', 1000, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_transfer_funds_history`
--

CREATE TABLE `tbl_transfer_funds_history` (
  `TransferFundsNo` int(11) NOT NULL,
  `FromAccountNo` varchar(50) NOT NULL,
  `Amount` int(11) NOT NULL,
  `ToAccountNo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `UserEmail` varchar(50) NOT NULL,
  `UserPhoneNumber` varchar(50) NOT NULL,
  `UserPassword` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`UserID`, `UserName`, `UserEmail`, `UserPhoneNumber`, `UserPassword`) VALUES
(1, 'John Mico P. Bangit', 'johnmicobangit@gmail.com', '09054280781', 'Mico00004'),
(2, 'Ronnel Galag', 'galagronnel@gmail.com', '09277738947', 'ronelgalag');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  ADD PRIMARY KEY (`no`);

--
-- Indexes for table `tbl_transaction`
--
ALTER TABLE `tbl_transaction`
  ADD PRIMARY KEY (`TransactionNo`);

--
-- Indexes for table `tbl_transfer_funds_history`
--
ALTER TABLE `tbl_transfer_funds_history`
  ADD PRIMARY KEY (`TransferFundsNo`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_transaction`
--
ALTER TABLE `tbl_transaction`
  MODIFY `TransactionNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_transfer_funds_history`
--
ALTER TABLE `tbl_transfer_funds_history`
  MODIFY `TransferFundsNo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
