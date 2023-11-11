import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface bonosData {
  id:number;
  fecha:string;
  bonoPor:string;
  monto:number;
  recibo:number;
}

const FECHAS: string[] = [  
  "2023-09-05",
  "2023-10-12",
  "2023-09-21",
  "2023-10-01",
  "2023-09-10",
  "2023-10-27",
  "2023-09-17",
  "2023-10-04",
  "2023-09-30",
  "2023-10-18"
];
const BONOS_POR: string[] = [
  "Cumpleanos", 
  "Referir",
  "Plan de carrera"
];
const MONTOS: number[] = [ 152, 413, 586, 731, 99, 305, 870, 624, 456, 837 ];
const RECIBOS: number[] = [];

for (let i = 1; i <= 10; i++) {
  RECIBOS.push(i)
}

@Component({
  selector: 'app-bonos-table',
  templateUrl: './bonos-table.component.html',
  styleUrls: ['./bonos-table.component.css']
})
export class BonosTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['fecha', 'bonoPor', 'monto', 'recibo'];

  dataSource: MatTableDataSource<bonosData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  constructor() { 
    const users = Array.from({length: 10}, (_, k) => createNew(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter (event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

  function createNew(id: number): bonosData {
    let fecha = FECHAS[id - 1]
    let bonoPor =   BONOS_POR[Math.round(Math.random() * (BONOS_POR.length -1))];
    let monto = MONTOS[id -1]
    let recibo = RECIBOS[id - 1]

    return {
      id,
      fecha,
      bonoPor,
      monto,
      recibo
    }
  }
