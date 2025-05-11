import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, switchMap } from 'rxjs';
import { Usuario } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

    private usuarioLogado = new Observable<Usuario>();

    constructor(private http: HttpClient) {
     }

    getUsuarioLogado(): Observable<Usuario> {
        const HTTP_LINK = 'http://localhost:3000'
        const USUARIO_MOCK = '9006864599';
        return this.http.get<Usuario>(`${HTTP_LINK}/usuario/${USUARIO_MOCK}`);
    }

}
