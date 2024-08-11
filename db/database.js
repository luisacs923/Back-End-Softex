// Configuração do Banco de Dados
import mysql from 'mysql2/promise';
import MySqlConfig from './MySqlConfig.js'

const connection = await mysql.createConnection(MySqlConfig);
// connection.connect(error=>{
//     if(error){
//         console.log(`ERRO! :${error.stack}`);
//     }else{
//         console.log(`Conexão efetuada com sucesso!!`);
//     }
// })

export default connection;