-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: heroes
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.2

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
-- Table structure for table `caractere`

CREATE DATABASE heroes;--


DROP TABLE IF EXISTS `caractere`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caractere` (
  `heroes_id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `resourceuri` varchar(255) DEFAULT NULL,
  `comic_id` bigint DEFAULT NULL,
  `event_id` bigint DEFAULT NULL,
  `storiy_id` bigint DEFAULT NULL,
  `img_id` bigint DEFAULT NULL,
  `url_id` bigint DEFAULT NULL,
  `serie_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`heroes_id`),
  KEY `FKrb3vmhu52nwme24hyy8emo2s1` (`comic_id`),
  KEY `FKrtrj3rqab8rdosc9rotkicuri` (`event_id`),
  KEY `FKo01049nrgc8l7v1a8n06raqay` (`storiy_id`),
  KEY `FKshvd4qhjnrdoj796bo4rdj6ub` (`img_id`),
  KEY `FK9upeq9v4s282fsbp2pdlog3dc` (`url_id`),
  CONSTRAINT `FKo01049nrgc8l7v1a8n06raqay` FOREIGN KEY (`storiy_id`) REFERENCES `storylist` (`id`),
  CONSTRAINT `FKrb3vmhu52nwme24hyy8emo2s1` FOREIGN KEY (`comic_id`) REFERENCES `comiclist` (`id`),
  CONSTRAINT `FKrtrj3rqab8rdosc9rotkicuri` FOREIGN KEY (`event_id`) REFERENCES `eventolista` (`id`),
  CONSTRAINT `FKshvd4qhjnrdoj796bo4rdj6ub` FOREIGN KEY (`img_id`) REFERENCES `images` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1011335 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caractere`
--

LOCK TABLES `caractere` WRITE;
/*!40000 ALTER TABLE `caractere` DISABLE KEYS */;
INSERT INTO `caractere` VALUES (1011334,'breve desc','1988-11-01 00:00:00','3-D Man\"','http://gateway.marvel.com/v1/public/characters/1011334',1,1,2,1,1,'1');
/*!40000 ALTER TABLE `caractere` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comic`
--

DROP TABLE IF EXISTS `comic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `digitalId` int DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `issueNumber` int DEFAULT NULL,
  `variantDescription` varchar(150) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `modified` date DEFAULT NULL,
  `isbn` varchar(150) DEFAULT NULL,
  `upc` varchar(150) DEFAULT NULL,
  `diamondCode` varchar(150) DEFAULT NULL,
  `ean` varchar(150) DEFAULT NULL,
  `issn` varchar(150) DEFAULT NULL,
  `format` varchar(150) DEFAULT NULL,
  `pageCount` int DEFAULT NULL,
  `resourceURI` varchar(150) DEFAULT NULL,
  `comics_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comics_id` (`comics_id`),
  CONSTRAINT `comic_ibfk_1` FOREIGN KEY (`comics_id`) REFERENCES `caractere` (`heroes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22507 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comic`
--

LOCK TABLES `comic` WRITE;
/*!40000 ALTER TABLE `comic` DISABLE KEYS */;
INSERT INTO `comic` VALUES (22506,10949,'Avengers: The Initiative (2007)',19,'','oin 3-D MAN, CLOUD 9, KOMODO, HARDBALL','1988-11-01','','5960606084-01911','SEP082362',NULL,NULL,'Comic',32,'http://gateway.marvel.com/v1/public/comics/22506',1011334);
/*!40000 ALTER TABLE `comic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comiclist`
--

DROP TABLE IF EXISTS `comiclist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comiclist` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `available_comic` int NOT NULL,
  `collectionuri_comic` varchar(255) DEFAULT NULL,
  `returned_comic` int NOT NULL,
  `comic_sumary_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9u28k6e78p7nf9k0ih49jmevk` (`comic_sumary_id`),
  CONSTRAINT `FK9u28k6e78p7nf9k0ih49jmevk` FOREIGN KEY (`comic_sumary_id`) REFERENCES `comicsumaries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comiclist`
--

LOCK TABLES `comiclist` WRITE;
/*!40000 ALTER TABLE `comiclist` DISABLE KEYS */;
INSERT INTO `comiclist` VALUES (1,12,'http://gateway.marvel.com/v1/public/characters/1011334/comics',12,1);
/*!40000 ALTER TABLE `comiclist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comicsumaries`
--

DROP TABLE IF EXISTS `comicsumaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comicsumaries` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `resourceuri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comicsumaries`
--

LOCK TABLES `comicsumaries` WRITE;
/*!40000 ALTER TABLE `comicsumaries` DISABLE KEYS */;
INSERT INTO `comicsumaries` VALUES (1,'Avengers: The Initiative (2007)','http://gateway.marvel.com/v1/public/comics/21366');
/*!40000 ALTER TABLE `comicsumaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conteudo`
--

DROP TABLE IF EXISTS `conteudo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conteudo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `conta` int NOT NULL,
  `limite` int NOT NULL,
  `mumerooffset` int NOT NULL,
  `total` int NOT NULL,
  `results_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdu1v28qt3ocvfks86gphao4sx` (`results_id`),
  CONSTRAINT `FKdu1v28qt3ocvfks86gphao4sx` FOREIGN KEY (`results_id`) REFERENCES `caractere` (`heroes_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conteudo`
--

LOCK TABLES `conteudo` WRITE;
/*!40000 ALTER TABLE `conteudo` DISABLE KEYS */;
/*!40000 ALTER TABLE `conteudo` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `resourceURI` varchar(150) DEFAULT NULL,
  `modified` date DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `events_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `events_id` (`events_id`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`events_id`) REFERENCES `caractere` (`heroes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=270 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (269,'Secret Invasion','The shape-shifting Skrulls have been ','http://gateway.marvel.com/v1/public/events/269','1988-11-01','1988-07-01','2019-11-01',1011334);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventolista`
--

DROP TABLE IF EXISTS `eventolista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventolista` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `collectionuri_event` varchar(255) DEFAULT NULL,
  `available_event` int NOT NULL,
  `returned_event` int NOT NULL,
  `ev_sumary_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKscfk0bti1nictnjf627swqblt` (`ev_sumary_id`),
  CONSTRAINT `FKscfk0bti1nictnjf627swqblt` FOREIGN KEY (`ev_sumary_id`) REFERENCES `eventsumaries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventolista`
--

LOCK TABLES `eventolista` WRITE;
/*!40000 ALTER TABLE `eventolista` DISABLE KEYS */;
INSERT INTO `eventolista` VALUES (1,'http://gateway.marvel.com/v1/public/characters/1011334/series',6,1,1);
/*!40000 ALTER TABLE `eventolista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventsumaries`
--

DROP TABLE IF EXISTS `eventsumaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventsumaries` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name_event` varchar(255) DEFAULT NULL,
  `resourceuri_event` varchar(255) DEFAULT NULL,
  `eventlist_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_eventsumaries_1_idx` (`eventlist_id`),
  CONSTRAINT `fk_eventsumaries_1` FOREIGN KEY (`eventlist_id`) REFERENCES `eventolista` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventsumaries`
--

LOCK TABLES `eventsumaries` WRITE;
/*!40000 ALTER TABLE `eventsumaries` DISABLE KEYS */;
INSERT INTO `eventsumaries` VALUES (1,'Avengers: The Initiative (2007)','http://gateway.marvel.com/v1/public/comics/21366',1);
/*!40000 ALTER TABLE `eventsumaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `extension` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'jpg','http://marvel.dl.llnw.net/wdig/marvel/u/prod/marvel/i/mg/c/e0/535fecbbb9784/');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `resourceURI` varchar(150) DEFAULT NULL,
  `startYear` bigint DEFAULT NULL,
  `endYear` bigint DEFAULT NULL,
  `rating` varchar(250) DEFAULT NULL,
  `modified` date DEFAULT NULL,
  `series_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `series_id` (`series_id`),
  CONSTRAINT `series_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `caractere` (`heroes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1946 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1945,'Avengers: The Initiative','null','http://gateway.marvel.com/v1/public/series/1945',2007,2010,'T','2013-11-01',1011334);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serieslist`
--

DROP TABLE IF EXISTS `serieslist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `serieslist` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `available_serie` int NOT NULL,
  `collectionuri_serie` varchar(255) DEFAULT NULL,
  `returned_serie` int NOT NULL,
  `sumarie_id` bigint DEFAULT NULL,
  `caractere_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_serieslist_1_idx` (`sumarie_id`),
  KEY `fk_caractere_2` (`caractere_id`),
  CONSTRAINT `fk_caractere_2` FOREIGN KEY (`caractere_id`) REFERENCES `caractere` (`heroes_id`),
  CONSTRAINT `fk_serieslist_1` FOREIGN KEY (`sumarie_id`) REFERENCES `seriesumaries` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serieslist`
--

LOCK TABLES `serieslist` WRITE;
/*!40000 ALTER TABLE `serieslist` DISABLE KEYS */;
INSERT INTO `serieslist` VALUES (1,3,'http://gateway.marvel.com/v1/public/characters/1011334/series',3,1,1011334);
/*!40000 ALTER TABLE `serieslist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seriesumaries`
--

DROP TABLE IF EXISTS `seriesumaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seriesumaries` (
  `id` bigint NOT NULL,
  `name_serie` varchar(255) DEFAULT NULL,
  `resourceuri_serie` varchar(255) DEFAULT NULL COMMENT '	',
  `Id_list` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_seriesumaries_1_idx` (`Id_list`),
  CONSTRAINT `fk_seriesumaries_1` FOREIGN KEY (`Id_list`) REFERENCES `serieslist` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seriesumaries`
--

LOCK TABLES `seriesumaries` WRITE;
/*!40000 ALTER TABLE `seriesumaries` DISABLE KEYS */;
INSERT INTO `seriesumaries` VALUES (1,'INCRIVEL','http://...',1),(2,'SUPER','http://...',1);
/*!40000 ALTER TABLE `seriesumaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `story` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `resourceURI` varchar(150) DEFAULT NULL,
  `type` varchar(150) DEFAULT NULL,
  `modified` date DEFAULT NULL,
  `stories_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stories_id` (`stories_id`),
  CONSTRAINT `story_ibfk_1` FOREIGN KEY (`stories_id`) REFERENCES `caractere` (`heroes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19948 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (19947,'Cover #19947','\"description here\"','http://gateway.marvel.com/v1/public/stories/19947','cover','1988-11-01',1011334);
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storylist`
--

DROP TABLE IF EXISTS `storylist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storylist` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `available_story` int NOT NULL,
  `collectionuri_story` varchar(255) DEFAULT NULL,
  `returned_story` int NOT NULL,
  `story_sumary_id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storylist`
--

LOCK TABLES `storylist` WRITE;
/*!40000 ALTER TABLE `storylist` DISABLE KEYS */;
INSERT INTO `storylist` VALUES (2,12,'http://gateway.marvel.com/v1/public/characters/1011334/comics',12,1);
/*!40000 ALTER TABLE `storylist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storysumaries`
--

DROP TABLE IF EXISTS `storysumaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storysumaries` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `namestory` varchar(255) DEFAULT NULL,
  `resourceuri_story` varchar(255) DEFAULT NULL,
  `type_story` varchar(255) DEFAULT NULL,
  `idrel` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_storylist_idx` (`idrel`),
  KEY `fk_storylist2_idx` (`idrel`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storysumaries`
--

LOCK TABLES `storysumaries` WRITE;
/*!40000 ALTER TABLE `storysumaries` DISABLE KEYS */;
INSERT INTO `storysumaries` VALUES (1,'Thor','http://gateway.marvel.com/v1/public/comics/21366',NULL,1);
/*!40000 ALTER TABLE `storysumaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `url`
--

DROP TABLE IF EXISTS `url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `url` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `url`
--

LOCK TABLES `url` WRITE;
/*!40000 ALTER TABLE `url` DISABLE KEYS */;
INSERT INTO `url` VALUES (1,'detail','https://www.marvel.com/characters/3-d-man-chandler?utm_campaign=apiRef&utm_source=1848dd321a904e8d2d59f6e64cdb3922');
/*!40000 ALTER TABLE `url` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wraper`
--

DROP TABLE IF EXISTS `wraper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wraper` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `attributionhtml` varchar(255) DEFAULT NULL,
  `attributiontext` varchar(255) DEFAULT NULL,
  `code` int NOT NULL,
  `copyright` varchar(255) DEFAULT NULL,
  `etag` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `cha_data_cont_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlqxxx51qsh7250vj60ixg23fq` (`cha_data_cont_id`),
  CONSTRAINT `FKlqxxx51qsh7250vj60ixg23fq` FOREIGN KEY (`cha_data_cont_id`) REFERENCES `conteudo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wraper`
--

LOCK TABLES `wraper` WRITE;
/*!40000 ALTER TABLE `wraper` DISABLE KEYS */;
/*!40000 ALTER TABLE `wraper` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-09  8:52:29

/* FOREIGN KEY de COMICSSUMARIES PARA COMICLIST  */
ALTER TABLE `apimarvel`.`comiclist` 
ADD COLUMN `comiclist_id` BIGINT NULL AFTER `comic_sumary_id`;


ALTER TABLE `heroes`.`comicsumaries` 
ADD CONSTRAINT `fk_comicsumaries_2`
  FOREIGN KEY (`comiclist_id`)
  REFERENCES `heroes`.`comiclist` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

UPDATE `heroes`.`comicsumaries` SET `comiclist_id` = '1' WHERE (`id` = '1');

ALTER TABLE `heroes`.`comicsumaries` 
CHANGE COLUMN `name` `name_comic` VARCHAR(255) NULL DEFAULT NULL ,
CHANGE COLUMN `resourceuri` `resourceuri_comic` VARCHAR(255) NULL DEFAULT NULL ;


/* Melhorando relacionamento entre comiclist e caractere */
ALTER TABLE `heroes`.`comiclist` 
ADD COLUMN `caractere_id` BIGINT NULL AFTER `comic_sumary_id`,
ADD INDEX `fk_comiclist_1_idx` (`caractere_id` ASC) VISIBLE;
;
ALTER TABLE `heroes`.`comiclist` 
ADD CONSTRAINT `fk_comiclist_1`
  FOREIGN KEY (`caractere_id`)
  REFERENCES `heroes`.`caractere` (`heroes_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

  UPDATE `heroes`.`comiclist` SET `caractere_id` = '1011334' WHERE (`id` = '1');
