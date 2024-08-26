// Configuração do Banco de Dados
import mysql from 'mysql2/promise';
import MySqlConfig from './MySqlConfig.js';

async function createDatabaseConnection() {
    try {
        const connection = await mysql.createConnection(MySqlConfig);
        console.log('Conexão com o mysql efetuada com sucesso!');
        return connection;
    } catch (error) {
        console.log(`ERRO! :${error.stack}`);
        throw error; // Opcional: re-lançar o erro para tratamento em outro lugar
    }
}

const connection = await createDatabaseConnection();

export default connection;