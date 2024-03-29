import { Routes } from '@angular/router';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { VeiculosComponent } from './modules/veiculos/veiculos.component';

export const routes: Routes = [
    {
        path: 'usuarios',
        // redirectTo: "usuarios",
        component: UsuariosComponent
    },
    {
        path: "veiculos",
        component: VeiculosComponent
    }
];
