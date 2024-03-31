import { Routes } from '@angular/router';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { VeiculosComponent } from './modules/veiculos/veiculos.component';
import { AddUsuariosComponent } from './modules/add-usuarios/add-usuarios.component';

export const routes: Routes = [
    {
        path: 'usuarios',
        // redirectTo: "usuarios",
        component: UsuariosComponent
    },
    {
        path: "veiculos",
        component: VeiculosComponent
    },
    {
        path: 'add-usuarios',
        // redirectTo: "usuarios",
        component: AddUsuariosComponent
    },
];
