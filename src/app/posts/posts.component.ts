import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post = {
    title: '',
    body: ''
  }

  showForm = false
  posts = [];
  constructor(
               private courseService: CourseService,
               private flashMessage: FlashMessagesService
             ) { }

  ngOnInit() {
    this.getClients();
  }

 createPost() {
   this.courseService.persistPost(this.post)
                     .subscribe(res => {
                       this.posts.unshift(res);

                       this.post = {
                        title: '',
                        body: ''
                      }

                      this.showForm = false

                       this.flashMessage.show('Post is Created', {
                         timeout: 5000,
                         cssClass: 'alert-success'
                       })
                     },
                     err => {
                      this.flashMessage.show(err.message, {
                        timeout: 5000,
                        cssClass: 'alert-danger'
                      })
                     }
                     )
 } 

 getClients() {
   this.courseService.getAllClients()
                     .subscribe((res: any[]) => {
                        this.posts = res;
                     })
 }

}
