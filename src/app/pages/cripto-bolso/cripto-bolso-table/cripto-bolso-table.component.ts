import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface criptoBolsoData{
  id: number;
  mes: string;
  fecha: string;
  monto: number;
  recibo: number;
  restante: number;
}

const MESES: string[] = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct"
]

const FECHAS: string[] = [];
let fechaInicial: any = new Date('2023-01-22');

for (let i = 0; i < 10; i++) {
  const fechaDeposito = new Date(fechaInicial);
  fechaDeposito.setDate(fechaDeposito.getDate() + i * 30);
  FECHAS.push(fechaDeposito.toISOString().slice(0, 10));
}

const MONTOS: number[] = [100]

for (let i = 0; i <= 10; i++) {
  MONTOS.push(MONTOS[i] + 100)  
}

const RECIBOS:number[] = []
for (let i = 1; i <= 10; i++) {
  RECIBOS.push(i)
}

const FALTA: number[] = []

for (let i = 0; i < FECHAS.length; i++) {

  let siguienteFecha: any = new Date(FECHAS[i]) 
  let diferenciaMilisegundos = siguienteFecha - fechaInicial;
  let diasRestantes = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
  FALTA.push(diasRestantes)
}

FALTA.reverse()

@Component({
  selector: 'app-cripto-bolso-table',
  templateUrl: './cripto-bolso-table.component.html',
  styleUrls: ['./cripto-bolso-table.component.css']
})
export class CriptoBolsoTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['mes', 'fecha', 'monto', 'recibo', 'restante'];

  dataSource: MatTableDataSource<criptoBolsoData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    const users = Array.from({length: 10}, (_, k) => createNew(k + 1));
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

function createNew(id: number): criptoBolsoData {
  let mes = MESES[id - 1];
  let fechaCompleta = new Date(FECHAS[id - 1]);
  let dia = fechaCompleta.getDate().toString().padStart(2, '0'); 
  let mesNumero = fechaCompleta.getMonth() + 1; 
  let año = fechaCompleta.getFullYear().toString().slice(-2);
  let fecha = `${dia}/${mesNumero.toString().padStart(2, '0')}/${año}`; 
  let monto = MONTOS[id - 1];
  let recibo = RECIBOS[id - 1];
  let restante = FALTA[id - 1];



  return {
    id,
    mes,
    fecha,
    monto,
    recibo,
    restante
  };
}


