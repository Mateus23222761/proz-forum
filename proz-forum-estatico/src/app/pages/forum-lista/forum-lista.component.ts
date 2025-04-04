import { AvatarModule } from 'primeng/avatar';
import { ForumListaService } from './../../services/forum-lista.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Postagem, PostagemPrincipal } from '../../models/postagem.interface'
import { RouterModule } from '@angular/router';
import { UsuarioLogadoService } from '../../services/usuario-logado.service';

@Component({
  selector: 'app-forum-lista',
  imports: [CommonModule, TableModule, ButtonModule, RippleModule, AvatarModule, RouterModule ],
  templateUrl: './forum-lista.component.html',
})
export class ForumListaComponent {
    postagensPrincipais!: PostagemPrincipal[];
    usuarioLogadoId!: string;

    constructor(private forumListaService: ForumListaService, usuarioLogadoService: UsuarioLogadoService) {
        usuarioLogadoService.getUsuarioLogado().subscribe((usuarioLogado) => {
            console.log(usuarioLogado);
            console.log(usuarioLogado.id);
            this.usuarioLogadoId = usuarioLogado.id
        });
    }

    ngOnInit() {
        this.forumListaService.getPostagensPrincipais().subscribe((data) => {
            this.postagensPrincipais = data;
        })
    }
}
