import express from 'express';
import { Organizacaoservice } from '../service/Organizacaoservice.js';

const router = express.Router();
import response from '../service/response.js';
const organizacaoService = new Organizacaoservice();


//Create
router.post('/cadastro',async(req,res)=>{
    const post__data = req.body;
    const cnpj = post__data.cnpj;
    const responsavel = post__data.responsavel;
    const nome_organizacao = post__data.nome_organizacao;
    const localizacao_organizacao = post__data.localizacao_organizacao;


    //Verificação se o corpo da requisição está vazio.
    if(Object.keys(post__data).length===0){
        res.status(422).json(response('422','ERROR!!! Dados vazios não será possível inserir!',null));
        return;
    };

    //Verificando se todos os dados possuem valores.
    if(!cnpj || !responsavel || !nome_organizacao || !localizacao_organizacao){
        res.status(422).json(response('422','ERROR!!! Dados incompletos não será possível inserir!',null));
        return;
    };

    //Caso passar pelas duas verificações os dados serão inseridos através do organização service.

    try{
        const  results  = await organizacaoService.createOrganizacao(cnpj,responsavel,nome_organizacao,localizacao_organizacao);
        res.status(200).json(response('200','Dados inseridos com sucesso!',null));
    }catch(error){
        
        res.status(500).json(response('500','Erro inesperado',null));
    }

});


//Read
router.get('/busca',async(req,res)=>{
    try{
        res.json(response('Sucesso','Dados visualizados com sucesso!', await organizacaoService.listOrganizacao()));
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});

router.get('/busca/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        let results = await organizacaoService.readOrganizacao(id);
        if(results === null){
            
            res.status(404).json(response('404','O ID da organização não consta no banco de dados!',null));
        }else{
            res.json(response('200','Dados visualizados com sucesso!', results));

        }
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});

router.get('/busca/info-organizacao/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        let results = await organizacaoService.readAllFromOrganizacao(id);

        if(results === null){
            res.status(404).json(response('404','O ID da organização não consta no banco de dados!',null));
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
    const id_organizacao = req.params.id;
    
    //Corpo da requisição.
    const update__data = req.body;
    const cnpj =  update__data.cnpj;
    const responsavel =  update__data.responsavel;
    const nome_organizacao =  update__data.nome_organizacao;
    const localizacao_organizacao =  update__data.localizacao_organizacao;

    //Verificação se o corpo da requisição está vazio.
    if(Object.keys(update__data).length===0){
        res.status(422).json(response('422','ERROR! Dados vazios no corpo da requisição, não será possível atualizar', null));
        return;
    };

    try{ 
        const organizacao = await organizacaoService.readOrganizacao(id_organizacao);
        if (organizacao === null) {
            res.status(404).json(response('404','Não foi possível atualizar pois, o ID da organização não existe!!! ', null));

        }else{
            const organizacaoUpdated = { ...organizacao};

            if(cnpj){
                organizacaoUpdated.cnpj = cnpj;
            } 
            if(responsavel){
                organizacaoUpdated.responsavel = responsavel;
            } 
            if(nome_organizacao){
                organizacaoUpdated.nome_organizacao = nome_organizacao;
            }
            if(localizacao_organizacao){
                organizacaoUpdated.localizacao_organizacao = localizacao_organizacao;
            } 
            
            await organizacaoService.updateOrganizacao(id_organizacao , organizacaoUpdated);
            res.status(200).json(response('200','Dados da organização atualizados com sucesso!!',null));

        }

    } catch (error) {
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
})




//Delete 

router.delete('/deletar/:id',async(req,res)=>{
    const id_organizacao = req.params.id;
    try{
        const results =  await organizacaoService.deleteOrganizacao(id_organizacao);
        if(results === null){
            res.status(404).json(response('404','O ID da organização não consta no banco de dados!', results));
        }else{
            res.status(200).json(response('200','Organização deletada com sucesso!',null));
        }
       
    }catch(error){
        console.log(error);
        res.status(500).json(response('500','Erro inesperado',null));
    }
});
export default router;