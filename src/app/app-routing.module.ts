import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';
import { StakingComponent } from './components/staking/staking.component';
import { GridComponent } from './components/grid/grid.component';
import { CriptoBolsoComponent } from './components/cripto-bolso/cripto-bolso.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BonosReferidosComponent } from './components/bonos-referidos/bonos-referidos.component';


const routes: Routes = [
  { path: 'panel', component: PanelPrincipalComponent },
  { path: 'staking', component: StakingComponent },
  { path: 'grid', component: GridComponent },
  { path: 'cripto-bolso', component: CriptoBolsoComponent },
  { path: 'bonosReferidos', component: BonosReferidosComponent },
  { path: 'perfil', component: PerfilComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
