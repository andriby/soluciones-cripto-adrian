import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 


import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';
import { AppRoutingModule } from './app-routing.module';
import { StakingComponent } from './components/staking/staking.component';
import { GridComponent } from './components/grid/grid.component';
import { CriptoBolsoComponent } from './components/cripto-bolso/cripto-bolso.component';
import { BonosReferidosComponent } from './components/bonos-referidos/bonos-referidos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component'; 

@NgModule({
  declarations: [
    appComponent,
    PanelPrincipalComponent,
    StakingComponent,
    GridComponent,
    CriptoBolsoComponent,
    BonosReferidosComponent,
    PerfilComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgIf,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule, 
    MatIconModule,
    MatProgressBarModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
