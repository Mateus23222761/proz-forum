import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoMock {

    private usuarioLogado: Usuario = {
        id: "593",
        nome: 'João da Silva',
        curso: 'Enfermagem'
    }

    getUsuarioLogado(): Usuario {
        return this.usuarioLogado;
    }

}
