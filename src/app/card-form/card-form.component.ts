import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      /* Validators.maxLength(5), 
    Validators.pattern(/\s/) */] ),
    cardNumber: new FormControl('', [
      Validators.required, 
      Validators.minLength(16), 
      Validators.maxLength(16), 
      /* Validators.pattern(/\s/) */] ),
    expiration: new DateFormControl('', [
      Validators.required, 
      //Validators.minLength(3), 
      //Validators.maxLength(5), 
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(3), 
      Validators.pattern(/^\d{3}$/)] ),
  })

  constructor(){
    console.log(this.cardForm.get('name'))
  }

  onSubmit(){
    console.log('Form was submitted');
  }

  onReset(){
    this.cardForm.reset();
  }

}
