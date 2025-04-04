import { Injectable } from "@angular/core";
import { Postagem, PostagemPrincipal } from "../models/postagem.interface";
import { Usuario } from "../models/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class PostagemMock {

    private postagemList: Postagem[] = [
        {
            id: '382194',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Enfermagem',
            autor: 'João da Silva',
            autorId: '593',
            timestamp: "2025-03-24T14:32:10Z"
        },
        {
            id: '382194',
            nivel: 2,
            titulo: 'RE: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Enfermagem',
            autor: 'Lívia Leite',
            autorId: '594',
            timestamp: "2025-03-24T15:32:10Z"
        },
        {
            id: '382194',
            nivel: 3,
            titulo: 'RE: RE: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Enfermagem',
            autor: 'João da Silva',
            autorId: '593',
            timestamp: "2025-03-24T16:32:10Z"
        },
        {
            id: '382193',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Tecnologia',
            autor: 'João de Barro',
            autorId: '595',
            timestamp: "2025-03-23T14:32:10Z"
        },
        {
            id: '382192',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Tecnologia',
            autor: 'Maria Silva',
            autorId: '596',
            timestamp: "2025-03-23T13:32:10Z"
        },
        {
            id: '382191',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Tecnologia',
            autor: 'Maria Silva',
            autorId: '596',
            timestamp: "2025-03-23T13:32:10Z"
        },
        {
            id: '382190',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Robótica',
            autor: 'Eduardo Silveira',
            autorId: '597',
            timestamp: "2025-03-22T13:32:10Z"
        },
    ];

    getPostagemList() : Postagem[] {
        return this.postagemList;
    }

    getPostagemListById( id: string ) : Postagem[] {
        return this.postagemList.filter((postagem) => postagem.id === id);
    }

    getPostagemListPrincipal() : PostagemPrincipal[] {
        const NIVEL_POSTAGEM_PRINCIPAL = 1;
        return this.postagemList
            .filter((postagem) => postagem.nivel === NIVEL_POSTAGEM_PRINCIPAL);
    }

    addResposta(id: string, titulo: string, usuario: Usuario): void {
        const proximoNivel = <number>this.postagemList.filter((postagem) => postagem.id === id).at(-1)?.nivel + 1;
        const curso = <string>this.postagemList.filter((postagem) => postagem.id === id).at(-1)?.curso;
        const timestamp = new Date();
        this.postagemList.push({
            id: id,
            nivel: proximoNivel,
            titulo: titulo,
            curso: curso,
            autor: usuario.nome,
            autorId: usuario.id,
            timestamp: 'timestamp'
        });
    }

    addPostagem(titulo: string, usuario: Usuario): string {
        const proximoId = Number(this.postagemList.reduce((accumulator, valor) => {
            return Number(accumulator.id) < Number(valor.id) ? valor : accumulator;
        }, this.postagemList[0]).id) + 1;
        const timestamp = new Date();
        const NIVEL_PRIMEIRO_POST = 1;
        this.postagemList.reverse().push({
            id: proximoId.toString(),
            nivel: NIVEL_PRIMEIRO_POST,
            titulo: titulo,
            autor: usuario.nome,
            autorId: usuario.id,
            curso: usuario.curso,
            timestamp: 'timestamp'
        });
        this.postagemList.reverse();
        return proximoId.toString();
    }
}
