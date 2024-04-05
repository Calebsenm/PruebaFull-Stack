
CREATE DATABASE empresadb;

CREATE TABLE empresas(
    id SERIAL PRIMARY KEY NOT NULL,
    nombre_empresa VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL, 
    nit INT NOT NULL, 
    telefono INT NOT NULL, 
    correo VARCHAR(255) NOT NULL
);



