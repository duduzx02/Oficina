import { Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PecasComponent } from './pages/pecas/pecas.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'clientes', pathMatch: 'full' },
	{ path: 'clientes', component: ClientesComponent },
	{ path: 'pecas', component: PecasComponent }
];
