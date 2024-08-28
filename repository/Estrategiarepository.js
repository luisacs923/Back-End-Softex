import connection from '../db/database.js';
import { Estrategia } from '../entity/Estrategia.js';

export class EstrategiaRepository{
    async create(estrategia){
        try{
        const [results,fields] = await connection.query('INSERT INTO Estrategia (descricao_estrategia, tipo_estrategia, efetividade) VALUES (?,?,?);',
        [estrategia.descricao_estrategia , estrategia.tipo_estrategia , estrategia.efetividade]);
        console.log(results);
        } catch (error){
            console.log(error);
        }

    }

    async update(id, estrategia) { 
        try{
        const [results, fields] = await connection.query('UPDATE Estrategia SET descricao_estrategia = ?, tipo_estrategia = ?, efetividade = ?  WHERE ID = ?',
        [estrategia.descricao_estrategia , estrategia.tipo_estrategia , estrategia.efetividade, id]);
        console.log(results);
        } catch(error){
            throw new Error(error);
        }
    }
    async list(){ // retorna todas as organizacoes
        try{
            const [results,fields] = await connection.query('SELECT * FROM Estrategia');
            return results;
        }catch(error){
            console.log(error);
        }

    }

    async read(id){
        try {
            const [results, fields] = await connection.query('SELECT * FROM Estrategia WHERE ID = ?', [id]);
            const estrategia = results[0];
            if(estrategia === undefined ){
                return null;
            }else{
                return new Estrategia(estrategia.descricao_estrategia , estrategia.tipo_estrategia , estrategia.efetividade, estrategia.ID);
            }
        
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try{
            const [results] = await connection.query('DELETE FROM Estrategia WHERE ID = ?',[id]);
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



