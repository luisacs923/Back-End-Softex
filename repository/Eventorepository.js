import connection from '../db/database.js';
import { Evento } from '../entity/Evento.js';

export class EventoRepository{
    async create(evento) {
        try{
        const [results,fields] = await connection.query('INSERT INTO Evento ( nome_evento, descricao_evento, data_evento, localizacao_evento, ID_organizacao ) VALUES (?,?,?,?,?);',
        [ evento.nome_evento, evento.descricao_evento, evento.data_evento ,evento.localizacao_evento,evento.ID_organizacao]);
        console.log(results);
        console.log('funcionou essa porra')
        } catch (error){
            throw new Error (error);
        }

    }

    async update(id, evento) { 
        try{
        const [results, fields] = await connection.query('UPDATE Evento SET  nome_evento = ?, descricao_evento = ?, data_evento = ? , localizacao_evento = ? , ID_organizacao = ?  WHERE ID = ?',
        [ evento.nome_evento, evento.descricao_evento, evento.data_evento,evento.localizacao_evento,evento.ID_organizacao, id]);
        console.log(results);
        } catch(error){
            throw new Error(error);
        }
    }
    async list(){ // retorna todas as organizacoes
        try{
            const [results,fields] = await connection.query('SELECT * FROM Evento');
            return results;
        }catch(error){
            console.log(error);
        }

    }

    async read(id){
        try {
            const [results, fields] = await connection.query('SELECT * FROM Evento WHERE ID = ?', [id]);
            const evento = results[0];
            return new Evento(evento.nome_evento, evento.descricao_evento, evento.data_evento,evento.localizacao_evento,evento.ID_organizacao, id);
        
        } catch (error) {
            console.log(error);
        }
    }


    async delete(id){
        try{
            const [results,fields] = await connection.query('DELETE FROM Evento WHERE ID = ?',[id]);
            console.log(results);
        } catch(error){
            console.log(error);
        }
    }

}
