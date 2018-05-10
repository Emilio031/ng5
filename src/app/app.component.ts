import { Component } from '@angular/core';
import { ApiService } from './ApiService/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public apiService: ApiService, private router: Router) {}
  title = 'app';

  logout() {
    this.apiService.get('/Identities/Logout').subscribe((data: any) => {
      this.apiService.setLoginStatus(false);
      console.log('logout');
      this.router.navigate(['home']);
    });
  }
}
