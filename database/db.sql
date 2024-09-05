CREATE DATABASE contactodb;

CREATE TABLE Contacto(
    id SERIAL PRIMARY KEY, 
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    correo VARCHAR(255),
    direccion VARCHAR(255) ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Contacto (nombre, apellido, correo, direccion) 
VALUES 
('Michel', 'Gutierrez', 'magutierrez@gmail.com', 'Calle 2A # 20 - 00, Pandiguando');
INSERT INTO Contacto (nombre, apellido, correo, direccion) 
VALUES 
('Mannuel', 'Granoble', 'mfgranoble@gmail.com', 'Carrera 18 bn Esmeralda');

CREATE TABLE Telefono (
    id SERIAL PRIMARY KEY,
    contacto_id INT REFERENCES Contacto(id) ON DELETE CASCADE,
    tipo VARCHAR(5), --Ej: movil, fijo
    numero_telefono VARCHAR(20) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO telefono  (contacto_id, tipo, numero_telefono)
VALUES
(1, 'movil', '3104411267');
INSERT INTO telefono  (contacto_id, tipo, numero_telefono)
VALUES
(1, 'fijo', '82333456');
INSERT INTO telefono  (contacto_id, tipo, numero_telefono)
VALUES
(2, 'movil', '3127242012');