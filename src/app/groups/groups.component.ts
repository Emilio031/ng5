import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';
import { debug } from 'util';
import { Group } from '../../typings';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {}
  groups: Group[];

  ngOnInit() {
    this.geAllGroups();
  }

  geAllGroups() {
    console.log('getGroups');
    this.apiService.get('/Groups/GetAllGroups').subscribe((data: any) => {
      this.groups = data;
    });
  }
  addGroup(name, description) {
    const body = {
      Name: name,
      Description: description
    };
    console.log(name, description);
    this.apiService.post('/Groups/AddGroups', body).subscribe((data: any) => {
      this.geAllGroups();
    });
  }
  deleteGroup(id) {
    this.apiService.get('/Groups/DeleteGroup/' + id).subscribe((data: any) => {
      this.geAllGroups();
    });
  }
}
