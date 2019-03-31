import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

 @Input('like') myLike: number = 0;
@Input('dis-like') myDisLike: number = 0;

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.myLike++;
  }

  disLike() {
    this.myDisLike++;
  }

}
