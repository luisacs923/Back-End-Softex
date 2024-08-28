//Dependencias
import express from 'express';
const app = express();
import cors from 'cors';
import morgan from 'morgan';

//Função para personalizar as respostas;
import response from './service/response.js';

//Rotas importadas
import OrganizacaoRoute from './routes/OrganizacaoRoute.js';
import EventoRoute from './routes/EventoRoute.js';
import EstrategiaRoute from './routes/EstrategiaRoute.js';

//Checagem da API
const API_AVAILABLE = true;
app.use((req,res,next)=>{
    if(API_AVAILABLE){
        next();
    }else{
        res.send('API em manutenção tente novamente mais tarde!');
    }
})

//Middlewares globais
app.use(morgan('Metodo: :method |  URL: :url | Status: :status '));
app.use(cors());

//Tratamentos para métodos post.
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//Rotas
app.use('/organizacoes' ,OrganizacaoRoute);
app.use('/eventos' , EventoRoute);
app.use('/estrategias' , EstrategiaRoute);


//Caso a rota não exista
app.use((req,res)=>{
    res.status(404).send('Rota não encontrada!');
})


app.listen(3000,()=>{
    console.log('Servidor rodando em http://localhost:3000')
})