import { Component, OnInit } from '@angular/core';
import { Course  } from '../classes/course';
import { CourseService } from '../services/course.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})

export class ViewCoursesComponent implements OnInit {

  private course = new Course();
  
  public data;

  constructor(private courseService : CourseService) { }

  ngOnInit(){
     this.getCourses(this.course);
  }    

  form = new FormGroup({
    technology : new FormControl(),
    durationFrom : new FormControl(),
    durationTo : new FormControl()
  });

  getCourses(course){
    this.courseService.getCourses(course).subscribe( response =>{
      this.data = response;
      
    },
    
    error =>{
      console.log("error while getting course details");
    }
    );
  }
  
  searchForm(searchinfo){
    this.course.technology = this.Technology!.value;
    this.course.durationFrom = this.DurationFrom!.value;
    this.course.durationTo = this.DurationTo!.value;
    this.getCourses(this.course);

  }

  get Technology(){
    return this.form.get('technology');

  }

  get DurationFrom(){
   return this.form.get('durationFrom');

  }

  get DurationTo(){
    return this.form.get('durationTo');
  }

}
