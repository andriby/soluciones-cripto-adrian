import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'; 
import {MatTableModule} from '@angular/material/table'; 
import { ResumenTableComponent } from './pages/panel-principal/resumen-table/resumen-table.component'; 
import { MatSortModule } from '@angular/material/sort'; 

import { AppRoutingModule } from './app-routing.module';

import { PanelPrincipalComponent } from './pages/panel-principal/panel-principal.component';
import { StakingComponent } from './pages/staking/staking.component';
import { GridComponent } from './pages/grid/grid.component';
import { CriptoBolsoComponent } from './pages/cripto-bolso/cripto-bolso.component';
import { BonosReferidosComponent } from './pages/bonos-referidos/bonos-referidos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GridTableComponent } from './pages/grid/grid-table/grid-table/grid-table.component'; 

@NgModule({
  declarations: [
    appComponent,
    PanelPrincipalComponent,
    StakingComponent,
    GridComponent,
    CriptoBolsoComponent,
    BonosReferidosComponent,
    PerfilComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ComprarComponent,
    ResumenTableComponent,
    GridTableComponent,
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
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
