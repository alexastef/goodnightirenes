DROP DATABASE IF EXISTS `irenes_db`;
CREATE DATABASE `irenes_db`;
USE `irenes_db`;

CREATE TABLE beers (
  id int NOT NULL AUTO_INCREMENT,
  up_next BOOLEAN DEFAULT false,
  name varchar(60) NOT NULL,
  location varchar(60) NOT NULL,
  abv DECIMAL(10,2) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  style varchar(60) NOT NULL,
  glass varchar(60) NOT NULL,

  PRIMARY KEY (id)
);