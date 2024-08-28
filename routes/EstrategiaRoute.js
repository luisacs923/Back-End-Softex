import express from 'express';
import { Estrategiaservice } from '../service/Estrategiaservice.js';

const router = express.Router();
import response from '../service/response.js';
const estrategiaService = new Estrategiaservice();

//Create
router.post('/cadastro',async(req,res)=>{
    const post__data = req.body;
    const descricao_estrategia = post__data.descricao_estrategia;
    const tipo_estrategia = post__data.tipo_estrategia;
    const efetividade = post__data.efetividade;

    //Verificação se o corpo da requisição está vazio.
    if(Object.keys(post__data).length===0){
        res.status(422).json(response('422','ERROR!!! Dados vazios não será possível inserir!',null));
        return;
    };

    //Verificando se todos os dados possuem valores.
    if(!descricao_estrategia || !tipo_estrategia || !efetividade){
        res.status(422).json(response('422','ERROR!!! Dados incompletos não será possível inserir!',null));
        return;
    };

    //Caso passar pelas duas verificações os dados serão inseridos através do estrategiaService.

    try{
        const  results  = await estrategiaService.createEstrategia(descricao_estrategia, tipo_estrategia, efetividade);
        res.status(200).json(response('200','Dados inseridos com sucesso!',null));
    }catch(error){
        
        res.status(500).json(response('500','Erro inesperado',null));
    }
})


//Read

//Listar todas as estrategias.
router.get('/busca',async(req,res)=>{
    try{
        let results = await estrategiaService.listEstrategia();
        res.status(200).json(response('200','Dados visualizados com sucesso!', results));

    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});


//Listar uma estratégia específica.
router.get('/busca/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        let results = await estrategiaService.readEstrategia(id);
        
        if(results === null){
            res.status(404).json(response('404','O ID da estrategia não consta no banco de dados!',null));
            
        }else{
            res.json(response('200','Dados visualizados com sucesso!', results));

        }
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});

//Listar estrategias referente a um evento
router.get('/busca/estrategia-from-evento/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        let results = await estrategiaService.readEstrategiaFromEvento(id);
        if(results.length === 0){
            
            res.status(404).json(response('404','O ID do Evento não está relacionado com nenhuma Estratégia!',null));
        }else{
            res.json(response('200','Dados visualizados com sucesso!', results));

        }
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});

//Update
router.put('/atualizar/:id',async(req,res)=>{
    //ID que vai na URL
    const id_estrategia = req.params.id;
    
    //Corpo da requisição.
    const update__data = req.body;
    const descricao_estrategia = update__data.descricao_estrategia;
    const tipo_estrategia = update__data.tipo_estrategia;
    const efetividade = update__data.efetividade;

    //Verificação se o corpo da requisição está vazio.
    if(Object.keys(update__data).length===0){
        res.status(422).json(response('422','ERROR! Dados vazios no corpo da requisição , não será possível atualizar!', null));
        return;
    };

    try{ 
        const estrategia = await estrategiaService.readEstrategia(id_estrategia);
        if (estrategia === null) {
            res.status(404).json(response('404','Não foi possível atualizar pois, o ID da estratégia não existe!!! ', null));

        }else{
            const estrategiaUpdated = { ...estrategia};

            if(descricao_estrategia){
                estrategiaUpdated.descricao_estrategia = descricao_estrategia;
            } 
            if(tipo_estrategia){
                estrategiaUpdated.tipo_estrategia = tipo_estrategia;
            } 
            if(efetividade){
                estrategiaUpdated.efetividade = efetividade;
            }

            await estrategiaService.updateEstrategia(id_estrategia , estrategiaUpdated);
            res.status(200).json(response('200','Dados da estrategia atualizados com sucesso!!',null));

        }

    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
})



//Delete
router.delete('/deletar/:id',async(req,res)=>{
    const id_estrategia = req.params.id;
    try{
        const results = await estrategiaService.deleteEstrategia(id_estrategia);
        if(results === null){
            res.status(404).json(response('404','O ID da estrategia não consta no banco de dados!', results));
        }else{
            res.status(200).json(response('200','Estratégia deletada com sucesso!',null));
        }
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});



export default router;