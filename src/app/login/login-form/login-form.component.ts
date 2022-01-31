import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  LoginService: any;

  constructor(private login:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginClicked()
  {
    this.router.navigateByUrl('/home')
  }
 logiUSER()
 {

  const user = {
    email: 'teesthamaada@hamada.com',
    password: '12345678',
  }


  
  this.LoginService.login(user).subscribe(
    (next: { token: string; })=>{
      localStorage.setItem('token', next.token)
    }
  )
}


 }

