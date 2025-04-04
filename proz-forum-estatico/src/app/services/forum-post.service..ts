import { Injectable } from '@angular/core';
import { TextoPostagemMock } from '../mock/texto-postagem.mock';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of, switchMap } from 'rxjs';
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

    private HTTP_LINK = 'http://localhost:3000'

    constructor(
        private http: HttpClient,
        private usuarioLogadoService: UsuarioLogadoService,
        private mock: TextoPostagemMock,
        private mockPost: PostagemMock) { }

    getPostagemTextoListById(id: string): Observable<TextoPostagem[]> {
        return this.http.get<TextoPostagem[]>(`${this.HTTP_LINK}/textoPostagem/${id}`);
    }

    getPostagemListById(id: string): Observable<Postagem[]> {
        return this.http.get<Postagem[]>(`${this.HTTP_LINK}/postagem/${id}`);
    }

    enviarRespota(id: string, titulo: string, texto: Texto[]): Observable<{id: string, nivel: number}> {
        const HTTP_LINK = 'http://localhost:3000';
        return this.usuarioLogadoService.getUsuarioLogado()
        .pipe(switchMap((usuarioLogado) => {
            return this.http.post<{id: string, nivel: number}>(`${HTTP_LINK}/addResposta`, {
                id: id,
                titulo: titulo,
                usuario_id: usuarioLogado.id,
                textoList: texto
            });
        }));
    }
}
