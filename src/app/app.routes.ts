import { Routes } from '@angular/router';
import { UsuariosComponent } from './modules/usuarios/listar-usuarios/usuarios.component';
import { VeiculosComponent } from './modules/veiculos/listar-veiculos/veiculos.component';
import { AddUsuariosComponent } from './modules/usuarios/add-usuarios/add-usuarios.component';
import { EditarUsuariosComponent } from './modules/usuarios/editar-usuarios/editar-usuarios.component';
import { MostrarUsuarioComponent } from './modules/usuarios/mostrar-usuario/mostrar-usuario.component';
import { AddVeiculosComponent } from './modules/veiculos/add-veiculos/add-veiculos.component';
import { EditarVeiculosComponent } from './modules/veiculos/editar-veiculos/editar-veiculos.component';
import { LoginComponent } from './modules/login/login/login.component';
import { CadastreSeComponent } from './modules/login/cadastre-se/cadastre-se.component';
import { MostrarVeiculoComponent } from './modules/veiculos/mostrar-veiculo/mostrar-veiculo.component';
import { MapaComponent } from './modules/rotas/mapa/mapa.component';
import { AddRotaComponent } from './modules/rotas/add-rota/add-rota.component';
import { ListarRotasComponent } from './modules/rotas/listar-rotas/listar-rotas.component';
import { EditarRotaComponent } from './modules/rotas/editar-rota/editar-rota.component';
import { ExibirRotaComponent } from './modules/rotas/exibir-rota/exibir-rota.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastre-se',
        component: CadastreSeComponent
    },
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
    {
        path:'add-veiculos',
        component: AddVeiculosComponent
    },
    {
        path: 'editar-veiculo/:id',
        component: EditarVeiculosComponent
    },
    {
        path: 'mostrar-veiculo/:id',
        component: MostrarVeiculoComponent
    },
    {
        path: 'mapa',
        component: MapaComponent
    },
    {
        path: 'add-rota',
        component: AddRotaComponent
    },
    {
        path: 'listar-rotas',
        component: ListarRotasComponent
    },
    {
        path: 'editar-rotas',
        component: EditarRotaComponent
    },
    {
        path: 'exibir-rota',
        component: ExibirRotaComponent
    },
];
