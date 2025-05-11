import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ForumAddService } from '../../services/forum-add.service';
import { UtilsService } from '../../services/utils.service';
import { UsuarioLogadoService } from '../../services/usuario-logado.service';
import { SelectModule } from 'primeng/select';
import { Curso } from '../../models/curso.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-forum-add',
  imports: [CommonModule, InputTextModule, TextareaModule, ButtonModule, FormsModule, SelectModule],
  templateUrl: './forum-add.component.html',
})
export class ForumAddComponent implements OnInit {

    titulo = '';

    respostaTexto = '';

    curso!: Curso;

    cursos!: Curso[];

    constructor (
        private router: Router,
        private forumAddService: ForumAddService,
        private utils: UtilsService,
        private usuarioLogadoService: UsuarioLogadoService,) {}

    ngOnInit(): void {
        this.titulo = '';
        this.respostaTexto = '';
        this.forumAddService.listarCursos().pipe(
            tap((cursos) => this.cursos = cursos),
            switchMap(() => this.usuarioLogadoService.getUsuarioLogado())
        ).subscribe((usuarioLogado) => {
            this.curso = this.cursos.filter(curso => curso.id === usuarioLogado.curso_id)[0];
        });
    }

    cancelarVoltarPaginaInicial(): void {
        this.router.navigateByUrl('/');
    }

    enviarPost(): void {
        this.forumAddService.criarPost(this.titulo, this.curso.id, this.utils.gerarTexto(this.respostaTexto)).subscribe((id) => {
            this.router.navigateByUrl(`/post/${id}`);
        });
    }

}
