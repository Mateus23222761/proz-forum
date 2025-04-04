import { Injectable } from "@angular/core";
import { Texto } from "../models/resposta.interface";
import { TextoPostagem } from "../models/texto-postagem.interface";

@Injectable({
  providedIn: 'root'
})
export class TextoPostagemMock {

    private textoPostagem: TextoPostagem[] = [
        {
            idPostagem: "382194",
            nivelPostagem: 1,
            sequencial: 1,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 1,
            sequencial: 2,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 1,
            sequencial: 3,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper\n Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam.'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 2,
            sequencial: 1,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 2,
            sequencial: 2,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 2,
            sequencial: 3,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper\n Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam.'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 3,
            sequencial: 1,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 3,
            sequencial: 2,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper. Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam\n'
        },
        {
            idPostagem: "382194",
            nivelPostagem: 3,
            sequencial: 3,
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum pellentesque libero quis semper\n Nunc interdum sagittis felis, sit amet viverra massa blandit eu. Interdum et dapibus nam.'
        }
    ];

    getTextoPostagem(): TextoPostagem[] {
        return this.textoPostagem;
    }

    addTextoPostagem(idPostagem: string, texto: Texto[]) {
        const ultimoNivel = this.textoPostagem.filter((texto) => texto.idPostagem === idPostagem)
        .reduce((previousValue, currentValue) => {
            return previousValue.nivelPostagem > currentValue.nivelPostagem ? previousValue : currentValue;
        }, this.textoPostagem[0]).nivelPostagem + 1;
        texto.forEach((texto) => {
            this.textoPostagem.push({
                idPostagem: idPostagem,
                nivelPostagem: ultimoNivel,
                sequencial: texto.sequencial,
                texto: texto.texto
            })
        });
    }

}
