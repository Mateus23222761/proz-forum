import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Postagem } from '../../../models/postagem.interface';
import { Texto } from '../../../models/resposta.interface';
import { ForumPostService } from '../../../services/forum-post.service.';
import { Router, RouterLink } from '@angular/router';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'forum-post-resposta',
  imports: [CommonModule, ButtonModule, InputTextModule, TextareaModule, FormsModule],
  templateUrl: './forum-post-resposta.component.html',
})
export class ForumPostRespostaComponent implements OnInit {

    @Input() lastResposta!: Postagem;

    @Output() saveResposta = new EventEmitter();

    isGoingToAdd = false;

    titulo = '';

    respostaTexto = '';

    constructor (private forumPostService: ForumPostService, private utils: UtilsService) {}

    ngOnInit(): void {
        this.titulo = `RE: ${this.lastResposta.titulo}`;
        this.respostaTexto = '';
    }

    enviarResposta (): void {
        this.forumPostService.enviarRespota(this.lastResposta.id, this.titulo, this.utils.gerarTexto(this.respostaTexto));
        this.saveResposta.emit();
    }

}
