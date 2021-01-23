import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset > 50) {
      this.srink = true;
    } else {
      this.srink = false;
    }
  }
  srink = false;

  constructor() { }

  ngOnInit(): void {
  }

}
