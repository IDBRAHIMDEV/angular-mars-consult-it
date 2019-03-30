import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  image = "https://avatars0.githubusercontent.com/u/6206647?s=460&v=4";
  editable = false;

  course = {
    id: 0,
    title: '',
    price: 0,
    description: ''
  }

  courses = [
    {id: 1, title: "Symfony", price: 12.578, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquam."},
    {id: 2, title: "Laravel", price: 45.554, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquam."}
  ];

  constructor() { }

  ngOnInit() {
  }


  addCourse() {
    this.courses.unshift(this.course);
    this.initCourse();
  }

  deleteCourse(index) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

        this.courses.splice(index, 1);

        Swal.fire({
          title: 'Course is Deleted !',
          text: 'description',
          type: 'success',
          timer: 5000
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
     
    })

  }

  editCourse(course) {
    this.course = course;
    this.editable = true;
  }

  updateCourse() {
    
    this.initCourse();
    this.editable = false
  }

  initCourse() {
    this.course = {
      id: 0,
      title: '',
      price: 0,
      description: ''
    }
  }

}
