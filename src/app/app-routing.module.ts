import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';
import { StakingComponent } from './components/staking/staking.component';


const routes: Routes = [
  { path: 'panel', component: PanelPrincipalComponent },
  { path: 'staking', component: StakingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
