import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getAllClients() {
   return this.http.get(this.url);
  }

  persistPost(post) {
    return this.http.post(this.url, post);
  }
}
