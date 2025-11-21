import { Component } from '@angular/core';


// component decorator is use to define associated metadata
@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  title: string = 'List of Courses';
  courses: Icourse[] = [];

  // dependency injection
  // when this component is created, angular will find and inject an instance of this class in here and assign it to variable
  constructor(courseService: CourseService) {
    // let courseService = new CourseService();
    this.courses = courseService.getCourses();
  }
}