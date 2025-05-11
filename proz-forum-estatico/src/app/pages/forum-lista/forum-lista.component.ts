import { AvatarModule } from 'primeng/avatar';
import { ForumListaService } from './../../services/forum-lista.service';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Postagem, PostagemPrincipal } from '../../models/postagem.interface'
import { RouterModule } from '@angular/router';
import { UsuarioLogadoService } from '../../services/usuario-logado.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-forum-lista',
  imports: [CommonModule,
            TableModule,
            ButtonModule,
            RippleModule,
            AvatarModule,
            RouterModule,
            IconFieldModule,
            InputIconModule,
            FormsModule,
            InputTextModule],
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

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
    }
}
