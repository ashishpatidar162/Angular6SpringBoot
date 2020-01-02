/*
SQLyog Enterprise - MySQL GUI v8.14 
MySQL - 5.7.25-log : Database - springboot_demo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`springboot_demo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `springboot_demo`;

/*Table structure for table `employees` */

DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  `id` bigint(20) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `employees` */

insert  into `employees`(`id`,`email_address`,`first_name`,`last_name`) values (5,'anil.patidar@gmail.com','anil','patidar'),(6,'patidar.ashish122@gmail.com','Rahul','Patidar'),(8,'mohan.kumar123@gmail.com','mohan','kumar'),(9,'m.pati123@gmail.com','mohit','Patidar'),(29,'jack.pateal@gmail.com','jack','patel');

/*Table structure for table `hibernate_sequence` */

DROP TABLE IF EXISTS `hibernate_sequence`;

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `hibernate_sequence` */

insert  into `hibernate_sequence`(`next_val`) values (32);

/*Table structure for table `managers` */

DROP TABLE IF EXISTS `managers`;

CREATE TABLE `managers` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `managers` */

insert  into `managers`(`id`,`address`,`company`,`email_address`,`first_name`,`last_name`,`password`) values (26,'48-a panchvati janki nagar indore mp','Logikview','patidarashish162@gmail.com','Ashish','Patidar','sss'),(27,'dassdfsdd','Logikview','sandip.patidar@gmail.com','Sandeep','patidar','1234'),(28,'newzland','cybage','john.thoms@gmail.com','john','thomsan','123abc'),(30,'SPinfocity ,saswad road ,pune','IBM','appi.patel123@gmail.com','arpit','patel','1234abcd'),(31,'jaipur','wipro','rock.thom123@gmail.com','Rock','thomas','1234xyz');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
