import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface gridData {
  id: string;
  semana: number;
  capital: number;
  porcentajeGanancia: number;
  ganancia: number;
  fechaDeposito: string;
  cant_recibo_deposito: string;
  fechaRetiro: string;
  cant_recibo_retiro: string;
}

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['semana', 'capital', 'porcentajeGanancia', 'ganancia', 'fechaDeposito', 'cant_recibo_deposito', 'fechaRetiro', 'cant_recibo_retiro'];
  dataSource: MatTableDataSource<gridData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    const users = Array.from({length:100}, (_, k) => createNew(k + 1));
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
  
}