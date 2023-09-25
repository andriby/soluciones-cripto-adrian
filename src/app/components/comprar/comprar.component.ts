import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

interface Servicio {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  

  servicios: Servicio[] = [
    {value: 'staking-0', viewValue: 'Staking'},
    {value: 'cripto-bolso-1', viewValue: 'Cripto Bolso'},
    {value: 'grid-2', viewValue: 'Grid'},
  ];

}
