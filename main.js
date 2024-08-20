
//Dependencias
import connection from "./db/database.js";

import { Organizacao } from "./entity/Organizacao.js";
import { Organizacaoservice } from "./service/Organizacaoservice.js";

import {Evento} from "./entity/Evento.js";
import { EventoRepository } from "./repository/Eventorepository.js";

import { Estrategia } from "./entity/Estrategia.js";
import { EstrategiaRepository } from "./repository/Estrategiarepository.js";

import {Estrategias_eventos} from "./entity/Estrategias_eventos.js";
import { Estrategias_eventosRepository } from "./repository/Estrategias_eventosRepository.js";

const organizacaoService = new Organizacaoservice();


// let listaDeOrganizacao = await organizacaoService.listOrganizacao();
// console.log(listaDeOrganizacao);


// organizacaoService.createOrganizacao('23.456.789/0001-01','Carlos Pereira','Verde Futuro','Rio de Janeiro, RJ');

//ESTRATEGIAS_EVENTOS FALTA TERMINAR
//ESTRATEGIAS_EVENTOS FALTA TERMINAR
//ESTRATEGIAS_EVENTOS FALTA TERMINAR
//ESTRATEGIAS_EVENTOS FALTA TERMINAR
//ESTRATEGIAS_EVENTOS FALTA TERMINAR
//ESTRATEGIAS_EVENTOS FALTA TERMINAR
//ESTRATEGIAS_EVENTOS FALTA TERMINAR
//ESTRATEGIAS_EVENTOS FALTA TERMINAR

const update = new Organizacao('12.345.678/0001-90','Ana Costa','EcoEvento','São Paulo, SP');
organizacaoService.updateOrganizacao(1, update);
const listaOrganizacao = await organizacaoService.listOrganizacao();
console.log(listaOrganizacao);
connection.close();


// TERMINEI TESTA DPS
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// TERMINEI TESTA DPS
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// TERMINEI TESTA DPS
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// TERMINEI TESTA DPS
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// TERMINEI TESTA DPS
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// TERMINEI TESTA DPS
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------
// OI LUIZA TESTA DPS  <<<<<<<<<<<<<<<<<<<<-------------------------------------------------------------


