import { Postagem, PostagemPrincipal } from "../models/postagem.interface";

export class PostagemMock {

    private postagemList: Postagem[] = [
        {
            id: '382194',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Enfermagem',
            autor: 'João da Silva',
            timestamp: new Date("2025-03-24T14:32:10Z")
        },
        {
            id: '382194',
            nivel: 2,
            titulo: 'RE: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Enfermagem',
            autor: 'Lívia Leite',
            timestamp: new Date("2025-03-24T15:32:10Z")
        },
        {
            id: '382194',
            nivel: 3,
            titulo: 'RE: RE: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Enfermagem',
            autor: 'João da Silva',
            timestamp: new Date("2025-03-24T16:32:10Z")
        },
        {
            id: '382193',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Tecnologia',
            autor: 'João de Barro',
            timestamp: new Date("2025-03-23T14:32:10Z")
        },
        {
            id: '382192',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Tecnologia',
            autor: 'Maria Silva',
            timestamp: new Date("2025-03-23T13:32:10Z")
        },
        {
            id: '382191',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Tecnologia',
            autor: 'Maria Silva',
            timestamp: new Date("2025-03-23T13:32:10Z")
        },
        {
            id: '382190',
            nivel: 1,
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            curso: 'Robótica',
            autor: 'Eduardo Silveira',
            timestamp: new Date("2025-03-22T13:32:10Z")
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
}
