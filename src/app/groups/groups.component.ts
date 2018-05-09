import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';
import { debug } from 'util';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }
  groups = [];
  ngOnInit() {
    this.getGroup();
  }
  getGroup() {
    console.log("getGroups");

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
  addGroup(name, description){
    let body = {
      Name: name,
      Description: description
    }
    console.log(name, description)
    this.apiService.post('/Groups/AddGroups', body).subscribe((data: any) => { 
      this.getGroup();

  })
}
  deleteGroup(id){
    this.apiService.get('/Groups/DeleteGroup/' + id).subscribe((data: any) => { 
    this.getGroup();
    })
  }
  

}
