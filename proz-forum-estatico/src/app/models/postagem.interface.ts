export interface Postagem extends PostagemPrincipal {
    nivel: number;
}

export interface PostagemPrincipal {
    id: string;
    nivel: number;
    titulo: string;
    curso: string;
    autor: string;
    timestamp: Date;
}
