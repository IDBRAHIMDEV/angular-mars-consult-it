import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllClients() {
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
