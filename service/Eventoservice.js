import { Evento } from "../entity/Evento.js";
import { Estrategias_eventosRepository } from "../repository/Estrategias_eventosRepository.js";
import { EventoRepository } from "../repository/Eventorepository.js";

export class EventoService{
    constructor(){
        this.eventorepository = new EventoRepository();
        this.estrategiaeventorepository = new Estrategias_eventosRepository();
    }

    async createEvento(nome_evento,descricao_evento,data_evento,localizacao_evento,ID_organizacao){
        if(!(nome_evento || descricao_evento || data_evento || localizacao_evento  || ID_organizacao)){
            console.log(`ERRO: dados incompletos!`);
        } else {
            try{
                const evento = new Evento(nome_evento,descricao_evento,data_evento,localizacao_evento,ID_organizacao);
                await this.eventorepository.create(evento);      
            } catch(error){
                console.log(`ERRO: `,error);
            }
        }
    }

    async readEvento(id){
        if(id === '' || !id){
            console.log('Erro: O id não pode ser vazio!')
        } else {
            try{
                const evento = await this.eventorepository.read(id);
                return evento;
            } catch (error){
                console.log("ERRO: ", error);
            }
        }
    }

    async listEvento(){
        try {
            const eventoList = await this.eventorepository.list();
            return eventoList;
        } catch (error){
            console.log("ERRO: ", error);
        }
    }

    async listEventoPorOrganizacao(ID_organizacao) {
        try {
            const eventoList = await this.eventorepository.listByOrganizacao(ID_organizacao);
            const eventoListComEstrategias = await Promise.all(eventoList.map(async evento => {
                const estrategias = await this.estrategiaeventorepository.estrFromEven(evento.ID)
                return {...evento, estrategias}
            }))
            return eventoListComEstrategias;
        } catch(error) {
            console.log("ERRO: ", error);
            // throw new Error("ERRO: " + error);
        }
    }

    async updateEvento(id, evento) {
        if(!(id || evento) || (id === '' || evento === '')){
            console.log('ERRO: o id ou campos do Evento não podem ser vazios!')
        } else {
            try{
                await this.eventorepository.update(id, evento);
            } catch(error){
                console.log("ERRO: ", error);
            }
        }
    }

    async deleteEvento(id){
        if(id === '' || !id) {
            console.log('ERRO: O id não pode ser vazio!');
        } else {
            try{
                const resultDelete  = await this.eventorepository.delete(id);
                return resultDelete;
            } catch(error){
                console.log("ERRO: ", error);
            }
        }
    }

    async readInfofromEstrategia(ID_estrategia){
        if(ID_estrategia === '' || !ID_estrategia){
            console.log('ERRO: o id não pode ser vazio');
        } else {
            try{
                const eventoEst = await this.estrategiaeventorepository.infoFromEstrategia(ID_estrategia);
                return eventoEst;
                } catch(error){
                console.log(error);
            }
        }
    }

    async associateEstrategias( ID_evento, estrategias){
        if(ID_evento === '' || !ID_evento){
            console.log('ERRO: o id não pode ser vazio');
        } else {
            try{
                await this.estrategiaeventorepository.updateEventoEstrategia(ID_evento,estrategias);
            } catch(error){
                console.log(error);
            }
        }
    }
}