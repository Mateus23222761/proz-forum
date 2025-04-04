import { CardModule } from 'primeng/card';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ForumPostService } from '../../services/forum-post.service.';
import { Postagem } from '../../models/postagem.interface';
import { TextoPostagem } from '../../models/texto-postagem.interface';
import { ForumPostRespostaComponent } from './forum-post-resposta/forum-post-resposta.component';

@Component({
  selector: 'app-forum-post',
  imports: [CardModule, AvatarModule, ForumPostRespostaComponent],
  templateUrl: './forum-post.component.html',
})
export class ForumPostComponent implements OnInit {

    id: string;

    postagens!: Postagem[];

    texto!: TextoPostagem[];

    constructor (route: ActivatedRoute, private forumPostService: ForumPostService) {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.forumPostService
            .getPostagemListById(this.id)
            .subscribe((data) => {
            this.postagens = data;
            this.forumPostService.getPostagemTextoListById(this.id).subscribe((data) => {
                console.log(data);
                this.texto = data;
            });
        });
    }

    filtrarPorNivel(nivel: number): string[] {
        if (!this.texto) return [];
        return this.texto
        .filter((pedacoTexto) => pedacoTexto.nivel_postagem === nivel)
        .map((pedacoTexto) => pedacoTexto.texto)
        .join('')
        .split("\n");
    }

    timestampToDataLegivel(timestamp: string) : string {
        const variavelData = new Date(timestamp);
        return variavelData.toLocaleString("pt-BR");
    }
}
