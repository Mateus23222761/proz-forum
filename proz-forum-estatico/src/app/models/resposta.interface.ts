export interface Resposta {
    idPostagem: 'string';
    tituloResposta: 'string';
    listaTexto: Texto
}

export interface Texto {
    sequencial: number;
    texto: string;
}
