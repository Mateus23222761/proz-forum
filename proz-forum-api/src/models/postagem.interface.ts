import { Texto } from "./texto.interface";

export interface PostagemEntrada {
    titulo: string;
    curso: number;
    usuario_id: string;
    textoList: Texto[]
}
