import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
  })

  
  export class AuthComponent {
    user = {
      username: '',
      password: ''
    };
  
    
  constructor(private authApi: AuthApiService, private router: Router) { }

  loginUsername(event: any) {
    this.user.username = event.target.value;
  }

  loginPassword(event: any) {
    this.user.password = event.target.value;
  }

  loginUser() {
    this.authApi
      .login_send_credentials(this.user)
      .subscribe(
        res => {
          //localStorage.setItem('token', res.token);
          localStorage.setItem('cookie', res.cookie);
          console.log(res);
          this.router.navigate(['/'])
          console.error;
        }
      )
      this.router.navigate(['/home']);
    }

}
  