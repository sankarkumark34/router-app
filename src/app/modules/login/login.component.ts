import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private authService : AuthService,
    private router: Router) { }
  login(): void {
    this.authService.userLogin(this.email,this.password).subscribe(result=>{
      console.log(result);
    })
}

  ngOnInit(): void {
  }

}