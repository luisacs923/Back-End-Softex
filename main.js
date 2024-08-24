
//Dependencias
import connection from "./db/database.js";

import { Organizacao } from "./entity/Organizacao.js";
import { Organizacaoservice } from "./service/Organizacaoservice.js";

// import { Evento } from "./entity/Evento.js";


import { EventoService } from "./service/Eventoservice.js";
import { Estrategia } from "./entity/Estrategia.js";
import { Estrategiaservice } from "./service/Estrategiaservice.js";
import { Evento } from "./entity/Evento.js";

//ORGANIZACOES
const organizacaoService = new Organizacaoservice();
// organizacaoService.createOrganizacao('23.456.789/0001-01','Carlos Pereira','Verde Futuro','Rio de Janeiro, RJ');

// const update = new Organizacao('12.345.678/0001-90','Luisa Silva','EcoEvento','São Paulo, SP');
// organizacaoService.updateOrganizacao(1, update);

//organizacaoService.deleteOrganizacao(2);

//let listaDeOrganizacao = await organizacaoService.listOrganizacao();
//console.log(listaDeOrganizacao);

//const ReadOrganizacao = await organizacaoService.readOrganizacao(3);
//console.log(ReadOrganizacao)

//EVENTOS
const eventoservice = new EventoService();
//eventoservice.createEvento('Oficina de Compostagem', 'Oficina prática sobre técnicas de compostagem doméstica.', '2024-08-30', 'Casa da Cultura, SP', 1);

//const update = new Evento('Dia do Meio Ambiente','Evento dedicado à promoção de práticas sustentáveis.','2024-09-15','Recife-PE',1);
//eventoservice.updateEvento(1,update);

//eventoservice.deleteEvento(3);
//let listaDeEvento = await eventoservice.listEvento();
//console.log(listaDeEvento);

//const ReadEvento = await eventoservice.readEvento(1);
//console.log(ReadEvento); 

const orgsdetail = await eventoservice.readOrganization();
console.log(orgsdetail)

//ESTRATEGIAS
const estrategiaservice = new Estrategiaservice();

//let listaDeEstrategia = await estrategiaservice.listEstrategia(); 
//console.log(listaDeEstrategia);

//const ReadEstrategia = await estrategiaservice.readEstrategia(1);
//console.log(ReadEstrategia);

//estrategiaservice.createEstrategia('Processamento de resíduos orgânicos para produzir adubo natural', 'Compostagem', 'Boa');

//const update =  new Estrategia('Processamento de resíduos orgânicos para produzir adubo natural', 'Compostagem', 'Excelente');
//estrategiaservice.updateEstrategia(2, update);

//estrategiaservice.deleteEstrategia(2);

connection.close();


