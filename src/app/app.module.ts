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
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';

import { PanelPrincipalComponent } from './pages/panel-principal/panel-principal.component';
import { StakingComponent } from './pages/staking/staking.component';
import { StakingTableComponent } from './pages/staking/staking-table/staking-table/staking-table.component'; 
import { GridComponent } from './pages/grid/grid.component';
import { GridTableComponent } from './pages/grid/grid-table/grid-table/grid-table.component';
import { CriptoBolsoComponent } from './pages/cripto-bolso/cripto-bolso.component';
import { BonosComponent } from './pages/bonos/bonos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResumenTableComponent } from './pages/panel-principal/resumen-table/resumen-table.component';
import { RetirarComponent } from './pages/retirar/retirar.component';
import { DepositarComponent } from './pages/depositar/depositar.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { CriptoBolsoTableComponent } from './pages/cripto-bolso/cripto-bolso-table/cripto-bolso-table.component';
import { BonosTableComponent } from './pages/bonos/bonos-table/bonos-table.component';
import { ReferidosComponent } from './pages/referidos/referidos.component';
import { ReferidosTableComponent } from './pages/referidos/referidos-table/referidos-table.component'; 

@NgModule({
  declarations: [
    appComponent,
    PanelPrincipalComponent,
    StakingComponent,
    StakingTableComponent,
    GridComponent,
    GridTableComponent,
    CriptoBolsoComponent,
    BonosComponent,
    PerfilComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ResumenTableComponent,
    RetirarComponent,
    DepositarComponent,
    ComprarComponent,
    CriptoBolsoTableComponent,
    BonosTableComponent,
    ReferidosComponent,
    ReferidosTableComponent,
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
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
