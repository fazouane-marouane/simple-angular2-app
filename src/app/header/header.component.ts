import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private navLinks: Array<object>;
  constructor() {
    this.navLinks = [
      {
      name: 'Home',
      path: '/'
     },
     {
      name: 'View1',
      path: 'view1'
     },
     {
      name: 'View2',
      path: 'view2'
     }];
  }

  ngOnInit() {
  }

}
