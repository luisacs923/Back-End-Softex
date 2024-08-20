
export class Organizacao {
    constructor(cnpj, responsavel, nome_organizacao, localizacao_organizacao, ID=null) {
        this.ID = ID;
        this.cnpj = cnpj;
        this.responsavel = responsavel;
        this.nome_organizacao = nome_organizacao;
        this.localizacao_organizacao = localizacao_organizacao;
    }

}