SHOW DATABASES;

CREATE DATABASE programacion;
USE programacion;

CREATE TABLE lenguajes_programacion
(
	id INT NOT NULL auto_increment,
    nombre VARCHAR(255) NOT NULL,
    anio_salida INT NOT NULL,
    github_rank INT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME on UPDATE CURRENT_TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

show tables;
-- drop table lenguajes_programacion; --

INSERT INTO lenguajes_programacion(
	nombre,
    anio_salida,
    github_rank
) VALUES 
	('JavaScript', 1995, 1)
    
SELECT * FROM lenguajes_programacion; 

INSERT INTO lenguajes_programacion(
	nombre,
    anio_salida,
    github_rank
) VALUES 
	('Python', 1991, 2),
	('Java', 1995, 3),   
    ('TypeScript', 2012, 4),
    ('C#', 2000, 5)
    
SELECT * FROM lenguajes_programacion; 
SELECT id, nombre FROM lenguajes_programacion;
SELECT * FROM lenguajes_programacion WHERE nombre = 'JavaScript';
SELECT * FROM lenguajes_programacion WHERE anio_salida = 1995;

-- HTML: No es un lenguaje de programación, pero tranqui, ahorita lo arreglamos...  --
INSERT INTO lenguajes_programacion(
	nombre,
    anio_salida,
    github_rank
) VALUES 
	('HTML', 1993, 6)
SELECT * FROM lenguajes_programacion;
DELETE FROM lenguajes_programacion WHERE id = 6;


INSERT INTO lenguajes_programacion(
	id,
	nombre,
    anio_salida,
    github_rank
) VALUES 
	(15, 'Datito', 2002, 7)
SELECT * FROM lenguajes_programacion;   
DELETE FROM lenguajes_programacion WHERE id = 15;
    
    
-- No puedes ejecutar estos comandos en safety mode --
UPDATE lenguajes_programacion
SET anio_salida = 1995
WHERE nombre = 'JavaScript';

DELETE FROM lenguajes_programacion WHERE nombre = HTML;