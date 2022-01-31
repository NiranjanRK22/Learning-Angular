import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.css']
})
export class PipeAsyncComponent implements OnInit {
  courseObservable!: Observable<Course[]>
  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this._courseService.getAllCourses();
  }

}
