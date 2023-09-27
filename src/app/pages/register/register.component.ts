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
  selector: 'app-register',
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

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

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

    /*
      passwordMatchValidator: ValidatorFn = (control: AbstractControl): null | { passwordsNotMatch: boolean } => {
        const password = control.get('passwordFormControl')?.value;
        const confirmPassword = control.get('confirmPasswordFormControl')?.value;
      
        if (password === confirmPassword) {
          return null; 
        } else {
          return { passwordsNotMatch: true }; 
        }
      };
    
      this.formGroup = new FormGroup({
        passwordFormControl: new FormControl('', [Validators.required]),
        confirmPasswordFormControl: new FormControl('', [Validators.required]),
      }, { validators: passwordMatchValidator });

      password:any = this.passwordFormControl.value;
      confirmPassword:any = this.confirmPasswordFormControl.value;
      
      sonDiferentes(): any{   
        if (this.password !== this.confirmPassword) {
          return false; 
        }
      }
    */
}
