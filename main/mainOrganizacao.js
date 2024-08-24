
//Dependencias
import connection from "../db/database.js";

import { Organizacao } from "../entity/Organizacao.js";
import { Organizacaoservice } from "../service/Organizacaoservice.js";


//ORGANIZACOES
const organizacaoService = new Organizacaoservice();
// organizacaoService.createOrganizacao('23.456.789/0001-01','Carlos Pereira','Verde Futuro','Rio de Janeiro, RJ');

// const update = new Organizacao('12.345.678/0001-90','Luisa Silva','EcoEvento','São Paulo, SP');
// organizacaoService.updateOrganizacao(1, update);

organizacaoService.deleteOrganizacao(4);

//let listaDeOrganizacao = await organizacaoService.listOrganizacao();
//console.log(listaDeOrganizacao);

//const ReadOrganizacao = await organizacaoService.readOrganizacao(3);
//console.log(ReadOrganizacao)

// Quais sao os Eventos e Estrategias relacionadas a uma Organizacao?
//const readallorganizacao = await organizacaoService.readAllFromOrganizacao(1);
//console.log(readallorganizacao);



connection.close();


