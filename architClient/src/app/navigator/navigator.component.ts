import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('id')
    if (user === null) {
        return false
    }
    else{
      return true
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['logout']);
  }
}
