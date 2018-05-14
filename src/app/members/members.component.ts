import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService/api.service';
// import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  members = [];

  ngOnInit() {
    this.GetAllMembers();
  }

  GetAllMembers() {
    console.log('getGroups');

    this.apiService.get('/Members/GetAllMembers').subscribe((data: any) => {
      for (const x of data) {
        this.members.push({
          Id: x.Id,
          Name: x.Name,
          Gender: x.Gender,
          Birthday: x.Birthday,
          Email: x.Email,
          Token: x.Token,
          IsAdmin: x.IsAdmin,
          CreatedDate: x.CreatedDate,
          ModifyDate: x.ModifyDate
        });
      }
    });
  }
}
