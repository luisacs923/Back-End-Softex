import connection from "../db/database.js";

import { Evento } from "../entity/Evento.js";
import { EventoService } from "../service/Eventoservice.js";
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

//quais sao os Eventos Relacionados a uma Estrategia?
//const readAllfromEstrategia = await eventoservice.readInfofromEstrategia(2);
//console.log(readAllfromEstrategia);

//quero associar estrategias a um Evento:
await eventoservice.associateEstrategias(5, [1,2,3]);
const readevento = await eventoservice.readEvento(5);
console.log(readevento);

connection.close();