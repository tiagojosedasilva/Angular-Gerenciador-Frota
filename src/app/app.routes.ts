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
import { RedefinirSenhaComponent } from './modules/login/redefinir-senha/redefinir-senha.component';
import { ListarComponent } from './modules/consumo/listar/listar.component';
import { AddConsumoComponent } from './modules/consumo/add-consumo/add-consumo.component';
import { EditarConsumoComponent } from './modules/consumo/editar-consumo/editar-consumo.component';
import { AddChamadosComponent } from './modules/chamados/add-chamados/add-chamados.component';
import { EditarChamadosComponent } from './modules/chamados/editar-chamados/editar-chamados.component';
import { ListarChamadosComponent } from './modules/chamados/listar-chamados/listar-chamados.component';
import { authGuardGuard } from './auth/auth-guard.guard';
import { ListarRevisoesComponent } from './modules/revisoes/listar-revisoes/listar-revisoes.component';
import { ListarVinculosComponent } from './modules/vinculos/listar-vinculos/listar-vinculos.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'login'
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastre-se',
        component: CadastreSeComponent
    },
    {
        path: 'redefinir-senha',
        component: RedefinirSenhaComponent
    },
    {
        path: 'usuarios',
        canActivate: [authGuardGuard],
        // redirectTo: "usuarios",
        component: UsuariosComponent
    },
    {
        path: 'add-usuarios',
        // redirectTo: "usuarios",,
        canActivate: [authGuardGuard],
        component: AddUsuariosComponent
    },
    {
        path: "editar-usuarios/:id",
        component: EditarUsuariosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: "mostrar-usuario/:id",
        component: MostrarUsuarioComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: "veiculos",
        component: VeiculosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path:'add-veiculos',
        component: AddVeiculosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'editar-veiculo/:id',
        component: EditarVeiculosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'mostrar-veiculo/:id',
        component: MostrarVeiculoComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'mapa',
        component: MapaComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'add-rota',
        component: AddRotaComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'listar-rotas',
        component: ListarRotasComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'editar-rotas/:id',
        component: EditarRotaComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'mostrar-rota/:id',
        component: EditarRotaComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'exibir-rota',
        component: ExibirRotaComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'listar-consumos',
        component: ListarComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'add-consumo',
        component: AddConsumoComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'add-consumo',
        component: EditarConsumoComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'add-consumo',
        component: EditarConsumoComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'add-chamado',
        component: AddChamadosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'editar-chamado',
        component: EditarChamadosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'listar-chamados',
        component: ListarChamadosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'listar-revisoes',
        component: ListarRevisoesComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'listar-vinculos',
        component: ListarVinculosComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];
