import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Servicio {
  value: string;
  viewValue: string;
}

interface Cuenta {
  value: string;
  viewValue: string;
}

interface Metodo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  servicios: Servicio[] = [
    {value: 'staking-0', viewValue: 'Staking'},
    {value: 'cripto-bolso-1', viewValue: 'Cripto Bolso'},
    {value: 'grid-2', viewValue: 'Grid'},
  ];

  cuentas: Cuenta[] = [
    {value: 'cuenta-0', viewValue: 'Cuenta'},
    {value: 'cuenta-1', viewValue: 'Cuenta 2'},
    {value: 'cuenta-2', viewValue: 'Cuenta 3'},
  ];

  metodos: Metodo[] = [
    {value: 'metodo-0', viewValue: 'metodo'},
    {value: 'metodo-1', viewValue: 'metodo 2'},
    {value: 'metodo-2', viewValue: 'metodo 3'},
  ];

  servicioFormControl = new FormControl('', [Validators.required]);
  cuentaFormControl = new FormControl('', [Validators.required]);
  capitalFormControl = new FormControl('', [Validators.required]);
  metodoFormControl = new FormControl('', [Validators.required]);
  comprobanteFormControl = new FormControl('', [Validators.required]);

  enviarFormulario(){
    this.router.navigate(['/panel']);
  }
  
}
