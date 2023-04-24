CREATE DATABASE  IF NOT EXISTS `dg` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dg`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: dg
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `birthdeath`
--

DROP TABLE IF EXISTS `birthdeath`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `birthdeath` (
  `bid` int NOT NULL AUTO_INCREMENT,
  `bname` varchar(255) DEFAULT NULL,
  `bplace` varchar(255) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `hospitalname` varchar(255) DEFAULT NULL,
  `bdtype` int NOT NULL,
  `useridfk` int NOT NULL,
  PRIMARY KEY (`bid`),
  KEY `fk1_idx` (`useridfk`),
  KEY `fk2_idx` (`bdtype`),
  CONSTRAINT `fk1` FOREIGN KEY (`useridfk`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk2` FOREIGN KEY (`bdtype`) REFERENCES `btype` (`bdtype`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `birthdeath`
--

LOCK TABLES `birthdeath` WRITE;
/*!40000 ALTER TABLE `birthdeath` DISABLE KEYS */;
INSERT INTO `birthdeath` VALUES (4,'sankethlj','panitaki','2023-03-05 05:30:00.000000','pandharpur hospital',1,4);
/*!40000 ALTER TABLE `birthdeath` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `btype`
--

DROP TABLE IF EXISTS `btype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `btype` (
  `bdtype` int NOT NULL,
  `btypecat` varchar(45) NOT NULL,
  PRIMARY KEY (`bdtype`),
  UNIQUE KEY `bdtype_UNIQUE` (`bdtype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `btype`
--

LOCK TABLES `btype` WRITE;
/*!40000 ALTER TABLE `btype` DISABLE KEYS */;
INSERT INTO `btype` VALUES (1,'Birth'),(2,'Death');
/*!40000 ALTER TABLE `btype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register_report`
--

DROP TABLE IF EXISTS `register_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register_report` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `work_desc` varchar(45) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `link` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register_report`
--

LOCK TABLES `register_report` WRITE;
/*!40000 ALTER TABLE `register_report` DISABLE KEYS */;
INSERT INTO `register_report` VALUES (1,'abhi','varma','vaccination done',1,NULL),(2,'abhisds','varmsssa','vaccination donsaddasde',2,'jdadjshjdadsbja'),(3,'ddsadasd','sdada','sdadads',0,'sdaddas'),(4,'abhi','vamr','hdhadhadadsadas',0,'htppms s'),(5,'ajjda','samsnda,','sasadmasda',0,'ssadmads');
/*!40000 ALTER TABLE `register_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `work_desc` varchar(255) DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr6daagag941p6h9fcb0yjkbdf` (`type`),
  CONSTRAINT `FKr6daagag941p6h9fcb0yjkbdf` FOREIGN KEY (`type`) REFERENCES `user_types` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schemes`
--

DROP TABLE IF EXISTS `schemes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schemes` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `sname` varchar(100) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `link` varchar(100) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schemes`
--

LOCK TABLES `schemes` WRITE;
/*!40000 ALTER TABLE `schemes` DISABLE KEYS */;
INSERT INTO `schemes` VALUES (1,'PMFBY','Pradhan Mantri Fasal Bima Yojana','https://pmfby.gov.in/','2023-03-01','2023-04-01'),(2,'NABARD','नाबार्ड - राष्ट्रीय कृषि और ग्रामीण विकास बैंक - NABARD','https://www.nabard.org/hindi/content1.aspx?id=593&catid=23&mid=530','2023-03-01','2023-04-01');
/*!40000 ALTER TABLE `schemes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `type` int DEFAULT NULL,
  `aadharcard_no` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `aadharcard_no_UNIQUE` (`aadharcard_no`),
  KEY `FKk2edcj7d6hj5v9qk89fyu4smf` (`type`),
  CONSTRAINT `FKk2edcj7d6hj5v9qk89fyu4smf` FOREIGN KEY (`type`) REFERENCES `user_types` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Harshad',1,'454566667777','pune','9898938898','harshad@gmail.com','Ghongade','harshad9507','harshad9507'),(2,'abhi',2,'787897889789','pune','9898937898','uhdsjiak@gmail.com','varma','abhi14','abhi14'),(3,'Diksha',3,'78789666689','pune','420420420','Ghatakkashi@gmail.com','upi','diksha12','diksha12'),(4,'suraj',1,'419997037446','pune','0707070707','svchechare@gmail.com','chechare','suraj0707','suraj0707'),(34,'chintu',1,'123456586586','dadadjha','22331546163','shdhsa@gmail.com','mintu','chintumintu','chintumintu');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_types`
--

DROP TABLE IF EXISTS `user_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_types` (
  `type` int NOT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_types`
--

LOCK TABLES `user_types` WRITE;
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;
INSERT INTO `user_types` VALUES (1,'Villagers'),(2,'Gramsevak'),(3,'PDO');
/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userproblem`
--

DROP TABLE IF EXISTS `userproblem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userproblem` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `area` varchar(255) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `probdesc` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `useridfk` int DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userproblem`
--

LOCK TABLES `userproblem` WRITE;
/*!40000 ALTER TABLE `userproblem` DISABLE KEYS */;
INSERT INTO `userproblem` VALUES (3,'pune','2023-02-24 05:30:00.000000','mosquitoes problem',1,4),(4,'nsbddbsdd','2023-03-01 05:30:00.000000','tggyjyili;/p\'[/;',0,4),(5,'bnyhiu7','2023-03-03 05:30:00.000000','sssssss',2,1);
/*!40000 ALTER TABLE `userproblem` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-11 23:06:08
