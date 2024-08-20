export class Estrategia{
    constructor(descricao_estrategia,tipo_estrategia,efetividade,ID = null){
        this.ID = ID;
        this.descricao_estrategia = descricao_estrategia;
        this.tipo_estrategia = tipo_estrategia;
        this.efetividade = efetividade;
    }
}