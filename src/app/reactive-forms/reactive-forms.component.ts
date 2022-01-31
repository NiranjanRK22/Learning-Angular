import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  cities = ['Bangalore', 'Pune', 'Chennai', 'Hyderabad', 'Delhi']
  constructor() { }

  ngOnInit(): void {
  }
  
  userForm = new FormGroup({
    username: new FormControl('niranjan', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl()
    }),
  })

  onRegister() {
     console.log(this.userForm.value);
  }

  get myform() {
    return this.userForm.controls;
  }
}
