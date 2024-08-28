import { Estrategia } from "../entity/Estrategia.js";
import { EstrategiaRepository } from "../repository/Estrategiarepository.js";
import { Estrategias_eventosRepository } from "../repository/Estrategias_eventosRepository.js";

export class Estrategiaservice{
    constructor(){
        this.estrategiarepository = new EstrategiaRepository();
        this.estrategiaeventorepository = new Estrategias_eventosRepository();
    }

    async createEstrategia(descricao_estrategia,tipo_estrategia,efetividade){
        if(!(descricao_estrategia || tipo_estrategia || efetividade)){
            console.log("ERRO: dados incompletos!")
        } else {
            try {
                const estrategia = new Estrategia(descricao_estrategia,tipo_estrategia,efetividade);
                await this.estrategiarepository.create(estrategia);
            } catch(error){
                console.log("ERRO: ", error);
            }
        }
    }


    async readEstrategia(id){
        if(id === '' || !id){
            console.log('Erro: O id não pode ser vazio!');
        } else {
            try{
                const estrategia = await this.estrategiarepository.read(id);
                return estrategia;
            } catch (error){
                console.log("ERRO: ", error);
            }
        }
    }

    async listEstrategia(){
        try {
            const estrategiaList = await this.estrategiarepository.list();
            return estrategiaList;
        } catch (error){
            console.log("ERRO: ", error);
        }
    }

    async updateEstrategia(id, estrategia){
        if(!(id || estrategia) || (id === '' || estrategia === '')){
            console.log('ERRO: o id ou campos da Estrategia não podem ser vazios!')
        } else {
            try{
                await this.estrategiarepository.update(id, estrategia);
            } catch(error){
                console.log("ERRO: ", error);
            }
        }
    }


    async deleteEstrategia(id){
        if(id === '' || !id) {
            console.log('ERRO: O id não pode ser vazio!');
            
        } else {
            try{
                const deleteResults = await this.estrategiarepository.delete(id);
                return deleteResults;
            } catch(error){
                console.log("ERRO: ", error);
            }
        }
    }

    async readEstrategiaFromEvento(ID_evento){
        if(ID_evento === '' || !ID_evento){
            console.log('ERRO: o id não pode ser vazio');
        } else {
            try {
                const estrategias = await this.estrategiaeventorepository.estrFromEven(ID_evento);
                return estrategias;
            } catch (error){
                console.log("ERRO: ", error);
            }
        }
    }

}