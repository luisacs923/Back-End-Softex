import connection from '../db/database.js';
import { Estrategias_eventos } from '../entity/Estrategias_eventos.js';

export class Estrategias_eventosRepository{
    async create(Estrategias_eventos) {
        try{
        const [results,fields] = await connection.query('INSERT INTO Estrategias_eventos (ID_estrategia,ID_evento) VALUES (?,?);',
        [Estrategias_eventos.ID_estrategia,Estrategias_eventos.ID_evento]);
        console.log(results);
        } catch (error){
            throw new Error (error);
        }

    }

    async list(){ 
        try{
            const [results,fields] = await connection.query('SELECT * FROM Estrategias_eventos');
            return results;
        }catch(error){
            console.log(error);
        }

    }

    async read(id){
        try {
            const [results, fields] = await connection.query('SELECT * FROM Estrategias_eventos WHERE ID = ?', [id]);
            const Est_eventos = results[0];
            return new Estrategias_eventos(Est_eventos.ID_estrategia, Est_eventos.ID_evento);
        
        } catch (error) {
            console.log(error);
        }
    }

    async delete(ID_Evento){
        try{
            const [results] = await connection.query('DELETE FROM Estrategia_eventos WHERE ID_evento = ?',[ID_Evento]);
            console.log(results);
        } catch(error){
            console.log(error);
        }
    }

    async estrFromEven(ID_evento){
        try{
            const [results,fields] = await connection.query(`
                SELECT * FROM Estrategia 
                INNER JOIN 
                    Estrategias_eventos ON Estrategia.ID = Estrategias_eventos.ID_estrategia 
                WHERE ID_evento = ?`,[ID_evento]);
            return results
        } catch(error){
            console.log(error);
        }
    }

    async infoFromEstrategia(ID_estrategia){
        try{
            const [results, fields] = await connection.query(`
                SELECT
                    Estrategia.ID AS id_estrategia, Estrategia.tipo_estrategia,
                    Evento.ID AS id_evento, Evento.nome_evento, Evento.data_evento, Evento.localizacao_evento,
                    Organizacao.ID AS id_organizacao, Organizacao.nome_organizacao
                FROM Estrategias_eventos
                    JOIN Estrategia ON Estrategia.ID = Estrategias_eventos.ID_estrategia
                    JOIN Evento ON Evento.ID = Estrategias_eventos.ID_evento
                    JOIN Organizacao ON Organizacao.ID = Evento.ID_organizacao
                WHERE Estrategias_eventos.ID_estrategia = ? `, [ID_estrategia]);
                const infoFromEstrategia = results[0];
                
                if(infoFromEstrategia === undefined){
                    return null;
                }else{
                    return results
                }
        } catch(error){
            console.log("ERRO: ", error)
        }
    }

    async updateEventoEstrategia (ID_evento, listaEstrategias){ // listaEstrategias : Array de IDs [1, 2, 3, 6, 7]
        try{
            const [results,fields] = await connection.query('DELETE FROM Estrategias_eventos WHERE ID_evento = ?',[ID_evento]);
            console.log(results);
            
            listaEstrategias.forEach(async e=>{
                await connection.query('INSERT INTO Estrategias_eventos (ID_estrategia,ID_evento) VALUES (?,?);',[e,ID_evento])
            });
        } catch(error){
            console.log(error);
        }
    }
    
}