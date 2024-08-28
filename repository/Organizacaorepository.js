import connection from '../db/database.js';
import { Organizacao } from '../entity/Organizacao.js';

export class Organizacaorepository{
async create(organizacao) {
    try{
     const [results,fields] = await connection.query('INSERT INTO Organizacao (cnpj, responsavel, nome_organizacao, localizacao_organizacao ) VALUES (?,?,?,?);',
    [organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao]);
    console.log(results);
    } catch (error){
        console.log(error);
    }

}

async update(id, organizacao) { 
    try{
        const [results] = await connection.query('UPDATE Organizacao SET cnpj = ?, responsavel = ?, nome_organizacao = ?, localizacao_organizacao = ? WHERE ID = ?',
        [organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao, id]);
    } catch(error){
        console.log(error);
    }
}
async list(){ // retorna todas as organizacoes
    try{
        const [results] = await connection.query('SELECT * FROM Organizacao');
        return results;
    }catch(error){
        console.log(error);
    }

}

async read(id){
    try {
        const [results] = await connection.query('SELECT * FROM Organizacao WHERE ID = ?', [id]);
        const organizacao = results[0];
        if(organizacao === undefined){
            return null;
        }else{
            return new Organizacao(organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao, organizacao.ID);
        }
      
    } catch (error) {
        console.log(error);
    }
}

async readInfoOrganizacao(ID){
    try{
        const [results] = await connection.query(`
    SELECT
        Organizacao.ID AS id_organizacao,
        Organizacao.cnpj,
        Organizacao.nome_organizacao,
        Organizacao.responsavel,
        Organizacao.localizacao_organizacao,
        Evento.ID AS id_evento,
        Evento.nome_evento,
        Evento.descricao_evento,
        Evento.data_evento,
        Evento.localizacao_evento,
        Estrategia.ID AS id_estrategia,
        Estrategia.descricao_estrategia,
        Estrategia.tipo_estrategia,
        Estrategia.efetividade
    FROM Organizacao
        INNER JOIN Evento ON Organizacao.ID = Evento.ID_organizacao
        INNER JOIN Estrategias_eventos ON Evento.ID = Estrategias_eventos.ID_evento
        INNER JOIN Estrategia ON Estrategias_eventos.ID_estrategia = Estrategia.ID 
    WHERE Organizacao.ID = ?`,[ID]);
        const infoOrganizacao = results[0];
        if(infoOrganizacao === undefined){
            return null;
        }else{
            return results;
        }
    } catch(error){
        console.log(error);
    }
}

async delete(id){
    try{
        const [results] = await connection.query('DELETE FROM Organizacao WHERE ID = ?',[id]);
        if(results.affectedRows === 0){
            return null;
        }else{
            console.log(results);
        }
    } catch(error){
        console.log(error);
    }
}







}






