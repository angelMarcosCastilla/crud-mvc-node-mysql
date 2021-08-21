CREATE DATABASE crudmysql;

CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(30),
  apelllido VARCHAR(50),
  edad INT
);
    
INSERT INTO users (nombre, apellido, edad ) VALUES ("angel", "Marcos Castilla", 21);
    