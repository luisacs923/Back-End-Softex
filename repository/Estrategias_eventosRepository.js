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

async update(id, Estrategias_eventos) { 
    try{
     const [results, fields] = await connection.query('UPDATE Estrategias_eventos SET ID_estrategia = ? , ID_evento = ?  WHERE ID = ?',
    [Estrategias_eventos.ID_estrategia,Estrategias_eventos.ID_evento, id]);
     console.log(results, fields);
    } catch(error){
        throw new Error(error);
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

async delete(id){
    try{
        const [results,fields] = await connection.query('DELETE FROM Estrategia_eventos WHERE ID = ?',[id]);
        console.log(results, fields);
    } catch(error){
        console.log(error);
    }
}

}