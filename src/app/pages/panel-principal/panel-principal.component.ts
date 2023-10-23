import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css'],
})


export class PanelPrincipalComponent implements OnInit {

  name: string = "Adrian";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ReferirComponent, {
      data: {name: this.name},
      height: '300px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

  listo: boolean = true;

  comprarActive: boolean = false

  comprar(){
    this.comprarActive = !this.comprarActive
  }
}


@Component({
  selector: 'app-referir',
  templateUrl: 'referir.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class ReferirComponent {
  constructor(
    public dialogRef: MatDialogRef<ReferirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  enlace: string = ""

  generarCodigo() {
    let codigoAleatorio = Math.floor(10000000 + Math.random() * 90000000);

     this.enlace = `https://soluciones-cripto.com/${codigoAleatorio}`;
  }
}