import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators, } from '@angular/forms';
import { from } from 'rxjs';
import { PasswordValidator } from '../shared/password.validator';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

// validation du formulaire avec FormControl, FormGroup, Validators

export class FormulaireComponent implements OnInit {

  registrationForm: FormGroup;
  submited: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&]).{0,8}$")]),
      confirmPassword: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required])
  
    }, { validators: PasswordValidator });
  }

  onSubmit()
  {
    this.submited = true;
    if(this.registrationForm.value.invalid)
    {
      return;
    }

    console.log(this.registrationForm.value);
    
  }
}
