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

interface Plan {
  value: string;
  viewValue: string;
}

interface Metodo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  servicios: Servicio[] = [
    {value: 'staking-0', viewValue: 'Staking'},
    {value: 'cripto-bolso-1', viewValue: 'Cripto Bolso'},
    {value: 'grid-2', viewValue: 'Grid'},
  ];

  plans: Plan[] = [
    {value: 'plan-0', viewValue: 'Plan'},
    {value: 'plan-1', viewValue: 'Plan 2'},
    {value: 'plan-2', viewValue: 'Plan 3'},
  ];

  metodos: Metodo[] = [
    {value: 'metodo-0', viewValue: 'metodo'},
    {value: 'metodo-1', viewValue: 'metodo 2'},
    {value: 'metodo-2', viewValue: 'metodo 3'},
  ];

  servicioFormControl = new FormControl('', [Validators.required]);
  planFormControl = new FormControl('', [Validators.required]);
  capitalFormControl = new FormControl('', [Validators.required]);
  metodoFormControl = new FormControl('', [Validators.required]);
  comprobanteFormControl = new FormControl('', [Validators.required]);

  enviarFormulario(){
    this.router.navigate(['/panel']);
  }
}
