import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Servicio {
  value: string;
  viewValue: string;
}

interface Cuenta {
  value: string;
  viewValue: string;
}

interface Deposito {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  servicios: Servicio[] = [
    {value: 'staking-0', viewValue: 'Staking'},
    {value: 'cripto-bolso-1', viewValue: 'Cripto Bolso'},
    {value: 'grid-2', viewValue: 'Grid'},
    {value: 'bono-3', viewValue: 'Bonos'},
  ];

  cuentas: Cuenta[] = [
    {value: 'cuenta-0', viewValue: 'Cuenta'},
    {value: 'cuenta-1', viewValue: 'Cuenta 2'},
    {value: 'cuenta-2', viewValue: 'Cuenta 3'},
  ];

  depositos: Deposito[] = [
    {value: 'metodo-0', viewValue: 'deposito'},
    {value: 'deposito-1', viewValue: 'deposito 2'},
    {value: 'deposito-2', viewValue: 'deposito 3'},
  ];

  servicioFormControl = new FormControl('', [Validators.required]);
  cuentaFormControl = new FormControl('', [Validators.required]);
  depositarFormControl = new FormControl('', [Validators.required]);
  montoFormControl = new FormControl('', [Validators.required]);

  enviarFormulario(){
    this.router.navigate(['/panel']);
  }
}
