CREATE DATABASE practica_db;

CREATE TABLE IF NOT EXISTS estudiantes (
    id SERIAL,
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    edad VARCHAR(10),
    nro_identificacion INT
    );

CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL,
    titulo VARCHAR(80),
    descripcion VARCHAR(80)
    );