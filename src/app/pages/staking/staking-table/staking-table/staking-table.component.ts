import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface stakingData {
  id: string;
  fecha: string;
  ganancia: number;
  monto: number;
  diasRestantes: number;
  recibo:number;
} 

const FECHAS: string[] = [
  '04/02/23',
  '27/08/23',
  '10/09/23',
  '15/05/23'
] 

const GANANCIAS: number[] = [];
const MONTOS: number[] = [];
const DIAS_RESTANTES: number[] =[]
const RECIBOS: number[] =[]

for (let i = 1; i <= 20; i++) {
  GANANCIAS.push(i);
}

for (let i = 0; i < 20; i++) {
  const montoAleatorio = Math.floor(Math.random() * 100);
  MONTOS.push(montoAleatorio);
}

for (let i = 1; i <= 30; i++) {
  DIAS_RESTANTES.push(i);
}

for (let i = 1; i <= 30; i++) {
  const reciboAleatorio = Math.floor(Math.random() * 150);
  RECIBOS.push(reciboAleatorio)
}

@Component({
  selector: 'app-staking-table',
  templateUrl: './staking-table.component.html',
  styleUrls: ['./staking-table.component.css']
})

export class StakingTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['fecha', 'ganancia', 'monto', 'diasRestantes', 'recibo'];
  dataSource: MatTableDataSource<stakingData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNew(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }
  
  ngAfterViewInit(){
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

function createNew(id:number): stakingData {

  const fecha = 
  FECHAS[Math.round(Math.random() * (FECHAS.length -1))];

  const ganancia = 
  GANANCIAS[Math.round(Math.random() * (GANANCIAS.length -1))];

  const monto = 
  MONTOS[Math.round(Math.random() * (MONTOS.length -1))];

  const diasRestantes = 
  DIAS_RESTANTES[Math.round(Math.random() * (DIAS_RESTANTES.length -1))];

  const recibo = 
  RECIBOS[Math.round(Math.random() * (RECIBOS.length -1))];

  return {
    fecha: fecha,
    ganancia: ganancia,
    monto: monto,
    diasRestantes: diasRestantes,
    recibo: recibo,
    id: id.toString(),
  }
}
