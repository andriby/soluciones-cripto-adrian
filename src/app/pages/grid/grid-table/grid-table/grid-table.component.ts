import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface gridData {
  id: number;
  semana: number;
  capital: number;
  porcentajeGanancia: number;
  ganancia: number;
  fechaDeposito: string;
  cant_recibo_deposito: number;
  fechaRetiro: string;
  cant_recibo_retiro: number;
}

const SEMANAS: number[] = [];

for (let i = 1; i <= 52; i++) {
  SEMANAS.push(i);
}

const CAPITAL: number[] = [1000];

const PORCENTAJE_GANANCIA: number[] = [];

for (let i = 1; i <= 10; i++) {
  PORCENTAJE_GANANCIA.push(i);
}

const FECHA_DEPOSITO: string[] = [];
const FECHA_RETIRO: string[] = [];
const fechaInicial = new Date('2022-10-22');

for (let i = 0; i < 52; i++) {
  const fechaDeposito = new Date(fechaInicial);
  const fechaRetiro = new Date(fechaInicial);
  fechaDeposito.setDate(fechaDeposito.getDate() + i * 7);
  fechaRetiro.setDate(fechaRetiro.getDate() + (i + 1) * 7);
  FECHA_DEPOSITO.push(fechaDeposito.toISOString().slice(0, 10));
  FECHA_RETIRO.push(fechaRetiro.toISOString().slice(0, 10));
}

const CANTIDAD_DEPOSITO: number[] = [];
const CANTIDAD_RETIRO: number[] = [];

for (let i = 1; i <= 52; i++) {
  const reciboDepositoAleatorio = Math.floor(Math.random() * 150);
  CANTIDAD_DEPOSITO.push(reciboDepositoAleatorio);

  const reciboRetiroAleatorio = Math.floor(Math.random() * 150);
  CANTIDAD_RETIRO.push(reciboRetiroAleatorio);
}

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['semana', 'capital', 'porcentajeGanancia', 'ganancia', 'cant_recibo_deposito', 'cant_recibo_retiro'];
  dataSource: MatTableDataSource<gridData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    const users = Array.from({length: 52}, (_, k) => createNew(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNew(id: number): gridData {
  let semana = SEMANAS[id - 1];
  let porcentajeGanancia = PORCENTAJE_GANANCIA[Math.round(Math.random() * (PORCENTAJE_GANANCIA.length - 1))];
  let ganancia = (porcentajeGanancia * CAPITAL[id - 1]) / 100;
  CAPITAL.push((CAPITAL[id - 1] + ganancia + CANTIDAD_DEPOSITO[id - 1]) - CANTIDAD_RETIRO[id - 1]);

  
  let fechaDeposito = FECHA_DEPOSITO[id - 1];
  let fechaRetiro = FECHA_RETIRO[id - 1];

  return {
    id,
    semana,
    capital: CAPITAL[id - 1],
    porcentajeGanancia,
    ganancia,
    fechaDeposito,
    cant_recibo_deposito: CANTIDAD_DEPOSITO[id - 1],
    fechaRetiro,
    cant_recibo_retiro: CANTIDAD_RETIRO[id - 1]
  };
}
