import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTopbar } from './app/layout/component/app.topbar';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, AppTopbar],
    templateUrl: './app.component.html'
})
export class AppComponent {}
