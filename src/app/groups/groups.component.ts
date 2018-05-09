import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService/api.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  groups = [];
  ngOnInit() {
  }
  getGroup() {
    this.apiService.get('/Groups/GetAllGroups').subscribe((data: any) => {

      for (const x of data) {
        this.groups.push({
          Id: x.Id,
          Name: x.Name,
          Description: x.Description
        });
      }
    });
  }

}
