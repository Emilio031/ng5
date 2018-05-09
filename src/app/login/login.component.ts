import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  email: any = {};
  password: any = {};
  token: string;
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.email = 'Emilio1@cc';
    this.password = 'kevin807';
  }

  login(username, password) {
    const body = {
      Email: username,
      Password: password
    };
    console.log('login', body);

    this.apiService.post('/Identities/Login', body).subscribe((data: any) => {
      if (data.Success) {
        this.router.navigate(['groups']);
        this.token = data.Result.Token;
        this.apiService.setToken(data.Result.Token);
        console.log(this.token);
      } else {
        alert(data.Message);
      }
    });
  }
}
