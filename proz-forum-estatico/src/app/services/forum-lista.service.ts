import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostagemPrincipal } from '../models/postagem.interface';
import { PostagemMock } from '../mock/postagem.mock';

@Injectable({
  providedIn: 'root'
})
export class ForumListaService {

    constructor(private http: HttpClient, private mock: PostagemMock) { }

    getPostagensPrincipais(): Observable<PostagemPrincipal[]> {
        return of(this.mock.getPostagemListPrincipal());
    }
}

