import { Injectable } from "@angular/core";
import { Texto } from "../models/resposta.interface";
import { TextoPostagem } from "../models/texto-postagem.interface";

@Injectable({
  providedIn: 'root'
})
export class TextoPostagemMock {

    private textoPostagem: TextoPostagem[] = [
        {
            id_ostagem: "382194",
            nivel_postagem: 1,
            sequencial: 1,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 1,
            sequencial: 2,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 1,
            sequencial: 3,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper\n Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam.'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 2,
            sequencial: 1,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 2,
            sequencial: 2,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 2,
            sequencial: 3,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper\n Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam.'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 3,
            sequencial: 1,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 3,
            sequencial: 2,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            id_ostagem: "382194",
            nivel_postagem: 3,
            sequencial: 3,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper\n Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam.'
        }
    ];

    getTextoPostagemById(id: string): TextoPostagem[] {
        return this.textoPostagem.filter((postagem) => postagem.id_ostagem === id);
    }

    addTextoPostagem(idPostagem: string, texto: Texto[]) {
        const textoPostagemFiltrado = this.textoPostagem.filter((texto) => texto.id_ostagem === idPostagem);
        const ultimoNivel = (textoPostagemFiltrado
        .reduce((previousValue, currentValue) => {
            return previousValue.nivel_postagem > currentValue.nivel_postagem ? previousValue : currentValue;
        }, textoPostagemFiltrado[0])?.nivel_postagem || 0) + 1;
        console.log(this.textoPostagem.filter((texto) => texto.id_ostagem === idPostagem));
        console.log(ultimoNivel);
        console.log(ultimoNivel);
        console.log(idPostagem);
        texto.forEach((texto) => {
            this.textoPostagem.push({
                id_ostagem: idPostagem,
                nivel_postagem: ultimoNivel,
                sequencial: texto.sequencial,
                texto: texto.texto
            })
        });
        console.log(this.textoPostagem);
    }

}
