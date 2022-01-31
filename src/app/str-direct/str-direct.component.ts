import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-str-direct',
  templateUrl: './str-direct.component.html',
  styleUrls: ['./str-direct.component.css']
})
export class StrDirectComponent implements OnInit {
  
  courses = [
    new Course('Java', 2000, 'backend', 'online', 'Priya'),
    new Course('Angular', 5000, 'frontend', 'online'),
    new Course('React', 6000, 'frontend', 'offline'),
    new Course('Python', 4000, 'backend', 'offline', 'Rahul'),
    new Course('Spring', 5000, 'backend', 'online', 'Priya'),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
