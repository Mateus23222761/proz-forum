import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogadoMock } from '../mock/usuario-logado.mock';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

    constructor(private http: HttpClient, private mock: UsuarioLogadoMock) { }

    getUsuarioLogado(): Observable<Usuario> {
        return of(this.mock.getUsuarioLogado());
    }

}
