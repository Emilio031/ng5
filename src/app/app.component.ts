import { Component } from '@angular/core';
import { ApiService } from './ApiService/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public apiService: ApiService) {}
  title = 'app';
}
