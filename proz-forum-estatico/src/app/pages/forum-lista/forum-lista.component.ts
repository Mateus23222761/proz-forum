import { AvatarModule } from 'primeng/avatar';
import { ForumListaService } from './../../services/forum-lista.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Postagem, PostagemPrincipal } from '../../models/postagem.interface'

@Component({
  selector: 'app-forum-lista',
  imports: [CommonModule, TableModule, ButtonModule, RippleModule, AvatarModule ],
  templateUrl: './forum-lista.component.html',
})
export class ForumListaComponent {
    postagensPrincipais!: PostagemPrincipal[];

    constructor(private forumListaService: ForumListaService) {
    }

    ngOnInit() {
        this.forumListaService.getPostagensPrincipais().subscribe((data) => {
            this.postagensPrincipais = data;
        })
    }
}
