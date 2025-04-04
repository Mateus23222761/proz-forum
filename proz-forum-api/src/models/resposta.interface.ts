import { PostagemEntrada } from "./postagem.interface";
import { Texto } from "./texto.interface";

export interface RespostaEntrada extends PostagemEntrada {
    id: string;
    titulo: string;
    usuario_id: string;
    textoList: Texto[]
}