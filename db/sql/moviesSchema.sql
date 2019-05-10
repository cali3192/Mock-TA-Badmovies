CREATE DATABASE IF NOT EXISTS favorites;

USE favorites;

CREATE TABLE IF NOT EXISTS movies (
  id INT,
  img_path VARCHAR(255) NOT NULL,
  popularity INT NOT NULL,
  release_date INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);