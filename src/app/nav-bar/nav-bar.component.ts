import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  loggedinUser!: string;
  constructor() { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedinUser = localStorage.getItem('token') ?? '';
    return this.loggedinUser;
  }
  OnLogout(){
    localStorage.removeItem('token');
  }
}
