import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  editable = false;
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

 editPost(post) {
   this.post = post;
   this.editable = this.showForm = true
 }

 addForm() {
   
    if(!this.editable && this.showForm){
      this.showForm = false;
    }
   else if(this.editable) {
    this.post = {
      title: '',
      body: ''
    };
    this.editable = false;
   }
   else{
    this.showForm = !this.showForm;
   }
     
 }

 updatePost() {
   this.courseService.updatePost(this.post)
                     .subscribe(res => {
                       this.post = {
                         title: '',
                         body: ''
                       }
                       console.log(res)
                       this.showForm = false;
                     })
 }

 removePost(id, index) {
   this.courseService.deletePost(id)
                     .subscribe(res => {
                       this.posts.splice(index, 1);
                     })
 }

}
