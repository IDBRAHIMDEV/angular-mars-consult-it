import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  title = "Mohamed IDBRAHIM";

  constructor() { }

  ngOnInit() {
  }

  showSomeThing() {
    return this.title;
  }

}
