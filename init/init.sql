-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS dbteste;

USE dbteste;

-- Cria uma tabela de exemplo
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

-- Insere dados de exemplo
INSERT INTO users (nome, email) VALUES ('John Doe', 'john.doe@example.com');
