import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Texto } from '../models/resposta.interface';
import { UsuarioLogadoService } from './usuario-logado.service';
import { PostagemMock } from '../mock/postagem.mock';
import { TextoPostagemMock } from '../mock/texto-postagem.mock';
import { map, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumAddService {

    constructor(
        private http: HttpClient,
        private usuarioLogadoService: UsuarioLogadoService,
        private mockPost: PostagemMock,
        private mock: TextoPostagemMock
    ) { }

    criarPost(titulo: string, texto: Texto[]): Observable<string> {
        const HTTP_LINK = 'http://localhost:3000';
        return this.usuarioLogadoService.getUsuarioLogado().pipe(
            switchMap((usuarioLogado) => {
                return this.http.post<{id: string}>(`${HTTP_LINK}/addPostagem`, {
                    titulo: titulo,
                    curso: usuarioLogado.curso_id,
                    usuario_id: usuarioLogado.id,
                    textoList: texto
                });
            }),
            map((idObject) => idObject.id)
        );
    }

}
