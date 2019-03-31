import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

 @Input('like') myLike: number = 0;
@Input('dis-like') myDisLike: number = 0;

@Output('changeVoteInChild') changeVoteInChild = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.myLike++;
    this.changeVoteInChild.emit({type: 1, data: this.myLike});
  }

  disLike() {
    this.myDisLike++;
    this.changeVoteInChild.emit({type: 0, data: this.myDisLike});
  }

}
