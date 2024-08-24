import { Evento } from "../entity/Evento.js";
import { EventoRepository } from "../repository/Eventorepository.js";

export class EventoService{
    constructor(){
        this.eventorepository = new EventoRepository();
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
                await this.eventorepository.delete(id);
            } catch(error){
                console.log("ERRO: ", error);
            }
        }
    }

    async readOrganization(ID){
        if(ID ==="" || !ID){
            console.log('ERRO: O id não pode ser vazio!')
        } else {
            try{
                const eventoOrgs = await this.eventorepository.readEventoOrganizacao(ID);
                return eventoOrgs;
            } catch(error){
                console.log(error)
            }
        }
    }
}