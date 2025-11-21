import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private _courses: Icourse[] = ['Math 101', 'Science 101', 'Biology 100'];

  getCourse() {
    // typically making API call for all courses, but we will use in memory array
    return this._courses;
  }

}
