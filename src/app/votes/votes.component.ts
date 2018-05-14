import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  id: number;
  group = [];
  topics = [];
  topicResult = [];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.getGroupTopics(this.id);
    });
  }

  getGroupTopics(id) {
    this.apiService.get('/Groups/GetGroupVoteTopics/' + this.id).subscribe((data: any) => {
      console.log('getGroupTopics', data);
      this.group.push({
        Id: data.Id,
        Name: data.Name,
        Description: data.Description
      });
      for (const x of data.VoteTopics) {
        this.topics.push({
          Id: x.Id,
          Name: x.Name,
          Description: x.Description,
          IsActive: x.IsActive,
          GroupId: x.GroupId,
          AllowItems: x.AllowItems,
          CanAddItems: x.CanAddItems,
          CreateMemberId: x.CreateMemberId,
          CreatedDate: x.CreatedDate,
          ExpireDate: x.ExpireDate,
          VoteItems: x.VoteItems
        });
      }
      console.log(this.group);
      console.log(this.topics);
    });
  }

  getTopicResult(id) {
    this.apiService.get('/Groups/GetVoteResultDetail/' + this.id).subscribe((data: any) => {});
  }
}
