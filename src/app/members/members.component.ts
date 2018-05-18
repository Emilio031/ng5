import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService/api.service';
import { Member } from '../../typings';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  constructor(public apiService: ApiService) {}
  members: Member[];

  ngOnInit() {
    this.GetAllMembers();
  }

  GetAllMembers() {
    console.log('getGroups');

    this.apiService.get('/Members/GetAllMembers').subscribe((data: any) => {
      this.members = data;
    });
  }
}
