import { Injectable } from '@angular/core';
import { Course } from '../classes/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private baseURL = "http://course-new-service-env.eba-wjxmu6wt.ap-south-1.elasticbeanstalk.com/api/v1.0/lms/courses/";

  constructor(private httpClient : HttpClient) { }

  getCourses(course : Course){

    let url = this.baseURL+"get";

    return this.httpClient.post(url,course);
  }
}
