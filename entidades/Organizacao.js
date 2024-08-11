import connection from '../db/database.js';

export class Organizacao {
    constructor(cnpj, responsavel, nome_organizacao, localizacao_organizacao, ID=null) {
        this.ID = ID;
        this.cnpj = cnpj;
        this.responsavel = responsavel;
        this.nome_organizacao = nome_organizacao;
        this.localizacao_organizacao = localizacao_organizacao;
    }

    create() {
        connection.query('INSERT INTO ORGANIZACAO (cnpj, responsavel, nome_organizacao, localizacao_organizacao ) VALUES (?,?,?,?);',[this.cnpj, this.responsavel, this.nome_organizacao, this.localizacao_organizacao], (err, rows)=>{
            if(!err){
                console.log(rows);
            }else{
                console.error('Erro na requisicao ao banco de dados.');
            }
        });
    }

    update() {
        connection.query('UPDATE ORGANIZACAO SET cnpj = ?, responsavel = ?, nome_organizacao = ?, localizacao_organizacao = ? WHERE ID = ?',[this.cnpj, this.responsavel, this.nome_organizacao, this.localizacao_organizacao, this.ID], (err, rows)=>{
            if(!err){
                console.log(rows);
            }else{
                console.error('Erro na requisicao ao banco de dados.');
            }
        });
    }

    static async read(idOrganizacao) {
        try {
            const [results, fields] = await connection.query('SELECT * FROM organizacao WHERE ID = ?', [idOrganizacao]);

            const organizacao = results[0];
            return new Organizacao(organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao, organizacao.ID);

            // console.log(results); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
        } catch (error) {
            console.log(err);
        }
        // connection.query('SELECT * FROM organizacao WHERE ID = ?', [idOrganizacao], (err, rows)=> {
        //     if(!err){
        //         const organizacao = rows[0]
        //         return new Organizacao(organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao, organizacao.ID);
        //     }else{
        //         console.error('Erro na requisicao ao banco de dados.');
        //     }
        // });
    }

    // eventos() {
    //     connection.query('SELECT nome_evento FROM EVENTO WHERE ID_Organizacao = ?',[this.id], (err, rows)=>{
    //         if(!err){
    //             console.log(rows);
    //         }else{
    //             console.error('Erro na requisicao ao banco de dados.');
    //         }
    //     });
    // }
}

// const Softex = new Organizacao('123', 'Gustavo', 'Softex', 'Recife') // Cria no JS o objeto
// Softex.create(); // Salva no Banco meu objeto JS
// Softex.responsavel = 'Luisa'; // Atualiza localmente meu objeto JS
// Softex.update(); // Atualiza no Banco meu objeto JS
// // Softex.update(Softex.id, 'Luisa', Softex.nome_organizacao, Softex.localizacao_organizacao);

// Nova Situação
// Iniciei minha aplicação
// Já tenho informaçoes no banco de dados
// Quero fazer um READ da Organizacao de ID = 42   Organizacao nome = 'Banco do Brasil'
// const minhaOrganizacao = readOrganizacao(42);
// const minhaOrganizacao = Organizacao.read(42); // Cria um objeto JS a partir de informação no Banco
// minhaOrganizacao.cnpj = '1234'; // Atualiza localmente meu objeto JS
// minhaOrganizacao.update(); // Atualiza no Banco meu objeto JS
// minhaOrganizacao.read(42); // ERRO

export function readOrganizacao(idOrganizacao) {
    connection.query('SELECT * FROM ORGANIZACAO WHERE ID = ?', [idOrganizacao], (err, rows)=> {
        if(!err){
            console.log(rows);
            const organizacao = rows[0] // {id: idOrganizaco, responsavel: 'Fulano de Tal', nome_organizacao: 'Alguma Coisa', ... }
            return new Organizacao(organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao, organizacao.ID);
        }else{
            console.error('Erro na requisicao ao banco de dados.');
        }
    });
}

export function eventosOrganizacao(idOrganizacao) {
    connection.query('SELECT nome_evento FROM EVENTO WHERE ID_Organizacao = ?',[idOrganizacao], (err, rows)=>{
        if(!err){
            console.log(rows);
        }else{
            console.error('Erro na requisicao ao banco de dados.');
        }
    });

}