import express from 'express';
import { EventoService } from '../service/Eventoservice.js';

const router = express.Router();
import response from '../service/response.js';
const eventoService = new EventoService();


//Create 
router.post('/cadastro',async (req,res) =>{
    const post__data = req.body;
    const nome_evento = post__data.nome_evento;
    const descricao_evento = post__data.descricao_evento;
    const data_evento = post__data.data_evento;
    const localizacao_evento = post__data.localizacao_evento;
    const ID_organizacao = post__data.ID_organizacao;


    //Verificação se o corpo da requisição está vazio.
    if(Object.keys(post__data).length===0){
        res.status(422).json(response('422','ERROR!!! Dados vazios não será possível inserir dados!',null));
        return;
    };

    //Verificando se todos os dados possuem valores.
    if(!nome_evento || !descricao_evento || !data_evento || !localizacao_evento || !ID_organizacao){
        res.status(422).json(response('422','ERROR!!! Dados incompletos não será possível inserir dados!',null));
        return;
    };

    //Caso passar pelas duas verificações os dados serão inseridos através do organização service.

    try{
        const  results  = await eventoService.createEvento(nome_evento,descricao_evento,data_evento,localizacao_evento,ID_organizacao);
        res.status(200).json(response('200','Dados inseridos com sucesso!',null));
    }catch(error){
        
        res.status(500).json(response('500','Erro inesperado',null));
    }
});




//Read

//Listar todos os eventos
router.get('/busca', async(req,res)=>{
    try{
        const results = await eventoService.listEvento();
        res.status(200).json(response('200','Dados inseridos com sucesso!',results));
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
})


//Listar um evento específico;
router.get('/busca/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const results = await eventoService.readEvento(id);
        if(results === null){
            res.status(404).json(response('404','O ID do evento não consta no banco de dados!',null));

        }else{
            res.status(200).json(response('200','Dados visualizados com sucesso!', results));
        }
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
        
    }
})


//Listar todas as estrategias associadas a eventos.
router.get('/busca/info-from-estrategia/:id',async(req,res)=>{
    const id = req.params.id; 
    try{
        const results  = await eventoService.readInfofromEstrategia(id);
        if(results === null){
            res.status(404).json(response('404','O ID do evento não consta no banco de dados!',null));

        }else{
            res.status(200).json(response('200','Dados visualizados com sucesso!', results));
        }
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});


//Update
router.put('/atualizar/:id',async(req,res)=>{
    //ID que vai na URL
    const id_evento= req.params.id;
    
    //Corpo da requisição.
    const update__data = req.body;
    const nome_evento =  update__data.nome_evento;
    const descricao_evento =  update__data.descricao_evento;
    const data_evento =  update__data.data_evento;
    const localizacao_evento =  update__data.localizacao_evento;
    const ID_organizacao =  update__data.ID_organizacao;

    //Verificação se o corpo da requisição está vazio.
    if(Object.keys(update__data).length===0){
        res.status(422).json(response('422','ERROR! Dados no corpo da requisição vazios, não será possível atualizar', null));
        return;
    };

    try{ 
        const evento = await eventoService.readEvento(id_evento);
        if (evento === null) {
            res.status(404).json(response('404','Não foi possível atualizar pois o ID do evento não existe!!! ', null));

        }else{
                //Pegando tudo com o spread do que retorna do método readEvento
                const eventoUpdated = { ...evento};

                //Verificações para inserir atribuições dinâmicas de acordo com o que vai vim de novo
                //no corpo da requisição (pode vir apenas uma propriedade ou vários ou todas!)

                if(nome_evento){
                    eventoUpdated.nome_evento = nome_evento;
                } 
                if(descricao_evento){
                    eventoUpdated.descricao_evento = descricao_evento;
                } 
                if(data_evento){
                    eventoUpdated.data_evento = data_evento;
                }

                if(localizacao_evento){
                    eventoUpdated.localizacao_evento = localizacao_evento;
                }

                if(ID_organizacao){
                    eventoUpdated.ID_organizacao = ID_organizacao;
                } 

                await eventoService.updateEvento(id_evento , eventoUpdated);
                res.status(200).json(response('200','Dados do evento atualizados com sucesso!!',null));

        }

    } catch (error) {
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
})



//Delete
router.delete('/deletar/:id', async(req,res)=>{
    const id_evento = req.params.id;
    try{
        await eventoService.deleteEvento(id_evento);
        res.status(200).json(response('200','Evento deletado com sucesso!',null));
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});


//Faltou apenas o associate que depois vejo --_-- 

export default router;