export class Evento{
    constructor(nome_evento,descricao_evento,data_evento,localizacao_evento,ID_organizacao,ID = null){
        this.ID = ID;
        this.nome_evento = nome_evento;
        this.descricao_evento = descricao_evento;
        this.data_evento = data_evento;
        this.localizacao_evento = localizacao_evento;
        this.ID_organizacao= ID_organizacao;
    }

}   