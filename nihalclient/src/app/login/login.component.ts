import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginDto } from './login.dto';
import { DataDto } from './data.dto';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto: LoginDto = new LoginDto();
  dataDto: DataDto = new DataDto();

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.loginService.login(this.loginDto).subscribe(dataDto =>{
      let data:any;
      data = dataDto
      if(data.status == 'SUCCESS'){
        let id = data.id;
        let name = data.name;
        let role = data.role;
        
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('role', role);

        this.router.navigate(['userDashboard']);
      }
      else{
        //show error on login page fronted part
        this.router.navigate(['login']);
        
      }
    })
  }

}
