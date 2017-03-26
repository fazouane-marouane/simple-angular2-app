import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  private list: Array<string>;

  constructor() {
    this.list = Array.from(Array(100).keys()).map(String);
  }

  ngOnInit() {
  }

}
