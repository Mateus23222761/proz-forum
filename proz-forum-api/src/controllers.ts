import { Request, Response } from "express";
import { db } from "./database";
import { Usuario } from "./models/usuario.interface";
import { ValorMaximo } from "./models/valor-maximo.interface";
import { PostagemEntrada } from "./models/postagem.interface";
import { RespostaEntrada } from "./models/resposta.interface";


export class ProzForumController {

    public static getCursos (request: Request, response: Response)  {
        db.query("SELECT * FROM CURSO", (err, results) => {
            if (err) return response.status(500).json({error: err.message});
            response.json(results)
        });
    }

    public static getUsuario (request: Request, response: Response)  {
        db.query(`SELECT U.id, U.nome, C.id as curso_id, C.nome as curso, TU.tipo as tipo, TU.id as tipo_id
                  FROM proz_forum.usuario as U 
                  inner join proz_forum.curso as C ON U.curso = C.id
                  inner join proz_forum.tipo_usuario as TU ON TU.id = U.tipo
                  WHERE U.id = ?`, [request.params.id], (err, results) => {
            if(err) return response.status(500).json({error: err.message});
            const listaResposta = <Usuario[]> results;
            response.json(listaResposta[0]);
        });
    }

    public static getPostagensPrincipais (request: Request, response: Response) {
        db.query(`SELECT P.id as id, P.titulo, P.timestamp, C.id as curso_id, C.nome as curso, U.nome as autor, U.id as autor_id
                  FROM postagem as P
                  INNER JOIN usuario as U ON U.id = P.usuario_id
                  INNER JOIN curso_postagem as CP ON P.id = CP.postagem_id
                  INNER JOIN curso as C ON C.id = CP.curso_id
                  WHERE P.nivel = 1
                  ORDER BY P.timestamp DESC; `,(err, results) => {
                if(err) return response.status(500).json({error: err.message});
                response.json(results);
            });
    }

    public static getPostagemPorId (request: Request, response: Response)  {
        db.query(`SELECT P.id, P.nivel, P.titulo, P.timestamp, C.id as curso_id, C.nome as curso, U.nome as autor, U.id as autor_id
                  FROM postagem as P
                  INNER JOIN usuario as U ON U.id = P.usuario_id
                  INNER JOIN curso_postagem as CP ON P.id = CP.postagem_id
                  INNER JOIN curso as C ON C.id = CP.curso_id
                  WHERE P.id = ?
                  ORDER BY P.nivel; `, [request.params.id], (err, results) => {
                if(err) return response.status(500).json({error: err.message});
                response.json(results);
            });
    }

    public static getTextoPostagemPorId (request: Request, response: Response) {
        db.query(`SELECT *
                  FROM texto_postagem
                  WHERE id_postagem = ?`, [request.params.id], (err, results) => {
                if(err)  return response.status(500).json({error: err.message});
                response.json(results);
                  });
    }

    public static addPostagem (request: Request, response: Response) {
        db.query(`SELECT MAX(P.id) as valorMaximo
                  FROM postagem as P`, (err, results) => {
                if(err) return response.status(500).json({error: err.message});
                const proximoValor = (Number((<ValorMaximo[]>results)[0].valorMaximo || 0) + 1).toString().padStart(10, '0');
                const entrada: PostagemEntrada = request.body;
                const timestamp: string = (new Date()).toISOString().split('T').join(' ').split('Z')[0];
                db.query(`INSERT INTO POSTAGEM 
                    (id, nivel, titulo, usuario_id, timestamp)
                    VALUES
                    (?, ?, ?, ?, ?)`, [proximoValor, 1, entrada.titulo, entrada.usuario_id, timestamp],(err, _results) => {
                        if (err) return response.status(500).json({error: err.message});
                        const textoPostagemQuery = `INSERT INTO texto_postagem 
                                            (id_postagem, nivel_postagem, sequencial, texto)
                                            VALUES` + entrada.textoList.reduce((accumulator, valorAtual, index) => {
                                                const virgula = index === (entrada.textoList.length - 1) ? '' : ','
                                                return accumulator + `('${proximoValor}', 1, ${valorAtual.sequencial}, '${valorAtual.texto}')` + virgula;
                                            } ,'');
                        db.query(textoPostagemQuery, (err, result) => {
                            if(err) return response.status(500).json({error: err.message});
                            db.query(`INSERT INTO CURSO_POSTAGEM
                                      (postagem_id, curso_id)
                                      VALUES
                                      (?,?)`, [proximoValor, entrada.curso], (err, _results) => {
                                        if (err) response.status(500).json({error: err.message});
                                        response.json({
                                            id: proximoValor
                                        });
                                      })
                        });
          });
            });
    }

    public static addResposta (request: Request, response: Response) {
        const entrada: RespostaEntrada = request.body;
        db.query(`SELECT MAX(P.nivel) as valorMaximo
                  FROM postagem as P
                  WHERE P.id = ?`, [entrada.id], (err, results) => {
                if(err) return response.status(500).json({error: err.message});
                const nivelMaximo = (<ValorMaximo[]>results)[0].valorMaximo;
                if (!nivelMaximo) return response.status(400).json({error: 'Postagem não existe!'})
                const proximoValor = Number(nivelMaximo) + 1;
                const timestamp: string = (new Date()).toISOString().split('T').join(' ').split('Z')[0];
                console.log(timestamp);
                db.query(`INSERT INTO POSTAGEM 
                    (id, nivel, titulo, usuario_id, timestamp)
                    VALUES
                    (?, ?, ?, ?, ?)`, [entrada.id, proximoValor, entrada.titulo, entrada.usuario_id, timestamp],(err, _results) => {
                        if (err) return response.status(500).json({error: err.message});
                        const textoPostagemQuery = `INSERT INTO texto_postagem 
                                            (id_postagem, nivel_postagem, sequencial, texto)
                                            VALUES` + entrada.textoList.reduce((accumulator, valorAtual, index) => {
                                                const virgula = index === (entrada.textoList.length - 1) ? '' : ','
                                                return accumulator + `('${entrada.id}', ${proximoValor}, ${valorAtual.sequencial}, '${valorAtual.texto}')` + virgula;
                                            } ,'');
                        db.query(textoPostagemQuery, (err, _result) => {
                            if(err) return response.status(500).json({error: err.message});
                            response.json({
                                id: entrada.id,
                                nivel: proximoValor
                            });
                        });
          });
            });
    }
}
