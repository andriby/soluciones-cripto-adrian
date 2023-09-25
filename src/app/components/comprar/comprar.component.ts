import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) { 
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  

  ngOnInit(): void {
  }

  firstFormGroup = this._formBuilder.group({
    servicioCtrl: ['', Validators.required],
    planCtrl: ['', Validators.required],
  });

  secondFormGroup: any = this._formBuilder.group({
    metodoCtrl: ['', Validators.required],
    capitalCtrl: [0, Validators.required]
  });


  servicios: Servicio[] = [
    {value: 'staking-0', viewValue: 'Staking'},
    {value: 'cripto-bolso-1', viewValue: 'Cripto Bolso'},
    {value: 'grid-2', viewValue: 'Grid'},
  ];

  planes: Plan[] = [
    {value: 'plan-0', viewValue: 'Plan 1'},
    {value: 'plan-1', viewValue: 'Plan 2'},
    {value: 'plan-2', viewValue: 'Plan 3'},
  ];

  metodos: Metodo[] = [
    {value: 'metodo-0', viewValue: 'metodo 1'},
    {value: 'metodo-1', viewValue: 'metodo 2'},
    {value: 'metodo-2', viewValue: 'metodo 3'},
  ];

  validarValor(event: any) {
    const valorIngresado = this.secondFormGroup.get('capitalCtrl').value;

    if (valorIngresado > 10000) {
      alert("Debe realizar una inversión menor a 10000")
      this.secondFormGroup.get('capitalCtrl').setValue(10000);
    } else if(valorIngresado < 100){
      alert("Debe realizar una inversión mayor a 100")
      this.secondFormGroup.get('capitalCtrl').setValue(100);

    }
  }

}
