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
 FOREIGN KEY (ID_organizacao) references Organizacao(ID) ON DELETE CASCADE 
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
FOREIGN KEY (ID_estrategia) REFERENCES Estrategia(ID) ON DELETE CASCADE,
FOREIGN KEY (ID_evento) REFERENCES Evento(ID) ON DELETE CASCADE 
);



-- ---------------------------------------------Povoando as tabelas----------------------------------------

-- Organizacao

SELECT * FROM Organizacao;
SELECT * FROM Evento;
SELECT * FROM Estrategia;
SELECT * FROM Estrategias_eventos;

----------------------------------------------------------------------------------------------------------

-- Organizacao
INSERT INTO Organizacao (cnpj,responsavel,nome_organizacao,localizacao_organizacao)
VALUES
('12.345.678/0001-90','Ana Costa','EcoEvento','São Paulo, SP'),
('23.456.789/0001-01','Carlos Pereira','Verde Futuro','Rio de Janeiro, RJ'),
('34.567.890/0001-12','João Silva',	'Sustenta','Belo Horizonte, MG'),
('45.678.901/0001-23','Maria Oliveira',	'Recicla Já','Curitiba, PR');

-- Evento
INSERT INTO Evento (nome_evento, descricao_evento, data_evento, localizacao_evento, ID_organizacao)
VALUES
('Dia do Meio Ambiente', 'Evento dedicado à promoção de práticas sustentáveis.', '2024-09-15', 'Parque Ibirapuera, SP', 1),
('Festival Verde', 'Festival com diversas atividades sobre reciclagem e compostagem.', '2024-10-05', 'Praça da Bandeira, RJ', 2),
('Feira de Sustentabilidade', 'Feira com exposições e workshops sobre técnicas de redução de desperdício.', '2024-11-20', 'Centro de Convenções, MG', 3),
('Seminário EcoInova', 'Seminário sobre inovações tecnológicas em gestão de resíduos.', '2024-12-12', 'Auditório Central, PR', 4),
('Oficina de Compostagem', 'Oficina prática sobre técnicas de compostagem doméstica.', '2024-08-30', 'Casa da Cultura, SP', 1),
('Limpeza Urbana', 'Evento de limpeza e coleta seletiva em áreas públicas.', '2024-09-22', 'Bairro Jardim, RJ', 2),
('Congresso de Reciclagem', 'Congresso sobre novos avanços e tecnologias em reciclagem.', '2024-10-15', 'Centro de Eventos, MG', 3);

-- Estrategia
INSERT INTO Estrategia (descricao_estrategia, tipo_estrategia, efetividade)
VALUES
('Coleta e separação de materiais recicláveis como papel, plástico e vidro', 'Reciclagem', 'Excelente'),
('Processamento de resíduos orgânicos para produzir adubo natural', 'Compostagem', 'Boa'),
('Minimização da geração de resíduos por meio de práticas como redução de embalagens e aproveitamento total dos alimentos', 'Redução de desperdício', 'Regular'),
('Reutilização de materiais e produtos para evitar o descarte e reduzir a demanda por novos recursos', 'Reutilização', 'Regular'),
('Programas e workshops para conscientizar a comunidade sobre práticas sustentáveis e redução de resíduos', 'Educação Ambiental', 'Boa'),
('Implementação de práticas para reduzir o uso de embalagens descartáveis e promover alternativas reutilizáveis', 'Redução de Embalagens', 'Boa'),
('Aproveitamento dos resíduos para gerar energia por meio de processos como incineração controlada', 'Recuperação de Energia', 'Regular');

INSERT INTO Estrategias_eventos (ID_estrategia, ID_evento) VALUES
(1,1),
(6,1),
(7,1),
(1,2),
(2,2),
(5,2),
(3,3),
(4,3),
(5,3),
(5,4),
(6,4),
(2,5),
(1,6),
(4,6),
(1,7),
(5,7)