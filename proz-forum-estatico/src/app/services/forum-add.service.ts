import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Texto } from '../models/resposta.interface';
import { UsuarioLogadoService } from './usuario-logado.service';
import { PostagemMock } from '../mock/postagem.mock';
import { TextoPostagemMock } from '../mock/texto-postagem.mock';
import { Observable, of, switchMap, tap } from 'rxjs';

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
        return this.usuarioLogadoService.getUsuarioLogado().pipe(
            switchMap((data) => {
                const id = this.mockPost.addPostagem(titulo, data);
                return of(id);
            }),
            tap((id) => {
                this.mock.addTextoPostagem(id, texto)
            })
        )
    }

}
