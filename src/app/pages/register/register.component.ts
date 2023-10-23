import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-<register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide: boolean = true;
  hide1: boolean = true;

  ageValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const birthDate = new Date(control.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (age < 18) {
      return { 'underage': true }; // El usuario es menor de 18 años
    }
  
    return null;
  }

  constructor() { }

  ngOnInit(): void {
  }

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordFormControl = new FormControl('', [Validators.required]);
    confirmPasswordFormControl = new FormControl('', [Validators.required]);
    nombreFormControl = new FormControl('', [Validators.required]);
    apellidoFormControl = new FormControl('', [Validators.required]);
    cedulaFormControl = new FormControl('', [Validators.required]);
    direccionFormControl = new FormControl('', [Validators.required]);
    telefonoFormControl = new FormControl('', [Validators.required]);
    FdeNacimientoFormControl = new FormControl('', [Validators.required, this.ageValidator]);

    matcher = new MyErrorStateMatcher();
}
