
import { Organizacao } from "../entity/Organizacao.js";
import { Organizacaorepository } from "../repository/Organizacaorepository.js";

export class Organizacaoservice{
    constructor(){
        this.organizacaorepository = new Organizacaorepository();
    }

    async  createOrganizacao(cnpj, responsavel, nome_organizacao, localizacao_organizacao){
        if(!(cnpj || responsavel || nome_organizacao || localizacao_organizacao)){
            console.log("ERRO: dados incompletos!");
        }else{
            
            try{
                const organizacao = new Organizacao(cnpj, responsavel, nome_organizacao, localizacao_organizacao);
                const results = await this.organizacaorepository.create(organizacao);
            }catch(error){
                console.log("ERRO: ", error);
            }
        }  
         
    }

    async readOrganizacao(id) {
        if( id === '' || !id ){
            console.log('ERRO: O id não pode ser vazio!');
            } else {
                try {
                const organizacao = await this.organizacaorepository.read(id);
                return organizacao;
                } catch(error){
                console.log("ERRO: ", error);
            }
        }
      }

    async listOrganizacao() {
        try {
            const organizacaoList = await this.organizacaorepository.list();
            return organizacaoList;      
        } catch (error) {
            console.log("ERRO: ", error);
        }
    }

    async updateOrganizacao(id, organizacao) {
        if(!(id || organizacao) || (id === '' || organizacao === '')){
            console.log('ERRO: o id ou campos da Organizacao não podem ser vazios!');
        } else {
            try {
                await this.organizacaorepository.update(id, organizacao);
            } catch (error) {
                console.log("ERRO: ", error);
            }
        }
    }

    async deleteOrganizacao(id){
        if( id === '' || !id ){
            console.log('ERRO: O id não pode ser vazio!');

        }else{
            try{
                const deleteOrganizacao = await this.organizacaorepository.delete(id);
                return deleteOrganizacao;
            }catch(error){
                console.log("ERRO: ", error);
            }
        }
    }

    async readAllFromOrganizacao(id_organizacao){
        if( id_organizacao === '' || !id_organizacao){
            console.log('ERRO: O id não pode ser vazio!');
        } else {
            try {
                const organizacaoInfo = await this.organizacaorepository.readInfoOrganizacao(id_organizacao);
                return organizacaoInfo;
            } catch (error) {
                console.log("ERRO: ", error);
            }
        }
    }
}

