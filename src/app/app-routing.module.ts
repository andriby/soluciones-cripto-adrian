import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { PanelPrincipalComponent } from './pages/panel-principal/panel-principal.component';
import { StakingComponent } from './pages/staking/staking.component';
import { GridComponent } from './pages/grid/grid.component';
import { CriptoBolsoComponent } from './pages/cripto-bolso/cripto-bolso.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BonosReferidosComponent } from './pages/bonos-referidos/bonos-referidos.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'panel', component: PanelPrincipalComponent, canActivate: [AuthGuard] },
  { path: 'staking', component: StakingComponent, canActivate: [AuthGuard] },
  { path: 'grid', component: GridComponent, canActivate: [AuthGuard] },
  { path: 'cripto-bolso', component: CriptoBolsoComponent, canActivate: [AuthGuard] },
  { path: 'bonosReferidos', component: BonosReferidosComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent , canActivate: [AuthGuard] },
  { path: 'comprar', component: ComprarComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
