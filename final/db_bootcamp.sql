
CREATE DATABASE db_bootcamp;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

CREATE TABLE bootcamp (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cue INTEGER NOT NULL CHECK (cue >= 5 AND cue <= 10),
    description VARCHAR(255) NOT NULL
);

