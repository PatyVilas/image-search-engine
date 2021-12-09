import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@shared/classes/user';
import { LoginService } from '@shared/services/login.service';
import { TokenService } from '@shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService, private tokenService: TokenService, private router: Router) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

  public submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        this.tokenService.setToken(data)
        this.tokenService.setUser(this.user.userName)
        this.router.navigate(['/'])
      },
      (error: Error) => {
        console.error('Login error');
      }
    )
  }
}
