import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { PostagemPrincipal } from '../models/postagem.interface';
import { PostagemMock } from '../mock/postagem.mock';

@Injectable({
  providedIn: 'root'
})
export class ForumListaService {

    constructor(private http: HttpClient, private mock: PostagemMock) { }

    getPostagensPrincipais(): Observable<PostagemPrincipal[]> {
        const HTTP_LINK = 'http://localhost:3000';
        return this.http.get<PostagemPrincipal[]>(`${HTTP_LINK}/postagensPrincipais`)
    }
}

