import { Injectable } from '@angular/core';
import { Texto } from '../models/resposta.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  gerarTexto(textoGrande: string): Texto[] {
          const textoArray = [];
          for (let index = 0; index < textoGrande.length; index += 200) {
              textoArray.push({
                  sequencial: index + 1,
                  texto: textoGrande.substring(index, index + 200)
              });
          }
          return textoArray;
      }
}
