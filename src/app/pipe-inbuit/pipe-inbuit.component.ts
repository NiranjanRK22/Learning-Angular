import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-pipe-inbuit',
  templateUrl: './pipe-inbuit.component.html',
  styleUrls: ['./pipe-inbuit.component.css']
})
export class PipeInbuitComponent implements OnInit {
  joinDate: Date = new Date();

  employee = {
    name: 'rahul',
    salary: 10000,
    city: 'hyd'
  }
  employee1 = {
    name: 'rohan',
    birthday: '1998-05-22T16:10:00',
    bonus:2560.767,
    salary: 15000,
    city: 'bangalore'
  }
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
