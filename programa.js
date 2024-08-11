import { Organizacao, readOrganizacao, eventosOrganizacao } from "./Entidades/Organizacao.js";

console.log("Ola mundo!");

// const Softex = new Organizacao('123', 'Gustavo', 'Softex', 'Recife') // Cria no JS o objeto
// Softex.create();
const obj = await Organizacao.read(1);
obj.cnpj = '12369';
obj.update();

Organizacao.quantidade();