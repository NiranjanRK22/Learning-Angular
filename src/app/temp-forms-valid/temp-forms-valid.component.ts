import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-temp-forms-valid',
  templateUrl: './temp-forms-valid.component.html',
  styleUrls: ['./temp-forms-valid.component.css']
})
export class TempFormsValidComponent implements OnInit {
  cities = ['Bangalore', 'Pune', 'Chennai', 'Hyderabad', 'Delhi']
  user!: User;
  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: '',
      password: '',
      email: '',
      gender: '',
      address: {
        city: '',
        state: '',
        zipcode: 0
      }
    }
    
  }
  onRegister = (registerForm: NgForm) => {
    console.log(registerForm.value);
  }

}
