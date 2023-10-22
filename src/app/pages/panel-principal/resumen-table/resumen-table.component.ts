import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  monto: string;
  concepto: string;
  tipo: string;
  fecha: string;
}

/** Constants used to fill up our data base. */
const CONCEPTOS: string[] = [
  'Staking',
  'Cripto Bolso',
  'Grid',
  'Bono'
];

const TIPOS: string[] = [
  'Pago',
  'Retiro',
  'Deposito',
  'Compra'
]

const FECHAS: string[] = [
  '04/02/23',
  '27/08/23',
  '10/09/23',
  '15/05/23'
]
const MONTOS: number[] = [
  500,
  4562,
  568,
  50,
  5,
  5000,
  75,
  74,
  456,
];

@Component({
  selector: 'app-resumen-table',
  templateUrl: './resumen-table.component.html',
  styleUrls: ['./resumen-table.component.css']
})
export class ResumenTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['fecha', 'monto', 'concepto', 'tipo', 'id'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNew(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNew(id: number): UserData {
  const monto =
    MONTOS[Math.round(Math.random() * (MONTOS.length - 1))] +
    ' ';

    const fecha =
    FECHAS[Math.round(Math.random() * (FECHAS.length - 1))] +
    ' ';

    const concepto =
    CONCEPTOS[Math.round(Math.random() * (CONCEPTOS.length - 1))] +
    ' ';

    const tipo =
    TIPOS[Math.round(Math.random() * (TIPOS.length - 1))] +
    ' ';

  return {
    fecha:fecha,
    monto: monto,
    concepto: concepto,
    tipo: tipo,
    id: id.toString(),
  };
}
