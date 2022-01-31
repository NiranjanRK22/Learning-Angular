import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import { User } from '../model/user';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styleUrls: ['./temp-forms.component.css']
})
export class TempFormsComponent implements OnInit, AfterViewInit {
  cities = ['Bangalore', 'Pune', 'Chennai', 'Hyderabad', 'Delhi']
  user!: User;
  
  @ViewChild("registerForm")myForm!: NgForm
  //this is used with template forms
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.myForm.value);
    setTimeout(() => {
      this.myForm.setValue({
        name: 'Prabhas',
        password: '',
        email: 'pra@gmail.com',
        gender: 'Male',
        address: {
          city: 'Chennai',
          state: 'TN',
          zipcode: 50004
        }
      })
    })
  }
  // this is used with twoway data binding
  ngOnInit(): void {
    this.user = {
      name: 'Prabhas',
      password: '',
      email: 'pra@gmail.com',
      gender: 'Male',
      address: {
        city: 'Chennai',
        state: 'TN',
        zipcode: 50004
      }

    }
  }
  
  // onReset() = () => {
  //   this.myForm.resetForm();
  // }
  onRegister = (registerForm: NgForm) => {
    console.log(registerForm.value);
  }

  onResetForm = (registerForm: NgForm) => {
    registerForm.resetForm()
  }
}
