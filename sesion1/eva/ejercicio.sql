CREATE USER cduran WITH PASSWORD 'cduran';
CREATE DATABASE modulo7_sesion1 OWNER cduran;

CREATE TABLE IF NOT EXISTS estudiantes (
    id SERIAL,
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    edad VARCHAR(10),
    nro_identificacion INT
    );

INSERT INTO
    estudiantes (nombres, apellidos, edad, nro_identificacion)
VALUES
    ('Claudia','Acuña','32',1099),
    ('Gabriel','Duran','28',1100),
    ('Aurora','Acuña','30',1101);

CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL,
    titulo VARCHAR(80),
    descripcion VARCHAR(80)
    );

