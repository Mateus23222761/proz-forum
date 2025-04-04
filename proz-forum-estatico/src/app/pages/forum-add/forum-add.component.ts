import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ForumAddService } from '../../services/forum-add.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-forum-add',
  imports: [CommonModule, InputTextModule, TextareaModule, ButtonModule, FormsModule],
  templateUrl: './forum-add.component.html',
})
export class ForumAddComponent implements OnInit {

    titulo = '';

    respostaTexto = '';

    constructor (
        private router: Router,
        private forumAddService: ForumAddService,
        private utils: UtilsService) {}

    ngOnInit(): void {
        this.titulo = '';
        this.respostaTexto = '';
    }

    cancelarVoltarPaginaInicial(): void {
        this.router.navigateByUrl('/')
    }

    enviarPost(): void {
        this.forumAddService.criarPost(this.titulo, this.utils.gerarTexto(this.respostaTexto)).subscribe((id) => {
            this.router.navigateByUrl(`/post/${id}`);
        });
    }

}
