import { Component } from '@angular/core';
import { ApiService } from './ApiService/api.service';

import {} from ''
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public apiService: ApiService) {}
  title = 'app';
}
