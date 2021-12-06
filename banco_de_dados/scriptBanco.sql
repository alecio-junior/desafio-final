/*script para criação das tabelas no elephantsql*/

CREATE TABLE campanhas (
campanha_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
descricao VARCHAR NOT NULL
)

CREATE TABLE leads (
lead_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
telefone VARCHAR NOT NULL,
campanha_id INT NOT NULL,
CONSTRAINT fk_campanha FOREIGN KEY (campanha_id) REFERENCES campanhas (campanha_id)
)

CREATE TABLE administradores (
admin_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
senha VARCHAR NOT NULL,
email VARCHAR NOT NULL
)
