import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-pipe-custom',
  templateUrl: './pipe-custom.component.html',
  styleUrls: ['./pipe-custom.component.css']
})
export class PipeCustomComponent implements OnInit {
  
  // message = "Have a great day";
  username = "priya";
  birthday = '2022-01-04T12:00:00'

  courses = [
    new Course('Java', 2000, 'backend', 'online', 'Priya'),
    new Course('Angular', 5000, 'frontend', 'online'),
    new Course('React', 6000, 'frontend', 'offline'),
    new Course('Python', 4000, 'backend', 'offline', 'Rahul'),
    new Course('Spring', 5000, 'backend', 'online', 'Priya'),
  ]
  
  message = "";
  show = (username:string) => {
    this.message = "Welcome " + username;
  }

  choice="";
  propertyName="";
  constructor() { }

  ngOnInit(): void {
  }

}
