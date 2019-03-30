import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  editable = false;
  course = {
    id: 0,
    title: '',
    price: 0,
    description: ''
  }
  courses = [
    {id: 1, title: "Symfony", price: 12.578, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquam."},
    {id: 2, title: "Laravel", price: 45.554, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquam."},
    {id: 3, title: "Spring Boot", price: 25.123, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquam."},
    {id: 4, title: "Angular", price: 14.785, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquam."},
    {id: 5, title: "NodeJS", price: 8.2658, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquam."},
  ];

  constructor() { }

  ngOnInit() {
  }


  addCourse() {
    this.courses.unshift(this.course);
    this.course = {
      id: 0,
      title: '',
      price: 0,
      description: ''
    }
  }

  deleteCourse(index) {
   this.courses.splice(index, 1);
  }

  editCourse(course) {
    this.course = course;
    this.editable = true;
  }

  updateCourse() {
    this.course = {
      id: 0,
      title: '',
      price: 0,
      description: ''
    }

    this.editable = false
  }

}
