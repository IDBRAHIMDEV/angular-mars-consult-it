import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getClients();
  }

 getClients() {
   this.courseService.getAllClients()
                     .subscribe((res: any[]) => {
                        this.posts = res;
                     })
 }

}
