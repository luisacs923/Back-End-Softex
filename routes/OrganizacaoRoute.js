import express from 'express';
import { Organizacaoservice } from '../service/Organizacaoservice.js';

const router = express.Router();
import response from '../service/response.js';
const organizacaoService = new Organizacaoservice();


// // GET /professor -> retorna lista de professores
// router.get('/', async (req, res) => {
//     try {
//       // GET professor/?nome= busca por nome
//       if (req.query.nome) {
//         const nome = req.query.nome;
//         const professores = await professorService.readProfessoresPorNome(nome);
//         res.json(professores);
//       } else {
//         const professores = await professorService.listarProfessores();
//         res.json(professores);
//       }
//     } catch (error) {
//       console.log(error);
//       res.sendStatus(500);
//     }
//   });



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
export default router;