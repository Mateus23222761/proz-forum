import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { ForumListaComponent } from './app/pages/forum-lista/forum-lista.component';
import { ForumPostComponent } from './app/pages/forum-post/forum-post.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '',
            component: ForumListaComponent },
            {
                path: 'post/:id',
                component: ForumPostComponent
            }
        ]
    },

];
