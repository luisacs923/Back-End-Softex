import connection from "../db/database.js";

import { Estrategia } from "../entity/Estrategia.js";
import { Estrategiaservice } from "../service/Estrategiaservice.js";

//ESTRATEGIAS
const estrategiaservice = new Estrategiaservice();

//let listaDeEstrategia = await estrategiaservice.listEstrategia(); 
//console.log(listaDeEstrategia);

// const ReadEstrategia = await estrategiaservice.readEstrategia(1);
// console.log(ReadEstrategia);

// estrategiaservice.createEstrategia('Processamento de resíduos orgânicos para produzir adubo natural', 'Compostagem', 'Boa');

// const update =  new Estrategia('Processamento de resíduos orgânicos para produzir adubo natural', 'Compostagem', 'Excelente');
// estrategiaservice.updateEstrategia(2, update);

//estrategiaservice.deleteEstrategia(2)

//Quais são as Estratégias do Evento x?
// const estFromEvento = await estrategiaservice.readEstrategiaFromEvento(6);
// console.log(estFromEvento);

connection.close();