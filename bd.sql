CREATE DATABASE plataforma_marcacao_eventos; 
-- DROP DATABASE plataforma_marcacao_eventos; 
USE plataforma_marcacao_eventos;  

CREATE TABLE Organizacao (    
 ID int PRIMARY KEY not null AUTO_INCREMENT, 
 cnpj char(21), 
 responsavel varchar(100), 
 nome_organizacao varchar(100),
 localizacao_organizacao varchar(100) 
);  

CREATE TABLE Evento (   
 ID int PRIMARY KEY not null AUTO_INCREMENT,  
 nome_evento varchar(200),  
 descricao_evento text, 
 data_evento datetime, 
 localizacao_evento text, 
 ID_organizacao int not null,
 FOREIGN KEY (ID_organizacao) references Organizacao(ID)
 );  

CREATE TABLE Estrategia (     
ID int PRIMARY KEY not null AUTO_INCREMENT, 
descricao_estrategia text,
tipo_estrategia text, 
efetividade varchar(200)
 );  

CREATE TABLE Estrategias_eventos (     
ID_estrategia int not null,     
ID_evento int not null,   
PRIMARY KEY(ID_estrategia,ID_evento),
FOREIGN KEY (ID_estrategia) REFERENCES Estrategia(ID),
FOREIGN KEY (ID_evento) REFERENCES Evento(ID)
);



-- ---------------------------------------------Povoando as tabelas----------------------------------------

-- Organizacao

SELECT * FROM Organizacao;
SELECT * FROM Evento;
SELECT * FROM Estrategia;