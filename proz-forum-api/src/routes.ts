import express from "express";
import { ProzForumController } from "./controllers";

const router = express.Router();

router.get('/cursos', ProzForumController.getCursos);
router.get('/usuario/:id', ProzForumController.getUsuario);
router.get('/postagensPrincipais', ProzForumController.getPostagensPrincipais);
router.get('/postagem/:id', ProzForumController.getPostagemPorId);
router.post('/addPostagem', ProzForumController.addPostagem);
router.post('/addResposta', ProzForumController.addResposta);
router.get('/textoPostagem/:id', ProzForumController.getTextoPostagemPorId);

export default router;