import connection from '../db/database.js';
import { Organizacao } from '../entity/Organizacao.js';

export class Organizacaorepository{
async create(organizacao) {
    try{
     const [results,fields] = await connection.query('INSERT INTO Organizacao (cnpj, responsavel, nome_organizacao, localizacao_organizacao ) VALUES (?,?,?,?);',
    [organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao]);
    console.log(results, fields);
    } catch (error){
        throw new Error (error);
    }

}

async update(id, organizacao) { 
    try{
     const [results, fields] = await connection.query('UPDATE Organizacao SET cnpj = ?, responsavel = ?, nome_organizacao = ?, localizacao_organizacao = ? WHERE ID = ?',
    [organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao, id]);
     console.log(results, fields);
    } catch(error){
        throw new Error(error);
    }
}
async list(){ // retorna todas as organizacoes
    try{
        const [results,fields] = await connection.query('SELECT * FROM Organizacao');
        return results;
    }catch(error){
        console.log(error);
    }

}

async read(id){
    try {
        const [results, fields] = await connection.query('SELECT * FROM Organizacao WHERE ID = ?', [id]);
        const organizacao = results[0];
        return new Organizacao(organizacao.cnpj, organizacao.responsavel, organizacao.nome_organizacao, organizacao.localizacao_organizacao, organizacao.ID);
      
    } catch (error) {
        console.log(error);
    }
}



async delete(id){
    try{
        const [results,fields] = await connection.query('DELETE FROM Organizacao WHERE ID = ?',[id]);
        console.log(results);
    } catch(error){
        console.log(error);
    }
}







}






