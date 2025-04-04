import { Injectable } from '@angular/core';
import { TextoPostagemMock } from '../mock/texto-postagem.mock';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { TextoPostagem } from '../models/texto-postagem.interface';
import { PostagemMock } from '../mock/postagem.mock';
import { Postagem } from '../models/postagem.interface';
import { Texto } from '../models/resposta.interface';
import { UsuarioLogadoService } from './usuario-logado.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForumPostService {

    mock = new TextoPostagemMock();

    mockPost = new PostagemMock();

    constructor(private http: HttpClient, private usuarioLogadoService: UsuarioLogadoService) { }

    getPostagemTextoListById(id: string): Observable<TextoPostagem[]> {
        return of(this.mock.getTextoPostagem()).pipe(delay(500));
    }

    getPostagemListById(id: string): Observable<Postagem[]> {
        return of(this.mockPost.getPostagemListById(id));
    }

    enviarRespota(id: string, titulo: string, texto: Texto[]) {
        this.usuarioLogadoService.getUsuarioLogado().subscribe((data) => {
            this.mockPost.addResposta(id, titulo, data)
            this.mock.addTextoPostagem(id, texto);
        });
    }
}
