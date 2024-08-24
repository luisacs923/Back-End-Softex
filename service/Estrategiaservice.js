import { Estrategia } from "../entity/Estrategia.js";
import { EstrategiaRepository } from "../repository/Estrategiarepository.js";

export class Estrategiaservice{
    constructor(){
        this.estrategiarepository = new EstrategiaRepository();
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
            console.log('Erro: O id não pode ser vazio!')
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
                await this.estrategiarepository.delete(id);
            } catch(error){
                console.log("ERRO: ", error);
            }
        }
    }
}