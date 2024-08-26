//Dependencias
import express from 'express';
const app = express();
import cors from 'cors';
import morgan from 'morgan';

//Função para personalizar as respostas;
import response from './service/response.js';

//Rotas importadas
import OrganizacaoRoute from './routes/OrganizacaoRoute.js';

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
app.use('/organizacao' ,OrganizacaoRoute)
// app.use()
// app.use()


//Caso a rota não exista
app.use((req,res)=>{
    res.send('Rota não encontrada!');
})


app.listen(3000,()=>{
    console.log('Servidor rodando em http://localhost:3000')
})