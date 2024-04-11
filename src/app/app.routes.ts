import { Routes } from '@angular/router';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { VeiculosComponent } from './modules/veiculos/veiculos.component';
import { AddUsuariosComponent } from './modules/add-usuarios/add-usuarios.component';
import { EditarUsuariosComponent } from './modules/editar-usuarios/editar-usuarios.component';
import { MostrarUsuarioComponent } from './modules/mostrar-usuario/mostrar-usuario.component';

export const routes: Routes = [
    {
        path: 'usuarios',
        // redirectTo: "usuarios",
        component: UsuariosComponent
    },
    {
        path: 'add-usuarios',
        // redirectTo: "usuarios",
        component: AddUsuariosComponent
    },
    {
        path: "editar-usuarios/:id",
        component: EditarUsuariosComponent
    },
    {
        path: "mostrar-usuario/:id",
        component: MostrarUsuarioComponent
    },
    {
        path: "veiculos",
        component: VeiculosComponent
    },
];
