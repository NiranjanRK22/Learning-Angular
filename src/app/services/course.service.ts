import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getAllCourses = ():Observable<Course[]> => {
    let courseArray = [
      new Course('Java', 2000, 'backend', 'online', 'Priya'),
      new Course('Angular', 5000, 'frontend', 'online'),
      new Course('React', 6000, 'frontend', 'offline'),
      new Course('Python', 4000, 'backend', 'offline', 'Rahul'),
      new Course('Spring', 5000, 'backend', 'online', 'Priya')
    ];
    let courseObservable = from([courseArray]);
    return courseObservable;
  }
}
